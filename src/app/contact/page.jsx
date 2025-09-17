export const metadata = {
  title: 'Contact | 2LCT - Freelance web à Toulouse',
  description:
    "Vous êtes basé à Toulouse ou en Haute-Garonne ? Parlons de votre projet web personnalisé : site vitrine, refonte, SEO, etc.",
  openGraph: {
    title: 'Contact | 2LCT - Haute-Garonne',
    description: "Discutons ensemble de votre futur site web, autour de Toulouse ou à distance.",
    url: 'https://www.2lct.fr/contact',
  },
};

import Contact from './contactPage';

export default function contactPage() {
  return <Contact />;
}