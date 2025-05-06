'use client'

import { useEffect, useState } from 'react'
import HeadPageComponent from '@/src/components/headPageComponent/headPageComponent'

export default function PrestationsPage() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch('/api/services')
      const data = await res.json()
      setServices(data)
    }

    fetchServices()
  }, [])

  const title = "Création de Sites Web et Solutions Digitales"

  console.log(services)
  return (
    <main className='text-base overflow-hidden'>

    <HeadPageComponent title={title}/>

        <section className=' px-5 py-10 lg:px-36 lg:py-36'>
<div className='flex flex-wrap gap-8 justify-center w-full'>
    {services && services.length > 0 ? (
    services.map(service => (
        <div key={service.id} className="  w-full sm:w-[48%] lg:w-[22%] bg-[url('/background-items-services.png')] relative flex flex-col gap-6 p-6 justify-between bg-cover  items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl shadow-md  rounded-xl  hover:bg-white hover:bg-opacity-90">
        <div className="absolute inset-0 bg-[white]/90 z-1"></div>
        <div className="absolute inset-0 bg-[#050305]/3 z-2"></div>
        <div className="relative z-10 flex flex-col gap-4 ">
        <i className={`${service.icon} fa-2xl relative z-10  m-4`} />
        <h3 className='text-lg font-semibold'>{service.name}</h3>
        <p className='text-sm'>{service.card_description}</p>
        <h3 className='text-base font-semibold mt-2'>Les packs proposés</h3>
        {service.variation_services?.map(variation => (
  <p className='text-sm ml-4' key={variation.id}>➔ {variation.name}</p>
))}
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
