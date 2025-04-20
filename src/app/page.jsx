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
  <div className='flex justify-between p-40'>
    <div className='w-[30%] flex gap-6 items-center'>
      <div className='flex flex-col w-[65%] gap-6'>
        <Image src={image1Home} />
        <Image src={image2Home}/>
      </div>
      <Image src={image3Home} className='w-[30%] h-[100%] object-cover'/>
    </div>
    <div className='flex flex-col gap-14 w-[60%]'>
      <p className='text-[#E58BD3] flex items-center gap-6 font-bold'>Une Collaboration Personnalisée <span className="bg-[#E58BD3] w-24 h-1"></span></p>
      <h2 className='text-3xl font-bold'>Votre Partenaire pour Développer Votre Présence en Ligne</h2>
      <div className='flex flex-col gap-2'>
        <p>Bonjour, je suis Laura, freelance spécialisée dans la création de sites web et les solutions digitales. Je vous accompagne dans chaque étape pour créer un site web qui répond à vos <b>besoins spécifiques</b>. Que vous cherchiez à améliorer votre présence en ligne ou à mettre en place une stratégie digitale efficace, je suis là pour vous aider à <b>atteindre vos objectifs</b> avec un <b>service personnalisé.</b> </p>
        <p>En tant que freelance, je suis votre unique point de contact, ce qui me permet de vous offrir un service sur mesure et une attention particulière à chaque détail de votre projet. Je m'engage à comprendre vos besoins et à vous fournir des <b>solutions adaptées</b> pour un résultat qui correspond à vos attentes.</p>
      </div>
      <div className='flex gap-8 ml-10'>
        <div className='h-30 w-4 bg-[#E58BD3]'></div>
        <p className='font-semibold'>Vous êtes au cœur de mon approche. Que vous soyez une start-up, une PME, ou un entrepreneur, je prends le temps de comprendre vos besoins pour créer un site web qui reflète votre identité et vous aide à atteindre vos objectifs en ligne. Mon objectif est de vous offrir une solution qui vous ressemble et qui répond parfaitement à vos attentes.</p>
      </div>
      <Link href="/prestations" className='bg-[#E58BD3] p-4 w-fit hover:text-white'>En savoir plus</Link>
    </div>
  </div>
  <div className='bg-[#FCFAFC] p-40 flex flex-col gap-14 items-center' >
      <p className='text-[#E58BD3] flex items-center gap-6 font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Services<span className="bg-[#E58BD3] w-24 h-1"></span></p>
      <h2 className='text-3xl font-bold'>Des Solutions Digitales à Votre Mesure</h2>
      <div className='flex flex-wrap gap-14 justify-center'>
      {home.services && home.services.length > 0 ? (
        home.services.map(service => (
          <div key={service.id} className="bg-[url('/background-items-services.png')] relative flex flex-col gap-4 w-1/5 p-10 justify-between bg-cover bg-center  transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white hover:bg-opacity-90">
            <div className="absolute inset-0 bg-white/80 z-1"></div>
            <h3 className='font-semibold relative'>{service.name}</h3>
            <p className='relative'>{service.card_description}</p>
            <a href="#" className='relative bg-[#E58BD3] p-4 w-fit hover:text-white hover:scale-105 transition-transform duration-200'>En savoir plus</a>
          </div>
        ))
      ) : (
        <p>Chargement des prestations...</p>
      )}
      </div>
  </div>
  {/* <div className='bg-black p-40 flex gap-14 overflow-scroll'>
  {home.technologies && home.technologies.length > 0 ? (
        home.technologies.map(technology => (
          <div className='flex flex-col gap-10 items-center' key={technology.id}>
            <i className={`${technology.icon} fa-2xl`} style={{ color: 'white' }}></i>
            <p className='text-white text-center'>{technology.name}</p>
          </div>
        ))
      ) : (
        <p>Chargement des technologies...</p>
      )}
  </div> */}

      <div className='p-40 flex flex-col gap-14 items-center'>
      <p className='text-[#E58BD3] flex items-center gap-6 font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Portfolio<span className="bg-[#E58BD3] w-24 h-1"></span></p>
      <h2 className='text-3xl font-bold'>Découvrez Quelques Réalisations</h2>
      {home.projects && home.projects.length > 0 ? (
        home.projects.map(project => (
          <div key={project.id}>
            <p>{project.name}</p>
            <p>{project.card_description}</p>
          </div>
        ))
      ) : (
        <p>Chargement des projets...</p>
      )}

      </div>

    <p>Freelancing</p>
    <h2>Pourquoi me choisir ?</h2>
    <ParticlesBackground/>
    <p>Travailler avec moi, c'est choisir un service personnalisé et à l'écoute. En tant que freelance, je vous offre une approche sur mesure, une flexibilité totale, et une transparence à chaque étape. Mon objectif est de créer des solutions digitales qui répondent parfaitement à vos besoins et vous aident à vous démarquer.</p>
</main>    
      
    </div>
  );
}
