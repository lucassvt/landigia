'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, LogIn } from 'lucide-react'
import LoginModal from './LoginModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/images/isotipo.png"
                  alt="La Mascotera"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold gradient-text">
                  MASCOTERA
                </h1>
                <p className="text-xs text-mascotera-turquesa tracking-[0.3em]">
                  INTELLIGENCE
                </p>
              </div>
            </motion.div>

            {/* Título central - solo desktop */}
            <div className="hidden md:flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-mascotera-turquesa/50" />
              <span className="text-sm text-gray-400 font-light tracking-wider">
                Centro de Control
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-mascotera-turquesa/50" />
            </div>

            {/* Botón Login - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:flex items-center gap-2 btn-futuristic"
            >
              <LogIn className="w-4 h-4" />
              <span>Ingresar</span>
            </motion.button>

            {/* Menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-mascotera-turquesa"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden glass border-t border-mascotera-turquesa/20"
          >
            <div className="px-4 py-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsLoginOpen(true)
                }}
                className="w-full btn-futuristic flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Ingresar</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Línea de neón inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mascotera-turquesa/50 to-transparent" />
      </motion.header>

      {/* Modal de Login */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}
