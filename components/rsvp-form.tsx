"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function RSVPForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Halo, saya ${name}. ${message}`
    const whatsappUrl = `https://wa.me/6285640054840?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-24 bg-petal px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif mb-4">Ucapan Selamat</h2>
          <p className="text-muted-foreground">Tuliskan pesan dan doa untuk mempelai</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              id="name"
              placeholder="Masukkan nama Anda"
              className="bg-lace border-none focus-visible:ring-sapphire"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Pesan & Doa</Label>
            <Textarea
              id="message"
              placeholder="Tuliskan pesan atau doa untuk mempelai"
              className="bg-lace border-none h-32 focus-visible:ring-sapphire"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-sapphire hover:bg-midnight text-white py-6 rounded-xl text-lg transition-all">
            Kirim Ucapan
          </Button>
        </form>
      </div>
    </section>
  )
}
