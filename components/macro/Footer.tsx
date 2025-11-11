import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#7AA4AD] text-[#f7ead7] py-10 px-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
        {/* Nama Brand */}
        <h3 className="text-2xl font-extrabold tracking-wide">
          G.H. Collection
        </h3>

        {/* Deskripsi singkat */}
        <p className="max-w-md text-sm sm:text-base opacity-90">
          Handmade knit bags, shoes, and wallets crafted with love from Kota Batu.  
          Custom request? We make it just for you 💛
        </p>

        {/* Ikon Sosial */}
        <div className="flex space-x-6 mt-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/gh_collections23/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram size={28} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6285234210330?text=Halo!%20Saya%20tertarik%20dengan%20produk%20rajutan%20Anda.%20Apakah%20bisa%20dibantu?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

        {/* Garis dan hak cipta */}
        <div className="w-full h-px bg-[#f7ead7]/40 my-4"></div>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} G.H. Collection. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
