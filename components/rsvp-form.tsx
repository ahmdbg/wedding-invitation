"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RSVPForm() {
  return (
    <section className="py-24 bg-petal px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif mb-4">RSVP & Ucapan</h2>
          <p className="text-muted-foreground">Mohon konfirmasi kehadiran Anda sebelum hari H</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              id="name"
              placeholder="Masukkan nama Anda"
              className="bg-lace border-none focus-visible:ring-sapphire"
            />
          </div>

          <div className="space-y-3">
            <Label>Kehadiran</Label>
            <RadioGroup defaultValue="hadir" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hadir" id="hadir" />
                <Label htmlFor="hadir">Hadir</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tidak" id="tidak" />
                <Label htmlFor="tidak">Berhalangan</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Pesan & Doa</Label>
            <Textarea
              id="message"
              placeholder="Tuliskan pesan atau doa untuk mempelai"
              className="bg-lace border-none h-32 focus-visible:ring-sapphire"
            />
          </div>

          <Button className="w-full bg-sapphire hover:bg-midnight text-white py-6 rounded-xl text-lg transition-all">
            Kirim Ucapan
          </Button>
        </form>
      </div>
    </section>
  )
}
