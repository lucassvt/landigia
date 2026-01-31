'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Cpu, Code } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 px-4 mt-auto">
      {/* Línea divisora superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mascotera-turquesa/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          {/* Logo y marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/images/isotipo.png"
                alt="La Mascotera"
                fill
                className="object-contain opacity-70"
              />
            </div>
            <div className="text-sm text-gray-500">
              <span className="text-gray-400">La Mascotera</span>
              <span className="mx-2">•</span>
              <span>{currentYear}</span>
            </div>
          </motion.div>

          {/* Desarrollador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <Code className="w-4 h-4 text-mascotera-turquesa" />
            <span>Desarrollado por</span>
            <span className="text-mascotera-turquesa font-medium">Lucas Salvatierra</span>
            <span className="text-gray-600">- Software Creator</span>
          </motion.div>

          {/* Derechos reservados */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-600 text-center"
          >
            Todos los derechos reservados
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
