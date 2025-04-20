'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'


import HeaderHome from '../components/headerHome'

import ParticlesBackground from '../components/ParticlesBackground'
import image1Home from '@/public/2lct-page-accueil-maquette-site-web.svg'
import image2Home from '@/public/2lct-page-accueil-bureau-double-ecran.svg'
import image3Home from '@/public/2lct-page-accueil-collaboration-site-web.svg'

export default function Home() {
  const [home, setHome] = useState({})
  
  useEffect(() => {
    const fetchServices = async () => {
      try {        
        const res = await fetch('/api/home')
        const data = await res.json()
        setHome(data)
      } catch (error) {
        console.error("Erreur lors du fetch :", error)
      }
    }
    fetchServices()
  }, [])
  return (
    <div>
    <HeaderHome/>
    
    <main>
    <section className='flex flex-col justify-between px-5 py-10'>
    <div className='flex gap-6 items-center justify-center'>
    <div className='flex flex-col gap-6 w-[45%]'>
    <Image src={image1Home} alt='' />
    <Image src={image2Home} alt=''/>
    </div>
    <div className='flex w-[45%] h-[100%] object-cover'>
    <Image src={image3Home} alt=''/>
    </div>
    </div>
    <div className='flex flex-col gap-6 py-10'>
    <p className='hidden text-[#E58BD3] md:flex items-center justify-start gap-1 font-bold'>Une Collaboration Personnalisée <span className="bg-[#E58BD3] w-4 h-1"></span></p>
    
    <h2 className='text-3xl font-bold'>Votre Partenaire pour Développer Votre Présence en Ligne</h2>
    
    <div className='flex flex-col gap-4 text-base leading-relaxed'>
    <p>
    Bonjour, je suis Laura, freelance spécialisée dans la création de sites web et les solutions digitales. Je vous accompagne à chaque étape pour concevoir un site <b>adapté à vos besoins</b>.
    </p>
    
    <p>
    Que vous cherchiez à renforcer votre présence en ligne ou à mettre en place une stratégie digitale efficace, je suis là pour vous aider à <b>atteindre vos objectifs</b> grâce à un <b>accompagnement personnalisé</b>.
    </p>
    
    <p>
    En tant que freelance, je suis votre <b>unique interlocutrice</b>, ce qui garantit un suivi de projet fluide, une écoute attentive, et des solutions <b>sur mesure</b>.
    </p>
    </div>
    
    <div className='flex gap-6 pt-4'>
    <div className='w-4 h-auto bg-[#E58BD3]'></div>
    <p className='font-semibold leading-relaxed'>
    Vous êtes au cœur de mon approche. Que vous soyez une start-up, une PME ou un indépendant, je prends le temps de comprendre vos besoins pour créer un site qui reflète <b>votre identité</b> et vous aide à <b>atteindre vos objectifs</b>.
    </p>
    </div>
    <Link href="/prestations" className='bg-[#E58BD3] text-white px-6 py-3 w-fit rounded hover:bg-white hover:text-[#E58BD3] transition'>
    En savoir plus
    </Link>
    </div>
    </section>
    
    
    <section className='bg-[#FCFAFC] px-5 py-16 flex flex-col gap-12 items-center text-center' >
    <p className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Services<span className="bg-[#E58BD3] w-24 h-1"></span></p>
    <h2 className='text-3xl font-bold'>Des Solutions Digitales à Votre Mesure</h2>
    
    <div className='flex flex-wrap gap-8 justify-center w-full'>
    {home.services && home.services.length > 0 ? (
      home.services.map(service => (
        <div key={service.id} className="  bg-[url('/background-items-services.png')] relative flex flex-col gap-4 w-full p-6 justify-between bg-cover bg-center items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl shadow-md  rounded-xl  hover:bg-white hover:bg-opacity-90">
        <div className="absolute inset-0 bg-[white]/60 z-1"></div>
        <div className="absolute inset-0 bg-[#050305]/75 z-2"></div>
        <div className="relative z-10 flex flex-col gap-4 text-white">
        <i className={`${service.icon} fa-2xl relative z-10 text-[white] m-4`} />
        <h3 className='text-lg font-semibold'>{service.name}</h3>
        <p className='text-sm'>{service.card_description}</p>
        </div>
        <a 
        href={`/prestations/${service.slug}`} 
        className='relative z-10 mt-6 bg-[#E58BD3] text-white py-2 px-4 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit'
        >
        En savoir plus
        </a>          
        </div>
      ))
    ) : (
      <p>Chargement des prestations...</p>
    )}
    </div>
    </section>
    
    <section className='px-5 py-16 flex flex-col gap-12 items-center text-center'>
    <p className='text-[#E58BD3] flex items-center uppercase gap-6 font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Portfolio<span className="bg-[#E58BD3] w-24 h-1"></span></p>
    <h2 className='text-3xl font-bold'>Découvrez Quelques Réalisations</h2>
    
    {home.projects && home.projects.length > 0 ? (
      home.projects.map(project => (
        <div key={project.id} className='flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm transition-transform hover:scale-105 hover:shadow-xl'>
        <Image 
        src={`/${project.image}`} 
        alt={project.name} 
        width={600} 
        height={400}
        className="object-cover"
        />
        <div className='p-6 flex flex-col gap-3 items-center'>
        <h3 className='text-xl font-semibold text-[#E58BD3]'>{project.name}</h3>
        <p className='text-sm'>{project.card_description}</p>
        <a 
              href={`/portfolio/${project.slug}`}
              className="text-sm text-[#E58BD3] hover:underline w-fit"
            >
              Voir le projet →
            </a>
        </div>
        </div>
      ))
    ) : (
      <p>Chargement des projets...</p>
    )}
    
    </section>
    
    <section className="relative px-5 py-20 bg-[#050305] text-white flex flex-col gap-12 items-center text-center overflow-hidden">
  <ParticlesBackground />

  <p className="text-[#E58BD3] flex items-center gap-4 font-bold uppercase tracking-wide z-10">
    <span className="bg-[#E58BD3] w-12 h-0.5"></span>
    Freelancing
    <span className="bg-[#E58BD3] w-12 h-0.5"></span>
  </p>

  <h2 className="text-3xl font-bold z-10">Pourquoi me choisir ?</h2>

  <div className="max-w-5xl flex flex-col gap-8 z-10">
    <p className="text-white/90 leading-relaxed">
      Mon objectif : <span className="text-[#E58BD3] font-semibold">créer des solutions digitales utiles, jolies et efficaces</span>, en gardant un vrai lien humain tout au long du projet.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-start gap-10 text-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-[#E58BD3] font-semibold text-l">🎯 Un site à votre image</h3>
        <p className="text-white/80 text-sm">Design, ton, contenu : tout est pensé pour refléter votre personnalité ou celle de votre marque.</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#E58BD3] font-semibold text-l">💡 Des conseils personnalisés</h3>
        <p className="text-white/80 text-sm">Pas de jargon inutile. On parle simple, on avance ensemble, et je vous guide à chaque étape.</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#E58BD3] font-semibold text-l">⚙️ Une solution clé en main</h3>
        <p className="text-white/80 text-sm">Je m’occupe de tout : création, optimisation, sécurité, SEO, maintenance. Zéro prise de tête pour vous.</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#E58BD3] font-semibold text-l">🤝 Un vrai suivi humain</h3>
        <p className="text-white/80 text-sm">On ne coupe pas les ponts à la livraison. Je reste dispo pour vous accompagner et faire évoluer votre site.</p>
      </div>
    </div>
  </div>

  <a 
    href="/contact"
    className="z-10 mt-10 bg-[#E58BD3] text-white px-6 py-3 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit"
  >
    Discutons de votre projet
  </a>
</section>

    </main>    
    
    </div>
  );
}
