'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo-2lct-blanc-fond-transparent.png'
import ParticlesBackground from "./ParticlesBackground"

import "../styles/globals.css";

export default function HeaderHome() {


  return (
    <header className="relative w-full flex flex-col bg-[url('/2lct-page-accueil-code-site-web.png')] h-full bg-cover bg-center z-[999]">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <ParticlesBackground />
      <div className="absolute w-full h-full flex flex-col items-center">
        <div className=" flex justify-center items-center gap-40">
            <Image src={logo} alt="logo 2lct" className="  h-24 w-auto z-20"/>
            <div className=" flex gap-10 w-50 text-white z-20 items-center">
                <Link href="/" className="hover:text-[#E58BD3]">Accueil</Link>
                <Link href="/prestations" className="hover:text-[#E58BD3]">Prestations</Link>
                <Link href="/portfolio" className="hover:text-[#E58BD3]">Portfolio</Link>
                <Link href="/gestion-de-projet" className="hover:text-[#E58BD3]">Gestion de projet</Link>
                <Link href="/a-propos" className="hover:text-[#E58BD3]">À propos</Link>
                <Link href="/contact" className="hover:text-[#E58BD3] hover:bg-white bg-[#E58BD3] p-2 pl-4 pr-4">Contact</Link>
            </div>
        </div>
        <div className=" flex flex-col text-white text-center gap-10 mt-60 z-20 justify-self-center">
            <p className="text-4xl flex justify-center items-center gap-6 font-bold"><span className="bg-[#E58BD3] w-24 h-0.5"></span>2LCT <span className="bg-[#E58BD3] w-24 h-0.5"></span></p>
            <h1 className="text-3xl font-semibold">CREATION DE <span className="text-[#E58BD3]">SITES WEB</span> & <span className="text-[#E58BD3]">SOLUTIONS DIGITALES</span></h1>
            <p className="font-extralight">Freelance à Toulouse et en haute Garonne</p>
            <a className="bg-[#E58BD3] w-fit p-4 self-center hover:text-[#E58BD3] hover:bg-white" href="/contact">Demander votre devis gratuit</a>
        </div>
      </div>
    </header>
  )  
}

