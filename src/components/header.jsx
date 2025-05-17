'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo-2lct-blanc-fond-noir.webp'

export default function Header() {
  return (
    <header className="hidden md:flex fixed top-0 left-0 w-full h-28 bg-[#050305] z-[999] shadow-md px-12 text-sm">
      <div className="flex w-full justify-around items-center">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="Logo 2LCT" className="h-20 w-auto" priority />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10 text-white items-center">
          <Link href="/" className="hover:text-[#E58BD3] transition-colors duration-200">Accueil</Link>
          <Link href="/prestations" className="hover:text-[#E58BD3] transition-colors duration-200">Prestations</Link>
          <Link href="/portfolio" className="hover:text-[#E58BD3] transition-colors duration-200">Portfolio</Link>
          <Link href="/a-propos" className="hover:text-[#E58BD3] transition-colors duration-200">À propos</Link>
          <Link
            href="/contact"
            className="bg-[#E58BD3] px-4 py-2 rounded text-[#050305] hover:bg-white hover:text-[#843E76] border border-transparent hover:border-[#843E76] transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
