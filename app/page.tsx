"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { WeddingDetails } from "@/components/wedding-details"
import { CountdownTimer } from "@/components/countdown-timer"
import { RSVPForm } from "@/components/rsvp-form"
import { FallingPetals } from "@/components/falling-petals"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Music2, MapPin } from "lucide-react"

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="min-h-screen">
      <FallingPetals />
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="cover"
            exit={{ opacity: 0, y: -1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <HeroSection
              onOpen={() => {
                setIsOpen(true)
                setIsPlaying(true)
              }}
            />
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            {/* Opening Quote */}
            <section className="py-32 px-4 text-center bg-lace">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
              >
                <div className="w-24 h-[1px] bg-lavender mx-auto" />
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-midnight">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu
                  sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
                </p>
                <div className="w-24 h-[1px] bg-lavender mx-auto" />
              </motion.div>
            </section>

            {/* Mempelai */}
            <section className="py-24 bg-lace px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center">
                {[
                  { name: "Juliet Capulet", parents: "Putri dari Bpk. Capulet & Ibu Capulet", gender: "Wanita" },
                  { name: "Romeo Montague", parents: "Putra dari Bpk. Montague & Ibu Montague", gender: "Pria" },
                ].map((mempelai, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 bg-petal rounded-[3rem] space-y-6"
                  >
                    <div className="w-48 h-64 mx-auto bg-white rounded-full overflow-hidden shadow-inner border-8 border-white">
                      <img
                        src={`/.jpg?height=400&width=300&query=${mempelai.gender === "Wanita" ? "bride" : "groom"}`}
                        alt={mempelai.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-midnight">{mempelai.name}</h3>
                    <p className="text-sm uppercase tracking-widest opacity-70">{mempelai.parents}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <WeddingDetails />

            {/* Wedding Venue */}
            <section className="py-24 bg-bridal-blue px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-midnight">Alamat Acara</h2>
                <div className="space-y-12">
                  {/* Akad Nikah */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-sapphire/10 rounded-full">
                          <MapPin className="w-8 h-8 text-sapphire" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-serif text-sapphire">Akad Nikah</h3>
                          <p className="text-midnight font-medium">Masjid Agung City Center</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-sapphire mt-3 flex-shrink-0"></div>
                            <p className="text-muted-foreground leading-relaxed">
                              Jl. Raya Utama No. 123, Kelurahan Harmoni,<br />
                              Kecamatan Pusat Kota, Jakarta Pusat 10230
                            </p>
                          </div>
                          <div className="bg-lace/50 rounded-xl p-4">
                            <p className="text-sm text-midnight font-medium mb-2">Informasi Parkir:</p>
                            <p className="text-sm text-muted-foreground">
                              Parkir tersedia di area masjid. Silakan datang 30 menit sebelum acara dimulai.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.816666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Resepsi */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-sapphire/10 rounded-full">
                          <MapPin className="w-8 h-8 text-sapphire" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-serif text-sapphire">Resepsi</h3>
                          <p className="text-midnight font-medium">Grand Ballroom Hotel Luxury</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-sapphire mt-3 flex-shrink-0"></div>
                            <p className="text-muted-foreground leading-relaxed">
                              Jl. Mewah Boulevard No. 456, Kelurahan Elegan,<br />
                              Kecamatan Premium District, Jakarta Selatan 12190
                            </p>
                          </div>
                          <div className="bg-lace/50 rounded-xl p-4">
                            <p className="text-sm text-midnight font-medium mb-2">Informasi Tamu:</p>
                            <p className="text-sm text-muted-foreground">
                              Valet parking tersedia. Dress code: Formal attire. Undangan wajib ditunjukkan di pintu masuk.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.816666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            <CountdownTimer />

            {/* Love Story */}
            <section className="py-24 bg-lace px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-midnight">Kisah Cinta</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      date: "Januari 2022",
                      title: "Pertemuan Pertama",
                      desc: "Pertama kali mata kami bertemu di sebuah kedai kopi kecil yang hangat.",
                      icon: "💕",
                    },
                    {
                      date: "Agustus 2023",
                      title: "Komitmen",
                      desc: "Kami memutuskan untuk melangkah lebih serius dalam hubungan ini dengan penuh keyakinan.",
                      icon: "🤝",
                    },
                    {
                      date: "Maret 2025",
                      title: "Lamaran",
                      desc: "Janji suci diucapkan di bawah langit senja yang indah, memulai babak baru kehidupan kami.",
                      icon: "💍",
                    },
                  ].map((story, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                    >
                      <div className="text-4xl mb-4">{story.icon}</div>
                      <span className="text-sapphire font-bold text-sm uppercase tracking-wider">{story.date}</span>
                      <h4 className="text-2xl font-serif mt-3 mb-4 text-midnight">{story.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{story.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <RSVPForm />

            {/* Footer */}
            <footer className="py-20 bg-midnight text-lace text-center px-4">
              <p className="text-2xl font-serif italic mb-6">Terima kasih atas doa dan restunya</p>
              <div className="w-16 h-[1px] bg-petal/30 mx-auto mb-6" />
              <p className="text-sm uppercase tracking-[0.4em] opacity-60">Romeo & Juliet</p>
            </footer>

            {/* Music Control */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="fixed bottom-8 right-8 z-40 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-2xl hover:bg-white transition-all text-sapphire border border-sapphire/20"
            >
              {isPlaying ? <Music className="animate-spin-slow" /> : <Music2 />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
