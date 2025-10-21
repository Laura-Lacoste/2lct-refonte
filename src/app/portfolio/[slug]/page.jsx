import { Suspense } from "react"
import PortfolioClient from "./portfolioClient"

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.2lct.fr'}/api/project/${params.slug}`, {
      cache: 'no-store'
    })
    const project = await res.json()
    
    return {
      title: `${project.name} | Portfolio 2LCT`,
      description: project.short_description || `Découvrez le projet ${project.name} réalisé par 2LCT`,
      alternates: {
        canonical: `/portfolio/${params.slug}`,
      },
      openGraph: {
        title: `${project.name} | Portfolio 2LCT`,
        description: project.short_description,
        url: `https://www.2lct.fr/portfolio/${params.slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Projet | Portfolio 2LCT',
      alternates: {
        canonical: `/portfolio/${params.slug}`,
      },
    }
  }
}

export default function PorfolioDetailPage({params}) {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <PortfolioClient params={params} />
    </Suspense>
  )
}