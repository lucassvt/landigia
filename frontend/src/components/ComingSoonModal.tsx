'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Rocket, Clock, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md glass rounded-2xl overflow-hidden">
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Contenido */}
              <div className="p-8 text-center">
                {/* Animación de engranajes/construcción */}
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-mascotera-turquesa/30" />
                  <div className="absolute inset-4 rounded-full border-4 border-dashed border-mascotera-amarillo/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Rocket className="w-12 h-12 text-mascotera-turquesa" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Sparkles animados */}
                <motion.div
                  className="absolute top-20 left-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-mascotera-amarillo" />
                </motion.div>
                <motion.div
                  className="absolute top-32 right-12"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Sparkles className="w-4 h-4 text-mascotera-turquesa" />
                </motion.div>

                {/* Texto */}
                <h3 className="text-2xl font-display font-bold mb-3">
                  <span className="gradient-text">Estamos Construyendo</span>
                </h3>
                <h4 className="text-xl text-white mb-4">
                  Algo Increíble
                </h4>
                <p className="text-gray-400 mb-6">
                  Este módulo estará disponible muy pronto.
                  Nuestro equipo está trabajando para brindarte la mejor experiencia.
                </p>

                {/* Indicador de tiempo */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mascotera-turquesa/10 border border-mascotera-turquesa/30">
                  <Clock className="w-4 h-4 text-mascotera-turquesa" />
                  <span className="text-sm text-mascotera-turquesa">Próximamente disponible</span>
                </div>

                {/* Botón */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="mt-8 w-full btn-futuristic"
                >
                  Entendido
                </motion.button>
              </div>

              {/* Decoración inferior */}
              <div className="h-1 bg-gradient-to-r from-mascotera-turquesa via-mascotera-amarillo to-mascotera-naranja" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
