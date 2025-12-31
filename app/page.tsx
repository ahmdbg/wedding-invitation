"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { WeddingDetails } from "@/components/wedding-details"
import { CountdownTimer } from "@/components/countdown-timer"
import { RSVPForm } from "@/components/rsvp-form"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Music2 } from "lucide-react"

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="min-h-screen">
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
            <CountdownTimer />

            {/* Love Story - Timeline */}
            <section className="py-24 bg-lace overflow-hidden">
              <h2 className="text-4xl font-serif text-center mb-16">Kisah Cinta</h2>
              <div className="max-w-4xl mx-auto px-4 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-sapphire/20 -translate-x-1/2 hidden md:block" />
                {[
                  {
                    date: "Januari 2022",
                    title: "Pertemuan Pertama",
                    desc: "Pertama kali mata kami bertemu di sebuah kedai kopi kecil.",
                  },
                  {
                    date: "Agustus 2023",
                    title: "Komitmen",
                    desc: "Kami memutuskan untuk melangkah lebih serius dalam hubungan ini.",
                  },
                  {
                    date: "Maret 2025",
                    title: "Lamaran",
                    desc: "Janji suci diucapkan di bawah langit senja yang indah.",
                  },
                ].map((story, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center mb-16 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 px-8 text-center md:text-right">
                      {idx % 2 !== 0 ? null : (
                        <>
                          <span className="text-sapphire font-bold">{story.date}</span>
                          <h4 className="text-xl font-serif mt-2">{story.title}</h4>
                          <p className="text-muted-foreground mt-2">{story.desc}</p>
                        </>
                      )}
                      {idx % 2 !== 0 && (
                        <div className="md:hidden">
                          <span className="text-sapphire font-bold">{story.date}</span>
                          <h4 className="text-xl font-serif mt-2">{story.title}</h4>
                          <p className="text-muted-foreground mt-2">{story.desc}</p>
                        </div>
                      )}
                    </div>
                    <div className="w-4 h-4 rounded-full bg-sapphire z-10 my-4 md:my-0" />
                    <div className="md:w-1/2 px-8 text-center md:text-left">
                      {idx % 2 !== 0 ? (
                        <>
                          <span className="text-sapphire font-bold">{story.date}</span>
                          <h4 className="text-xl font-serif mt-2">{story.title}</h4>
                          <p className="text-muted-foreground mt-2">{story.desc}</p>
                        </>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
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
