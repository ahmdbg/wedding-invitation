"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection({ onOpen }: { onOpen: () => void }) {
  const [text, setText] = useState("")
  const fullText = "Romeo & Juliet"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-petal to-bridal-blue">
      <div className="absolute inset-0 bg-[url('/elegant-wedding-background.jpg')] bg-cover bg-center opacity-20 animate-zoom-subtle" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center space-y-6 px-4"
      >
        <p className="text-lg md:text-xl uppercase tracking-[0.3em] text-sapphire font-light">The Wedding of</p>
        <h1 className="text-6xl md:text-9xl font-serif text-midnight min-h-[1.2em]">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-widest">24 . 12 . 2025</p>

        <div className="pt-8">
          <Button
            onClick={onOpen}
            className="bg-sapphire hover:bg-midnight text-white px-10 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Buka Undangan
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
