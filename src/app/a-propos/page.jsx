export const metadata = {
  title: 'À propos | 2LCT - Développeuse web freelance à Toulouse',
  description:
    "Je suis Laura, développeuse web freelance à Toulouse. Découvrez mon parcours, mes valeurs et ma manière de travailler : des créations web sur mesure, humaines et efficaces.",
  alternates: {
    canonical: 'https://www.2lct.fr/a-propos',
  },
  openGraph: {
    title: 'À propos | 2LCT - Développeuse web freelance à Toulouse',
    description:
      "Apprenez à mieux connaître Laura, freelance web à Toulouse. Une approche humaine, rigoureuse et transparente pour vos projets digitaux.",
    url: 'https://www.2lct.fr/a-propos',
    siteName: '2LCT',
    images: [
      {
        url: 'https://www.2lct.fr/2lct_homepage.webp', // ajoute ton image de partage
        width: 1200,
        height: 630,
        alt: 'Laura Lacoste, développeuse web freelance à Toulouse - 2LCT',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};


import HeadPageComponent from "@/src/components/headPageComponent/headPageComponent"


import Image from "next/image"
import Methode from "@/src/components/Methode"

import imagePortrait from '@/public/portrait-laura-lacoste.webp'

export default function Apropos() {
    const title = "Qui suis-je & Comment je travaille ?"

    return(
        <main className="text-base overflow-hidden">
            <HeadPageComponent title={title}/>
<section className="px-5 py-10 lg:px-36 lg:py-36 flex flex-col gap-14 justify-center items-center">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
  <div className="shrink-0">
    <Image
  src={imagePortrait}
  alt="Portrait de Laura Lacoste, développeuse web freelance à Toulouse"
  width={220}
  height={220}
  className="rounded-full shadow-md"
  style={{ height: 'auto', width: 'auto' }}
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

<div className="bg-[#FCFAFC] border-l-4 border-[#E58BD3] px-6 py-10 mx-auto shadow-sm max-w-6xl text-center flex flex-col">
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
  <p className="italic text-[#843E76] font-semibold">
    Mon objectif : créer des sites élégants, efficaces et durables — qui reflètent votre identité et parlent à vos clients.
  </p>
</div>




<h2 className="text-[#843E76] flex items-center gap-6 uppercase font-bold justify-center text-center text-lg md:text-xl">
  <span className="bg-[#843E76] w-24 h-1"></span>
  Ma méthode de travail
  <span className="bg-[#843E76] w-24 h-1"></span>
</h2>

<div className="max-w-6xl mx-auto text-center flex flex-col gap-4">
  <p className="text-base font-semibold text-[#050305]">Une collaboration claire, étape par étape</p>
  <p>Créer un site web, ce n’est pas juste une question de technique. C’est un véritable <b>projet de communication</b>, qui doit refléter votre identité, répondre aux attentes de vos clients et s’adapter à vos objectifs.</p>
  <p>C’est pourquoi je vous propose une <b>méthodologie structurée, simple et transparente</b>, du premier échange à la mise en ligne.</p>
</div>


<Methode />

<div className="flex flex-col gap-20 lg:mt-16">
      <h2 className='text-3xl font-bold self-center text-center lg:text-left'>Pourquoi travailler avec moi ?</h2>
        <div className="flex justify-center flex-wrap gap-20">
          <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">01</div>
            <p className="text-sm mt-2">Un interlocuteur unique : pas d’intermédiaire.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">02</div>
            <p className="text-sm mt-2">Une approche humaine, simple, et engagée.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">03</div>
            <p className="text-sm mt-2">Une vraie polyvalence : design, technique, stratégie.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">04</div>
            <p className="text-sm mt-2">Un cadre clair dès le départ, sans surprise.</p>
          </div>
                    <div className="relative bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[22%] text-center">
            <div  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E58BD3] w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm z-10 border-4 border-white">05</div>
            <p className="text-sm mt-2">Une grande adaptabilité à vos besoins et votre rythme.</p>
          </div>
        </div>
</div>

    </section>
        </main>
    )
}