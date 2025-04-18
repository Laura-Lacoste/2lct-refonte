'use client'

import { useEffect, useState } from 'react'

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

  return (
    <div>
      <section class="head">
    <div class="opacity"></div>
    <div class="head__text">
        <h1 class="page__h1">Mes Prestations de Création de Sites Web et Solutions Digitales</h1>
        <ul class="breadcrumb">
            <li><a href="/">Accueil</a></li>
                <li> / </li>
            <li><a href="/prestations">Prestations</a></li>
        </ul>
    </div>
</section>
<section class="services__containers page__service">
    <h2>Mes Services : Des Solutions Digitales à Votre Mesure</h2>
    <div className="services page__service">
  {services.map(service => (
    <div key={service.id} className="service page__service">
      <i className={`${service.icon} fa-2xl`} style={{ color: '#370028' }}></i>
      <h3>{service.name}</h3>
      <p>{service.card_description}</p>
      <a href={`/prestations/${service.slug}`} className="btn">Découvrir</a>
    </div>
  ))}
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
