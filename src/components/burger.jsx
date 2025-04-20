'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo-2lct-blanc-fond-noir-sans-baseline.png'

export default function Burger() {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }

  useEffect(() => {
    document.body.classList.toggle('no-scroll', burgerOpen)
  }, [burgerOpen])

  return (
    <div className="fixed py-2 px-6 bg-[#050305] flex justify-between items-center w-full md:hidden z-[999]">
      <Link href="/">
        <Image src={logo} alt="Logo 2LCT" className='w-28' />
      </Link>

      <div
        className="flex flex-col gap-1 cursor-pointer z-[999]"
        onClick={toggleBurger}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleBurger()}
        aria-expanded={burgerOpen}
      >
        <span className="w-[7px] h-[7px] rounded bg-[#E58BD3] transition-all" />
        <span className="w-[7px] h-[7px] rounded bg-[#E58BD3] transition-all" />
        <span className="w-[7px] h-[7px] rounded bg-[#E58BD3] transition-all" />
      </div>

      {/* 🟣 Overlay assombrie */}
      {burgerOpen && (
        <div
          onClick={toggleBurger}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[998]"
        />
      )}

      {/* 🟣 Menu déroulant */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white shadow-lg flex flex-col items-start gap-6 py-10 px-6 transform transition-transform duration-300 ease-in-out ${
          burgerOpen ? 'translate-x-0' : 'translate-x-full'
        } z-[998]`}
      >
        <Link href="/" onClick={toggleBurger} className="hover:text-[#E58BD3] text-lg">Accueil</Link>
        <Link href="/prestations" onClick={toggleBurger} className="hover:text-[#E58BD3] text-lg">Prestations</Link>
        <Link href="/portfolio" onClick={toggleBurger} className="hover:text-[#E58BD3] text-lg">Portfolio</Link>
        <Link href="/gestion-de-projet" onClick={toggleBurger} className="hover:text-[#E58BD3] text-lg">Gestion de projet</Link>
        <Link href="/a-propos" onClick={toggleBurger} className="hover:text-[#E58BD3] text-lg">À propos</Link>
        <Link
          href="/contact"
          onClick={toggleBurger}
          className="bg-[#E58BD3] text-white px-4 py-2 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
