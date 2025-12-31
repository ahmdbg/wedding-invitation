import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WeddingDetails() {
  const details = [
    {
      title: "Akad Nikah",
      date: "Minggu, 24 Desember 2025",
      time: "08:00 - 10:00 WIB",
      location: "Masjid Agung City Center",
      icon: <Calendar className="w-6 h-6 text-sapphire" />,
    },
    {
      title: "Resepsi",
      date: "Minggu, 24 Desember 2025",
      time: "11:00 - 13:00 WIB",
      location: "Grand Ballroom Hotel Luxury",
      icon: <Clock className="w-6 h-6 text-sapphire" />,
    },
  ]

  return (
    <section className="py-24 bg-bridal-blue px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Detail Acara</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {details.map((item, idx) => (
            <Card
              key={idx}
              className="border-none shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden group hover:translate-y-[-5px] transition-all duration-300"
            >
              <CardContent className="p-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-petal rounded-full mb-4">{item.icon}</div>
                <h3 className="text-2xl font-serif text-midnight">{item.title}</h3>
                <p className="text-lg font-medium">{item.date}</p>
                <p className="text-muted-foreground">{item.time}</p>
                <div className="flex items-center gap-2 pt-4">
                  <MapPin className="w-4 h-4 text-sapphire" />
                  <span className="text-sm italic">{item.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
