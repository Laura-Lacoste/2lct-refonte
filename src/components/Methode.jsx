'use client'

import { useState } from "react"

export default function Methode() {
    const [activeMethode, setActiveMethode] = useState(null)

    return (
        <>
<div className="flex flex-col gap-4 w-full items-center">
<div className="flex flex-col  max-w-6xl w-full mx-auto border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
<button onClick={() => setActiveMethode(activeMethode === 1 ? null : 1)} className="flex justify-between items-center md:w-full font-bold">
Étape 1 : Brief & analyse
<span className="text-2xl text-[#E58BD3] ml-4">  {activeMethode === 1 ? "−" : "+"}</span>
</button>
{activeMethode === 1 && (
    <div className="mt-2 text-sm flex flex-col gap-2 pt-2">
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
    <div className="mt-2 text-sm flex flex-col gap-2 pt-2">
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
    <div className="mt-2 text-sm flex flex-col gap-2 pt-2">
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
    <div className="mt-2 text-sm flex flex-col gap-2 pt-2">
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
    <div className="mt-2 text-sm flex flex-col gap-2 pt-2">
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
    <div  className="mt-2 text-sm flex flex-col gap-2 pt-2">
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
        </>
    )
}