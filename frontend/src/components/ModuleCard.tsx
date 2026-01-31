'use client'

import { motion } from 'framer-motion'
import {
  Users, Store, Heart, Truck, ShoppingCart, Award,
  BarChart3, Package, Wallet, ClipboardCheck, FileText,
  Bot, Building2, ExternalLink, Lock
} from 'lucide-react'
import { Module } from '@/types'

const iconMap: Record<string, any> = {
  Users, Store, Heart, Truck, ShoppingCart, Award,
  BarChart3, Package, Wallet, ClipboardCheck, FileText,
  Bot, Building2,
}

interface ModuleCardProps {
  module: Module
  index: number
  onComingSoon: () => void
}

export default function ModuleCard({ module, index, onComingSoon }: ModuleCardProps) {
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`
        relative p-5 rounded-xl cursor-pointer module-card
        ${module.isActive
          ? 'glass-card hover:border-mascotera-turquesa/50'
          : 'glass-card opacity-70 hover:opacity-90'
        }
      `}
    >
      {/* Indicador de estado */}
      {!module.isActive && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-mascotera-amarillo bg-mascotera-amarillo/10 rounded border border-mascotera-amarillo/30">
            <Lock className="w-3 h-3" />
            Pronto
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icono */}
        <div className={`
          flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
          ${module.isActive
            ? 'bg-mascotera-turquesa/20 text-mascotera-turquesa'
            : 'bg-gray-700/50 text-gray-500'
          }
        `}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`
              font-semibold truncate
              ${module.isActive ? 'text-white' : 'text-gray-400'}
            `}>
              {module.name}
            </h3>
            {module.isActive && (
              <ExternalLink className="w-4 h-4 text-mascotera-turquesa/60" />
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {module.description}
          </p>
        </div>
      </div>

      {/* Indicador de activo */}
      {module.isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mascotera-turquesa via-mascotera-turquesa-light to-mascotera-amarillo rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </motion.div>
  )
}
