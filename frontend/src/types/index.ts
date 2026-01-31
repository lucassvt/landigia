export interface Module {
  id: string
  name: string
  description: string
  url: string | null
  icon: string
  isActive: boolean
  requiredRole: UserRole[]
}

export type UserRole = 'ventas_operaciones' | 'admin' | 'franquicia' | 'superadmin'

export interface User {
  id: number
  email: string
  nombre: string
  rol: UserRole
  sector: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  checkAuth: () => Promise<void>
}

export interface ModulesConfig {
  ventasOperaciones: Module[]
  adminFranquicias: Module[]
}
