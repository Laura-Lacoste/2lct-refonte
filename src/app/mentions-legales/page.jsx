import HeadPageComponent from '@/src/components/headPageComponent/headPageComponent'

export const metadata = {
  title: 'Mentions légales | 2LCT - Freelance web Toulouse',
  description: "Informations légales du site 2LCT : éditeur, hébergeur, propriété intellectuelle et protection des données.",
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function Mentions() {
    const title ="Mentions Légales"
    return(
<main className="text-base overflow-hidden">
  <HeadPageComponent title="Mentions Légales" />
  <section className="px-5 py-10 lg:px-36 lg:py-36 space-y-10">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">1. Éditeur du site</h2>
      <p>Le site <a href="https://www.2lct.fr" className="underline hover:text-[#843E76]">https://www.2lct.fr</a> est édité par :</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Nom :</strong> Laura Lacoste</li>
        <li><strong>Statut :</strong> Entrepreneur Individuel (EI)</li>
        <li><strong>SIREN :</strong> 919 846 238</li>
        <li><strong>Adresse :</strong> 5 rue du Maréchal Lyautey, 31380 Montastruc-la-Conseillère</li>
        <li><strong>Email :</strong> <a href="mailto:laura@2lct.fr" className="underline hover:text-[#843E76]">laura@2lct.fr</a></li>
        <li><strong>Téléphone :</strong> 07 86 20 15 20</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">2. Directeur de la publication</h2>
      <p>Laura Lacoste</p>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">3. Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Nom :</strong> o2switch</li>
        <li><strong>Forme juridique :</strong> EURL au capital de 100 000 €</li>
        <li><strong>Adresse :</strong> 224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</li>
        <li><strong>Téléphone :</strong> 04 44 44 60 40</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">4. Propriété intellectuelle</h2>
      <p>L’ensemble des éléments présents sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) sont protégés par les dispositions du Code de la propriété intellectuelle et appartiennent à Laura Lacoste, sauf indication contraire.</p>
      <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Laura Lacoste.</p>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">5. Données personnelles et cookies</h2>
      <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, les utilisateurs disposent des droits suivants concernant leurs données personnelles : droit d’accès, de rectification, d’effacement, d’opposition, de limitation du traitement et de portabilité.</p>
      <p>Pour exercer ces droits, veuillez contacter : <a href="mailto:laura@2lct.fr" className="underline hover:text-[#843E76]">laura@2lct.fr</a></p>
      <p>Le site utilise des cookies pour améliorer l’expérience utilisateur. Un bandeau de consentement aux cookies est affiché lors de la première visite.</p>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">6. Liens hypertextes</h2>
      <p>Le site peut contenir des liens vers d’autres sites. Laura Lacoste ne peut être tenue responsable du contenu de ces sites et de l’usage qui pourrait en être fait par les utilisateurs.</p>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#843E76]">7. Droit applicable et juridiction compétente</h2>
      <p>Tout litige en relation avec l’utilisation du site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
    </div>
  </section>
</main>
    )
}