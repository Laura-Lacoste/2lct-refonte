'use client'
import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent"

import { useState } from "react"
import Image from "next/image"

import imagePortrait from '@/public/portrait-laura-lacoste.jpg'

export default function Apropos() {
    const title = "Qui suis-je & Comment je travaille ?"

    const [activeMethode, setActiveMethode] = useState(null)
    return(
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={title}/>
<section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
  <div className="flex-shrink-0">
    <Image
      src={imagePortrait}
      alt="Portrait de Laura"
      width={220}
      height={220}
      className="rounded-full shadow-md"
    />
  </div>

  <div className="flex flex-col gap-4 text-base max-w-2xl">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
      Qui suis-je ?
    </h2>

    <p>
      Je suis Laura, freelance spécialisée dans la création et la refonte de sites web sur-mesure.
    </p>
    <p>
      J’aide les <b>artisans, entrepreneurs, indépendants et petites structures</b> à développer leur présence en ligne avec des solutions <b>claires, efficaces et modernes</b>.
    </p>
    <p>
      Mon approche est fluide et transparente : <b>chaque étape du projet est expliquée et adaptée</b> à vos objectifs, avec un accompagnement humain et professionnel.
    </p>
    <p>
      Je suis à la fois <b>développeuse web, cheffe de projet digitale et votre interlocutrice dédiée</b>, pour garantir un suivi personnalisé et une vraie relation de confiance.
    </p>
    <p>
      <b>Structurée, réactive et à l’écoute,</b> je m’investis pleinement pour créer des outils web utiles, élégants et durables.
    </p>
  </div>
</div>

<div className="bg-[#FCFAFC] border-l-4 border-[#E58BD3] px-6 py-10 mx-auto shadow-sm max-w-6xl text-center">
  <p className="mb-4">
    Pour moi, un bon site web est avant tout un <b>outil au service de votre activité</b> : il doit être clair, utile et pensé pour vos visiteurs.
  </p>
  <p className="mb-4">
    Il ne suffit pas d’avoir un site joli. Il faut qu’il soit <b>rapide, responsive, accessible</b>, et qu’il vous aide à atteindre vos objectifs (visibilité, conversions, notoriété…).
  </p>
  <p className="mb-4">
    Je m’appuie sur des bases solides : <b>expérience utilisateur (UX)</b>, bonnes pratiques SEO, performances techniques, design moderne et sobre.
  </p>
  <p className="mb-4">
    Chaque détail compte : navigation fluide, hiérarchie de l’information, messages clairs, temps de chargement optimisé.
  </p>
  <p className="italic text-[#E58BD3] font-semibold">
    Mon objectif : créer des sites élégants, efficaces et durables — qui reflètent votre identité et parlent à vos clients.
  </p>
</div>




<h2 className="text-[#E58BD3] flex items-center gap-6 uppercase font-bold justify-center text-center text-lg md:text-xl">
  <span className="bg-[#E58BD3] w-24 h-1"></span>
  Ma méthode de travail
  <span className="bg-[#E58BD3] w-24 h-1"></span>
</h2>

<div className="max-w-6xl mx-auto text-center flex flex-col gap-4">
  <p className="text-base font-semibold text-[#050305]">Une collaboration claire, étape par étape</p>
  <p>Créer un site web, ce n’est pas juste une question de technique. C’est un véritable <b>projet de communication</b>, qui doit refléter votre identité, répondre aux attentes de vos clients et s’adapter à vos objectifs.</p>
  <p>C’est pourquoi je vous propose une <b>méthodologie structurée, simple et transparente</b>, du premier échange à la mise en ligne.</p>
</div>


<div className="flex flex-col gap-4">
<div className="flex flex-col  max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 1 ? null : 1)} className="flex justify-between items-center md:w-full font-bold">
Étape 1 : Brief & analyse
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 1 ? "−" : "+"}</span>
</button>
{activeMethode === 1 && (
    <div className="mt-2 text-sm flex flex-col gap-2">
        <p>Tout commence par l’écoute. Je prends le temps de <b>comprendre votre activité, vos enjeux, vos valeurs</b>. Ensemble, on pose les bases :</p>
        <ul className="ml-10">
            <li>- Quel est votre public cible ?</li>
            <li>- Quels sont vos objectifs (visibilité, contact, vente, notoriété) ?</li>
            <li>- Quelles sont vos contraintes techniques, vos inspirations, vos attentes graphiques ?</li>
        </ul>
        <p>Cette étape permet de <b>poser un cadre solide</b> pour ne pas partir dans toutes les directions. Un site efficace, c’est un site qui a une stratégie claire dès le départ.</p>
    </div>
)}
</div>

<div className="flex flex-col max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 2 ? null : 2)} className="flex justify-between items-center md:w-full font-bold">
Étape 2 : Conception
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 2 ? "−" : "+"}</span>
</button>
{activeMethode === 2 && (
    <div className="mt-2 text-sm flex flex-col gap-2">
        <p>Avant d’écrire une ligne de code, on travaille la <b>structure du site</b> :</p>
        <ul className="ml-10">
            <li>- Je crée une <b>arborescence optimisée</b> pour faciliter la navigation.</li>
            <li>- Je réalise un <b>zoning</b> pour visualiser les grandes zones de contenu.</li>
            <li>- Des <b>wireframes</b> sont proposés pour les pages clés (accueil, contact, services…).</li>
            <li>- Si nécessaire, je crée une <b>maquette graphique</b> (notamment si l’univers visuel n’est pas encore défini).</li>
        </ul>
        <p>Cette étape garantit une <b>expérience utilisateur fluide</b>, cohérente et intuitive.</p>
    </div>
)}
</div>

