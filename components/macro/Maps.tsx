export default function LocationSection() {
  return (
    <section className="w-full bg-[#f7ead7]/30 py-16 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2f2f2f] mb-6">
        Temukan <span className="text-[#d4a373]">Kami</span>
      </h2>
      <p className="text-[#2f2f2f]/80 max-w-2xl mx-auto mb-8 px-4">
        Kunjungi langsung <span className="font-semibold">Galeri Rajut Wong Batu</span> di Kota Batu.  
        Kami dengan senang hati menyambut Anda yang ingin melihat dan memesan produk secara langsung.
      </p>

      {/* MAP EMBED */}
      <div className="w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1147847915855!2d112.52853387503711!3d-7.882418192002314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78817a01011d43%3A0x640663fdb188596d!2sGaleri%20Rajut%20Wong%20Batu!5e0!3m2!1sen!2sid!4v1731253580254!5m2!1sen!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-lg max-w-5xl w-full mx-4 sm:mx-auto"
        ></iframe>
      </div>

      {/* BUTTON */}
      <div className="mt-8">
        <a
          href="https://www.google.com/maps/place/Galeri+Rajut+Wong+Batu/@-7.8824182,112.5285339,17z/data=!3m1!4b1!4m6!3m5!1s0x2e78817a01011d43:0x640663fdb188596d!8m2!3d-7.8824182!4d112.5334048!16s%2Fg%2F11j2z6jpbf?hl=id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-8 py-3 bg-[#2f2f2f] text-[#f7ead7] font-semibold hover:scale-105 transition-transform duration-300"
        >
          Lihat di Google Maps
        </a>
      </div>
    </section>
  )
}
