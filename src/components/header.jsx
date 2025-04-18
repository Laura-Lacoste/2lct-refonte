'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo-2lct-noir-fond-transparent.png'

import "../styles/globals.css";

export default function Header() {


  return (
    <header className='fixed w-full flex justify-center gap-40 items-center bg-white z-[998] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
     {/* <header className={`fixed top-0 w-full z-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-md m4' : 'invisible'}`}> */}
       <Image src={logo} alt="logo 2lct" className="h-24 w-auto z-20"/>
        <div className="flex gap-10 bg-red w-50 z-20 items-center">
          <Link href="/" className="hover:text-[#E58BD3]">Accueil</Link>
          <Link href="/prestations" className="hover:text-[#E58BD3]">Prestations</Link>
          <Link href="/portfolio" className="hover:text-[#E58BD3]">Portfolio</Link>
          <Link href="/gestion-de-projet" className="hover:text-[#E58BD3]">Gestion de projet</Link>
          <Link href="/a-propos" className="hover:text-[#E58BD3]">À propos</Link>
          <Link href="/contact" className="hover:text-white bg-[#E58BD3] p-2 pl-4 pr-4">Contact</Link>
        </div>
    </header>
  )  
}
