'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Círculo de resplandor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mascotera-turquesa/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido textual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-mascotera-amarillo" />
              <span className="text-sm text-gray-300">Potenciado por IA</span>
            </motion.div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-white">Bienvenido al</span>
              <br />
              <span className="gradient-text">Futuro Digital</span>
              <br />
              <span className="text-white">de La Mascotera</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Sistemas inteligentes integrados para optimizar cada aspecto de tu gestión.
              Un solo acceso, infinitas posibilidades.
            </p>

            {/* Features destacadas */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card"
              >
                <Zap className="w-5 h-5 text-mascotera-amarillo" />
                <span className="text-sm text-gray-300">Acceso Unificado</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card"
              >
                <Shield className="w-5 h-5 text-mascotera-turquesa" />
                <span className="text-sm text-gray-300">Seguridad Avanzada</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagen del robot/mascota */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Anillo giratorio */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-mascotera-turquesa/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-mascotera-amarillo/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Imagen central */}
              <div className="absolute inset-8 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-robot.png"
                  alt="Mascotera IA"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>

              {/* Punto de luz */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-mascotera-turquesa rounded-full animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Línea divisora con gradiente */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-mascotera-turquesa/30 to-transparent" />
      </div>
    </section>
  )
}
