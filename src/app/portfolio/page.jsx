'use client'

import { useEffect, useState } from 'react'

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

  return (
    <div>
      <section class="head">
    <div class="opacity"></div>
    <div class="head__text">
        <h1 class="page__h1">Mes Prestations de Création de Sites Web et Solutions Digitales</h1>
        <ul class="breadcrumb">
            <li><a href="/">Accueil</a></li>
                <li> / </li>
            <li><a href="/portfolio">Portfolio</a></li>
        </ul>
    </div>
</section>
<section class="services__containers page__service">
    <h2>Mes Projets : Des Solutions Digitales sur mesure</h2>
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


    <section class="contact">
        <div class="contact__item">
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <div>
                <p>Mail</p>
                <p>laura@2lct.fr</p>
            </div>
        </div>
        <div class="contact__item">
            <i class="fa-solid fa-phone fa-2xl"></i>
            <div>
                <p>Téléphone</p>
                <p>07.86.20.15.20</p>
            </div>
        </div>
        <div class="contact__item">
            <i class="fa-solid fa-list fa-2xl"></i>
            <div>
                <p>Formulaire</p>
                <a href="/contact">Accéder </a>
            </div>
        </div>
    </section>

<section class="work">
    <h2>Comment Travailler Ensemble ?</h2>
    <div class="work__stapes">
        <div class="work__stape">
            <span>01</span>
            <h3>Collaboration Étape par Étape</h3>
            <p>Je propose une approche étape par étape pour chaque projet, assurant une communication claire et une planification rigoureuse. De la prise de brief à la livraison finale, chaque phase est soigneusement gérée pour répondre à vos attentes.</p>
        </div>
        <div class="work__stape">
            <span>02</span>
            <h3>Suivi Personnalisé</h3>
            <p>En tant que freelance, je vous offre un suivi personnalisé tout au long du projet. Vous bénéficiez d’une attention individuelle et d’un accompagnement adapté à vos besoins spécifiques, avec des mises à jour régulières pour vous tenir informé de l’avancement.</p>
        </div>
        <div class="work__stape">
            <span>03</span>
            <h3>Flexibilité et Réactivité</h3>
            <p>Je m’engage à être flexible et réactif pour répondre rapidement à vos demandes et ajuster les éléments du projet en fonction de vos retours. Mon objectif est de vous offrir un service qui évolue avec vos besoins et assure la réussite de votre projet.</p>
        </div>
    
    </div>
</section>

    </div>
  )
}
