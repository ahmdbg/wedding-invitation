"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = []
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 10 + Math.random() * 10,
          size: 20 + Math.random() * 20,
          rotation: Math.random() * 360,
        })
      }
      setPetals(newPetals)
    }

    generatePetals()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-300 opacity-60"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}