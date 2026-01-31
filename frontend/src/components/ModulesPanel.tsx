'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building } from 'lucide-react'
import ModuleCard from './ModuleCard'
import ComingSoonModal from './ComingSoonModal'
import { modulesConfig } from '@/lib/modules-config'

export default function ModulesPanel() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título de sección */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">Accede a tus </span>
              <span className="gradient-text">Sistemas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Selecciona el módulo al que deseas acceder. Los sistemas marcados como
              &quot;Pronto&quot; estarán disponibles próximamente.
            </p>
          </motion.div>

          {/* Grid de dos columnas */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Panel Ventas y Operaciones */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              {/* Header del panel */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-mascotera-turquesa/20">
                <div className="w-10 h-10 rounded-lg bg-mascotera-turquesa/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-mascotera-turquesa" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    Ventas y Operaciones
                  </h3>
                  <p className="text-xs text-gray-500">
                    Herramientas para el equipo comercial
                  </p>
                </div>
              </div>

              {/* Cards de módulos */}
              <div className="space-y-3">
                {modulesConfig.ventasOperaciones.map((module, index) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    index={index}
                    onComingSoon={() => setShowComingSoon(true)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Panel Administración y Franquicias */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              {/* Header del panel */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-mascotera-amarillo/20">
                <div className="w-10 h-10 rounded-lg bg-mascotera-amarillo/20 flex items-center justify-center">
                  <Building className="w-5 h-5 text-mascotera-amarillo" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    Administración y Franquicias
                  </h3>
                  <p className="text-xs text-gray-500">
                    Gestión administrativa y franquicias
                  </p>
                </div>
              </div>

              {/* Cards de módulos */}
              <div className="space-y-3">
                {modulesConfig.adminFranquicias.map((module, index) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    index={index}
                    onComingSoon={() => setShowComingSoon(true)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal de Próximamente */}
      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </>
  )
}
