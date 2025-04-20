'use client'

import Link from "next/link"
import ParticlesBackground from "./ParticlesBackground"

export default function HeaderHome() {
  return (
    <section className="relative w-full flex flex-col bg-[url('/2lct-page-accueil-code-site-web.png')] bg-cover bg-center z-[998] min-h-screen pt-32">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <ParticlesBackground />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        text-white text-center px-6 md:px-0 z-20 max-w-4xl w-full flex flex-col gap-6 md:gap-10 py-20">
        
        <p className="hidden text-2xl md:text-4xl md:flex justify-center items-center gap-4 font-bold tracking-wide uppercase">
          <span className="bg-[#E58BD3] w-16 md:w-24 h-0.5"></span>
          2LCT
          <span className="bg-[#E58BD3] w-16 md:w-24 h-0.5"></span>
        </p>

        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Création de <span className="text-[#E58BD3]">sites web</span> à Toulouse pour 
          <span className="text-[#E58BD3]"> indépendants et petites entreprises</span>
        </h1>

        <h2 className="text-lg md:text-xl font-medium text-white/80">
          Des sites clairs, efficaces et personnalisés pour booster votre visibilité
        </h2>

        <p className="text-sm md:text-base font-extralight text-white/70 leading-relaxed">
          Freelance web basée en Haute-Garonne, je vous accompagne de A à Z pour créer un site professionnel à votre image.
        </p>

        <a
          href="/contact"
          className="bg-[#E58BD3] text-white px-6 py-3 mt-4 rounded shadow hover:bg-white hover:text-[#E58BD3] font-semibold transition-all duration-300 w-fit self-center"
        >
          Demander votre devis gratuit
        </a>
      </div>
    </section>
  )
}
