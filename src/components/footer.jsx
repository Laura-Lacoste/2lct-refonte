import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo-2lct-blanc-fond-noir.png'

export default function Footer() {
  return (
    <footer className="bg-[#050305] text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Bloc logo + baseline */}
        <div className="flex flex-col gap-4 items-start">
          <Image src={logo} alt="Logo 2LCT" className="w-32 h-auto" />
          <p className="text-sm text-white/60">
            Création de sites web pour indépendants <br/> & petites entreprises à Toulouse.
          </p>
          
        </div>

        {/* Navigation rapide */}
        <div className="flex flex-col gap-2">
          <p className="uppercase font-bold text-[#E58BD3]">Navigation</p>
          <Link href="/" className="hover:text-[#E58BD3] transition">Accueil</Link>
          <Link href="/prestations" className="hover:text-[#E58BD3] transition">Prestations</Link>
          <Link href="/portfolio" className="hover:text-[#E58BD3] transition">Portfolio</Link>
          <Link href="/gestion-de-projet" className="hover:text-[#E58BD3] transition">Gestion de projet</Link>
          <Link href="/a-propos" className="hover:text-[#E58BD3] transition">À propos</Link>
          <Link href="/contact" className="hover:text-[#E58BD3] transition">Contact</Link>
        </div>

        {/* Contact rapide */}
        <div className="flex flex-col gap-2">
          <p className="uppercase font-bold text-[#E58BD3]">Contact</p>
          <p className="text-sm text-white/80">Laura - Freelance Web</p>
          <a href="mailto:laura@2lct.fr" className="hover:text-[#E58BD3] transition">laura@2lct.fr</a>
          <a href="https://www.linkedin.com/in/lauralacoste/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E58BD3] transition">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white/50">
        © {new Date().getFullYear()} 2LCT. Tous droits réservés.
      </div>
    </footer>
  )
}
