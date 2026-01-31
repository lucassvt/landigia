'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Users, Store, Heart, Truck, ShoppingCart, Award,
  BarChart3, Package, Wallet, ClipboardCheck, FileText,
  Bot, Building2, ExternalLink, Lock
} from 'lucide-react'
import ComingSoonModal from './ComingSoonModal'
import { modulesConfig } from '@/lib/modules-config'
import { Module } from '@/types'

const iconMap: Record<string, any> = {
  Users, Store, Heart, Truck, ShoppingCart, Award,
  BarChart3, Package, Wallet, ClipboardCheck, FileText,
  Bot, Building2,
}

function ModuleItem({ module, onComingSoon }: { module: Module; onComingSoon: () => void }) {
  const Icon = iconMap[module.icon] || Users

  const handleClick = () => {
    if (module.isActive && module.url) {
      window.open(module.url, '_blank', 'noopener,noreferrer')
    } else {
      onComingSoon()
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, x: module.isActive ? 5 : 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`
        flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
        ${module.isActive
          ? 'glass-card hover:border-mascotera-turquesa/50'
          : 'glass-card opacity-60 hover:opacity-80'
        }
      `}
    >
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
        ${module.isActive
          ? 'bg-mascotera-turquesa/20 text-mascotera-turquesa'
          : 'bg-gray-700/50 text-gray-500'
        }
      `}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={`font-medium text-sm ${module.isActive ? 'text-white' : 'text-gray-400'}`}>
        {module.name}
      </span>
      {module.isActive ? (
        <ExternalLink className="w-4 h-4 text-mascotera-turquesa/60 ml-auto" />
      ) : (
        <Lock className="w-3 h-3 text-mascotera-amarillo/60 ml-auto" />
      )}
    </motion.div>
  )
}

export default function CentralLayout() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <>
      <section className="flex-1 flex items-center justify-center pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Panel Izquierdo - Ventas y Operaciones */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-base font-display font-semibold text-mascotera-turquesa mb-4 text-center">
                Ventas y Operaciones
              </h3>
              <div className="space-y-2">
                {modulesConfig.ventasOperaciones.map((module) => (
                  <ModuleItem
                    key={module.id}
                    module={module}
                    onComingSoon={() => setShowComingSoon(true)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Centro - Logo Mascotera IA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center py-8"
            >
              {/* Logo con efecto de brillo */}
              <div className="relative">
                {/* Resplandor de fondo */}
                <div className="absolute inset-0 blur-3xl bg-mascotera-turquesa/20 rounded-full scale-150" />

                {/* Anillos decorativos */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-mascotera-turquesa/20"
                  style={{ transform: 'scale(1.5)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-mascotera-amarillo/10"
                  style={{ transform: 'scale(1.8)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />

                {/* Imagen del logo */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  <Image
                    src="/images/logo.png"
                    alt="La Mascotera"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Texto IA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <h1 className="text-4xl sm:text-5xl font-display font-bold gradient-text tracking-wider">
                  INTELLIGENCE
                </h1>
                <p className="text-gray-500 text-sm mt-2 tracking-widest">
                  CENTRO DE CONTROL
                </p>
              </motion.div>

              {/* Indicador de estado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full glass"
              >
                <div className="w-2 h-2 rounded-full bg-mascotera-turquesa animate-pulse" />
                <span className="text-xs text-gray-400">Sistema Operativo</span>
              </motion.div>
            </motion.div>

            {/* Panel Derecho - Administración y Franquicias */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-base font-display font-semibold text-mascotera-amarillo mb-4 text-center">
                Administracion y Franquicias
              </h3>
              <div className="space-y-2">
                {modulesConfig.adminFranquicias.map((module) => (
                  <ModuleItem
                    key={module.id}
                    module={module}
                    onComingSoon={() => setShowComingSoon(true)}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </>
  )
}
