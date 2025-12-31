"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date("2025-12-24T08:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = target - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-lavender text-midnight overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-serif mb-12 italic">Menghitung Hari Menuju Kebahagiaan</h3>
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-serif font-bold">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