<div className="flex flex-col max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 3 ? null : 3)} className="flex justify-between items-center md:w-full font-bold">
Étape 3 : Développement
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 3 ? "−" : "+"}</span>
</button>
{activeMethode === 3 && (
    <div className="mt-2 text-sm flex flex-col gap-2">
        <p>Je passe ensuite à la phase de création technique :</p>
        <ul className="ml-10">
            <li>- Pour les sites <b>WordPress</b>, j’intègre les contenus avec soin, en personnalisant le thème pour qu’il colle à votre image</li>
            <li>- Pour les projets <b>sur-mesure</b>, je développe en vous proposant une structure moderne, rapide et évolutive.</li>
        </ul>
        <p>Je veille à ce que le site soit <b>modulable, fiable et facile à maintenir</b>.</p>
    </div>
)}
</div>

<div className="flex flex-col max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 4 ? null : 4)} className="flex justify-between items-center md:w-full font-bold">
Étape 4 : Optimisations
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 4 ? "−" : "+"}</span>
</button>
{activeMethode === 4 && (
    <div className="mt-2 text-sm flex flex-col gap-2">
        <p>Un beau site, c’est bien. Un site qui <b>performe</b>, c’est encore mieux. J’intègre donc plusieurs optimisations :</p>
        <ul className="ml-10">
            <li>- <b>SEO technique et sémantique</b> : structure Hn, balises meta, attributs alt, contenu lisible.</li>
            <li>- <b>Responsive Design</b> : votre site s’adapte parfaitement aux mobiles, tablettes et écrans larges.</li>
            <li>- <b>Vitesse de chargement</b> : images optimisées, lazy loading, code léger.</li>
            <li>- <b>Accessibilité</b> : contrastes, navigation clavier, bonne hiérarchie des contenus.</li>
        </ul>
        <p>Chaque détail est pensé pour <b>améliorer votre visibilité et l’expérience utilisateur</b>.</p>
    </div>
)}
</div>

<div className="flex flex-col max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 5 ? null : 5)} className="flex justify-between items-center md:w-full font-bold">
Étape 5 : Mise en ligne
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 5 ? "−" : "+"}</span>
</button>
{activeMethode === 5 && (
    <div className="mt-2 text-sm flex flex-col gap-2">
        <p>Je m’occupe de tout ce qui est technique et parfois un peu obscur :</p>
        <ul className="ml-10">
            <li>- Rédaction et paramétrage du <b>nom de domaine</b></li>
            <li>- Connexion et configuration de <b>l’hébergement</b></li>
            <li>- Configuration <b>HTTPS (certificat SSL), emails, DNS</b></li>
            <li>- Tests finaux sur tous les supports et navigateurs</li>
            <li>- Mise en production sur le serveur</li>
        </ul>
        <p>Vous n’avez rien à gérer : <b>je livre un site clé en main,</b> prêt à être utilisé.</p>
    </div>
)}
</div>

<div className="flex flex-col max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 6 ? null : 6)} className="flex justify-between items-center md:w-full font-bold">
Étape 6 : Suivi
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 6 ? "−" : "+"}</span>
</button>
{activeMethode === 6 && (
    <div  className="mt-2 text-sm flex flex-col gap-2">
        <p>Une fois le site en ligne, <b>je ne vous laisse pas seul.</b></p>
        <ul className="ml-10">
            <li>Je propose une <b>formation rapide</b> pour vous apprendre à mettre à jour votre site (WordPress ou back-office sur mesure).</li>
            <li>Je reste disponible en cas de besoin : bug, question, ajustement.</li>
            <li>Je propose également des <b>options de maintenance</b>, pour garder un site sécurisé, à jour et performant dans le temps.</li>
        </ul>

    </div>
)}
</div>

</div>

<div className="flex flex-col gap-20 lg:mt-16">
      <h2 className='text-3xl font-bold self-center text-center lg:text-left'>Pourquoi travailler avec moi ?</h2>
        <div className="flex justify-center flex-wrap gap-20">
          <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">01</div>
            <p className="text-sm mt-2">Un interlocuteur unique : pas d’intermédiaire.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">02</div>
            <p className="text-sm mt-2">Une approche humaine, simple, et engagée.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">03</div>
            <p className="text-sm mt-2">Une vraie polyvalence : design, technique, stratégie.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">04</div>
            <p className="text-sm mt-2">Un cadre clair dès le départ, sans surprise.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">05</div>
            <p className="text-sm mt-2">Une grande adaptabilité à vos besoins et votre rythme.</p>
          </div>
        </div>
</div>

    </section>
        </main>
    )
}