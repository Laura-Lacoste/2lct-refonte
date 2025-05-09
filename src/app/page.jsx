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
  const [home, setHome] = useState({});
  const [openService, setOpenService] = useState(1);
  
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
  
  function selectedService(id) {
    setOpenService(id)
  }
  
  console.log(home)

  return (
    <div className='max-w-full'>
    <HeaderHome/>
    <main>
    <section className='flex flex-col-reverse justify-center lg:justify-between items-center px-5 py-10 lg:flex-row lg:px-36 lg:py-14 lg:gap-20' >
    <div className='flex flex-col lg:flex-row gap-8 items-center justify-center lg:justify-between lg:w-[36%]'>
    <div className='hidden lg:flex flex-col gap-8 w-full lg:w-[45%]'>
    <Image src={image1Home} alt='' />
    <Image src={image2Home} alt=''/>
    </div>
    <div className='w-full md:w-[70%] lg:w-[45%] h-auto object-cover'>
    <Image src={image3Home} alt=''/>
    </div>
    </div>
    <div className='flex flex-col gap-8 py-10 lg:w-[60%]'>
    <p className='hidden text-[#E58BD3] md:flex items-center justify-start gap-5 font-bold'>Une Collaboration Personnalisée <span className="bg-[#E58BD3] w-28 h-1"></span></p>
    
    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Votre Partenaire pour Développer Votre Présence en Ligne</h2>
    
    <div className='flex flex-col gap-6 text-xs md:text-sm lg:text-base leading-relaxed'>
    <p>
    Je suis Laura, freelance spécialisée dans la création, la refonte et l’optimisation de sites web.
    J’aide les professionnels à développer leur présence en ligne grâce à des solutions digitales <b>utiles</b>, <b>élégantes</b> et <b>sur-mesure</b>.
    </p>
    
    <p>
    Chaque projet est pensé selon vos objectifs, vos contraintes et votre public cible.
    </p>
    
    <p>
    Que vous ayez besoin d’un site <b>vitrine simple</b>, d’un <b>projet technique personnalisé</b>, ou d’un <b>accompagnement complet</b> (SEO, maintenance, refonte), je vous propose un cadre clair, humain et professionnel.
    </p>
    </div>
    
    <div className='flex flex-col md:flex-row gap-8 pt-4'>
    <div className='w-4 h-auto bg-[#E58BD3]'></div>
    <p className='font-semibold leading-relaxed'>
    Mon approche : écoute, rigueur, transparence.    </p>
    </div>
    <Link href="/prestations" className='z-10 mt-10 bg-[#E58BD3] text-base text-white px-6 py-3 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit'>
    En savoir plus
    </Link>
    </div>
    </section>
    
    
    <section className='bg-[#FCFAFC] px-5 md:px-10 py-16 flex flex-col gap-12 items-center text-center' >
    <p className='text-[#E58BD3] flex items-center gap-6 uppercase font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Services<span className="bg-[#E58BD3] w-24 h-1"></span></p>
    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Des Solutions Digitales à Votre Image</h2>
    
    <div className='flex flex-wrap gap-8 justify-center w-full mb-16'>
    {home.services && home.services.length > 0 ? (
      home.services.map(service => (
        <div key={service.id} className="  w-full sm:w-[48%] lg:w-[22%] bg-[url('/background-items-services.png')] relative flex flex-col gap-6 p-6 justify-between bg-cover  items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl shadow-md  rounded-xl  hover:bg-white hover:bg-opacity-90">
        <div className="absolute inset-0 bg-[white]/90 z-1"></div>
        <div className="absolute inset-0 bg-[#050305]/3 z-2"></div>
        <div className="relative z-10 flex flex-col gap-4 ">
        <i className={`${service.icon} fa-2xl relative z-10  m-4`} />
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
    <div className='flex flex-col gap-4'>
    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Des packs clairs pour chaque projet</h2>
    <p className="text-base leading-relaxed text-center text-[#050305]">
  Choisissez le pack qui vous convient et ajoutez les options nécessaires selon votre besoin.
</p>    
    </div>

    <div className='flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center'>
      {home.services && home.services.length > 0 ? (
    home.services.map(service => (
      <div key={service.id}
      onClick={() => selectedService(service.id)}
      className={`text-base text-left w-fit cursor-pointer hover:underline transition-colors duration-200 ${
        openService === service.id
          ? 'font-bold text-[#E58BD3]'
          : 'text-gray-800'
      }`}>
        {service.name}
      </div> 
    ))
    ) : (
      <p>Chargement des packs</p>
    )}
    </div>
        <div className='flex gap-6 flex-wrap justify-center'>
          {home.services && openService && (
            home.services.find(service => service.id === openService)?.variation_services?.map(variation =>(
              <div key={variation.id} className='w-full sm:w-[80%] md:w-[48%] lg:w-[22%]'>
              <div className="flex justify-between align-center flex-col gap-4 border-l-4 border-[#E58BD3] bg-white py-6 px-10 w-full shadow-lg transition-all">
                <h3 className='text-base font-bold'>{variation.name}</h3>
                {variation.wordpress_price && (<p className='bg-[#E58BD3] text-[#050305] px-2 w-fit text-center self-center rounded '>A partir de {variation.wordpress_price}</p>)}
              </div>
              <div className='border-l-4 border-[#E58BD3] bg-white leading-loose text-base py-6 px-10 shadow-lg'> 
                {variation.details?.sort((a,b) => a.id - b.id).map(detail => (
                  <p>{detail.name}</p>
                ))}
              </div>
                </div>
            ))
          )}
          
        </div>

     </section>
    
    <section className='px-5 md:px-10 py-16 flex flex-col gap-12 items-center text-center'>
    <p className='text-[#E58BD3] flex items-center uppercase gap-6 font-bold'><span className="bg-[#E58BD3] w-24 h-1"></span>Portfolio<span className="bg-[#E58BD3] w-24 h-1"></span></p>
    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Découvrez Quelques Réalisations</h2>
    
    <div className='flex flex-col md:flex-row md:flex-wrap gap-8 justify-center items-stretch w-full'>
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

    </div>
<Link href="/portfolio" className='z-10 mt-10 bg-[#E58BD3] text-white px-6 py-3 rounded hover:bg-white hover:text-[#E58BD3] border border-[#E58BD3] transition-all duration-300 w-fit'>
    Voir tous les projets
    </Link>
    
    </section>
    
    <section className="bg-[#FCFAFC] relative px-5 md:px-10 py-20 flex flex-col gap-12 items-center text-center overflow-hidden">
  

  <p className="text-[#E58BD3] flex items-center gap-4 font-bold uppercase tracking-wide z-10">
    <span className="bg-[#E58BD3] w-12 h-0.5"></span>
    Freelancing
    <span className="bg-[#E58BD3] w-12 h-0.5"></span>
  </p>

  <h2 className='text-xl md:text-2xl lg:text-3xl font-bold z-10'>Pourquoi me choisir ?</h2>

  <div className="max-w-5xl flex flex-col gap-8 z-10">
    <p className="leading-relaxed">
      Mon objectif : <span className="text-[#E58BD3] font-semibold">créer des solutions digitales utiles, jolies et efficaces</span>, en gardant un vrai lien humain tout au long du projet.
    </p>

    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-10 text-center">
      <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[22%]">
        <h3 className="text-[#E58BD3] font-semibold text-l">🎯 Un site à votre image</h3>
        <p className="text-sm">Design, ton, contenu : tout est pensé pour refléter votre personnalité ou celle de votre marque.</p>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[22%]">
        <h3 className="text-[#E58BD3] font-semibold text-l">💡 Des conseils personnalisés</h3>
        <p className="text-sm">Pas de jargon inutile. On parle simple, on avance ensemble, et je vous guide à chaque étape.</p>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[22%]">
        <h3 className="text-[#E58BD3] font-semibold text-l">⚙️ Une solution clé en main</h3>
        <p className="text-sm">Je m’occupe de tout : création, optimisation, sécurité, SEO, maintenance. Zéro prise de tête pour vous.</p>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-[22%]">
        <h3 className="text-[#E58BD3] font-semibold text-l">🤝 Un vrai suivi humain</h3>
        <p className="text-sm">On ne coupe pas les ponts à la livraison. Je reste dispo pour vous accompagner et faire évoluer votre site.</p>
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
