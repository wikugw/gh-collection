'use client'
import { useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

const images = [
  "/images/products/1.png",
  "/images/products/2.png",
  "/images/products/3.png",
  "/images/products/4.png",
  "/images/products/6.png",
  "/images/products/7.png",
  "/images/products/8.png",
  "/images/products/9.png",
  "/images/products/10.png",
  "/images/hero/hero-bag.png",
  "/images/hero/hero-shoes.png",
  "/images/hero/hero-wallet.png",
]

export default function ProductsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="relative w-full overflow-hidden text-center mx-auto px-2 sm:px-4">
      {/* Judul */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2f2f2f] mb-6">
        Produk <span className="text-[#d4a373]">Kami</span>
      </h2>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-full flex justify-center items-center"
            >
              <div className="relative w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Product ${i + 1}`}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol navigasi */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#2f2f2f]/60 text-[#f7ead7] p-3 rounded-full hover:bg-[#2f2f2f] transition"
      >
        ‹
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#2f2f2f]/60 text-[#f7ead7] p-3 rounded-full hover:bg-[#2f2f2f] transition"
      >
        ›
      </button>
    </section>
  )
}
