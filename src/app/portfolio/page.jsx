'use client'

import { useEffect, useState } from 'react'
import HeadPageComponent from '@/src/components/headPageComponent/headPageComponent'
import Image from 'next/image'

export default function PortfolioPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data)
    }

    fetchServices()
  }, [])

  const title ="Mes Projets : Des Solutions Digitales sur mesure"

  return (
    <main  className='text-base overflow-hidden'>

    <HeadPageComponent title={title}/>

<section className="px-5 py-10 lg:px-36 lg:py-36">
    <div className='flex flex-col md:flex-row md:flex-wrap gap-8 justify-center items-center w-full'>
    {projects && projects.length > 0 ? (
      projects.map(project => (
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
    </div>


    </section>

    <section className='bg-[#050305] text-white flex px-5 py-10 lg:px-32 lg:py-20 justify-evenly flex-wrap gap-8'>
        <div className='flex flex-col gap-10 items-center text-center'>
            <i className="fa-solid fa-envelope fa-2xl"></i>
            <div>
                <p>Mail</p>
                <p>laura@2lct.fr</p>
            </div>
        </div>
        <div className='flex flex-col gap-10 items-center text-center'>
            <i className="fa-solid fa-phone fa-2xl"></i>
            <div>
                <p>Téléphone</p>
                <p>07.86.20.15.20</p>
            </div>
        </div>
        <div className='flex flex-col gap-10 items-center text-center'>
            <i className="fa-solid fa-list fa-2xl"></i>
            <div>
                <p>Formulaire</p>
                <a href="/contact" className='underline hover:text-[#E58BD3] '>Accéder </a>
            </div>
        </div>
    </section>

<section className=' flex flex-col px-5 py-10 lg:px-32 lg:py-36 gap-20'>
    <h2 className='text-3xl font-bold self-center text-center lg:text-left'>Comment Travailler Ensemble ?</h2>
    <div className="flex justify-center flex-wrap gap-20">
        <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">01</div>
            <h3 className='mt-8 font-semibold'>Collaboration Étape par Étape</h3>
            <p className="text-sm mt-2">Je propose une approche étape par étape pour chaque projet, assurant une communication claire et une planification rigoureuse. De la prise de brief à la livraison finale, chaque phase est soigneusement gérée pour répondre à vos attentes.</p>
        </div>
        <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">02</div>
            <h3 className='mt-8 font-semibold'>Suivi Personnalisé</h3>
            <p className="text-sm mt-2">En tant que freelance, je vous offre un suivi personnalisé tout au long du projet. Vous bénéficiez d’une attention individuelle et d’un accompagnement adapté à vos besoins spécifiques, avec des mises à jour régulières pour vous tenir informé de l’avancement.</p>
        </div>
        <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">03</div>
            <h3 className='mt-8 font-semibold'>Flexibilité et Réactivité</h3>
            <p className="text-sm mt-2">Je m’engage à être flexible et réactive pour répondre rapidement à vos demandes et ajuster les éléments du projet en fonction de vos retours. Mon objectif est de vous offrir un service qui évolue avec vos besoins et assure la réussite de votre projet.</p>
        </div>
    
    </div>
</section>

    </main>
    
  )
}
