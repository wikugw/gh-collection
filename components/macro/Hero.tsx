'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../micro/Button"

const items = ["tas", "sepatu", "dompet"]

const images = [
  "/images/hero/hero-bag.png",
  "/images/hero/hero-shoes.png",
  "/images/hero/hero-wallet.png",
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index)
      setIsAnimating(true)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length)
        setIsAnimating(false)
      }, 800)
    }, 5000)

    return () => clearInterval(interval)
  }, [index])

  const handleSendMsg = () => {
    const phone = "6285234210330" // ganti dengan nomor WhatsApp kamu (tanpa +)
    const message = encodeURIComponent(
      `Halo! Saya tertarik dengan produk rajutan handmade ${items[index]} Anda. Bisakah saya melihat detail atau katalog produknya?`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row h-[91vh] items-center mt-10 md:mt-0 gap-y-10 md:gap-y-0"
    >
      {/* BAGIAN TEKS */}
      <div className="flex flex-1 flex-col items-center md:items-start text-center md:text-left px-6 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2f2f2f] leading-tight">
          Kemewahan <span className="text-[#d4a373]">Terjangkau</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#5a5a5a] max-w-lg min-h-10 relative">
          <span key={index}>
            Rajutan handmade <span className="font-semibold text-[#d4a373]">{items[index]}</span> yang dibuat dengan sepenuh hati — indah, unik, dan bisa disesuaikan dengan keinginan Anda.
          </span>
        </p>

        <Button className="w-100" onClick={handleSendMsg}>
          BELI SEKARANG
        </Button>
      </div>

      {/* BAGIAN GAMBAR */}
      <div className="w-full flex justify-center items-center shrink-0 md:flex-1">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
          {isAnimating && prevIndex !== null && (
            <Image
              alt={`Rajutan handmade ${items[prevIndex]} premium — buatan tangan dari benang pilihan.`}
              key={`prev-${prevIndex}`}
              src={images[prevIndex]}
              fill
              className="object-contain animate-bounce-out absolute"
            />
          )}

          {!isAnimating && (
            <Image
              key={`curr-${index}`}
              src={images[index]}
              fill
              alt={`Rajutan handmade ${items[index]} premium — buatan tangan dari benang pilihan.`}
              className="object-contain animate-bounce-in absolute"
            />
          )}
        </div>
      </div>
    </section>
  )
}
