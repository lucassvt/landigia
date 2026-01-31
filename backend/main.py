from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.database import engine, Base
from app.core.config import settings
from app.core.security import get_password_hash
from app.models.user import User
from app.routes import auth_router, users_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: crear tablas y usuario admin por defecto
    Base.metadata.create_all(bind=engine)

    # Crear usuario superadmin si no existe
    from app.core.database import SessionLocal
    db = SessionLocal()
    try:
        admin = db.query(User).filter(User.email == "admin@lamascotera.com").first()
        if not admin:
            admin = User(
                email="admin@lamascotera.com",
                password_hash=get_password_hash("admin123"),
                nombre="Administrador",
                rol="superadmin",
                sector="IT",
                activo=True
            )
            db.add(admin)
            db.commit()
            print("Usuario administrador creado: admin@lamascotera.com / admin123")
    finally:
        db.close()

    yield
    # Shutdown


app = FastAPI(
    title="Mascotera IA API",
    description="API de autenticación para la plataforma Mascotera IA",
    version="1.0.0",
    lifespan=lifespan
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especificar los dominios permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir routers
app.include_router(auth_router)
app.include_router(users_router)


@app.get("/")
async def root():
    return {
        "message": "Mascotera IA API",
        "version": "1.0.0",
        "docs": "/docs"
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}
