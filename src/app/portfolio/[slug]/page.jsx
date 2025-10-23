import { Suspense } from "react"
import PortfolioClient from "./portfolioClient"

export async function generateMetadata({ params }) {
  const { slug } = await params
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.2lct.fr'}/api/project/${slug}`, {
      cache: 'no-store'
    })
    const project = await res.json()
    
    return {
      title: `${project.name} | Portfolio 2LCT`,
      description: project.short_description || `Découvrez le projet ${project.name} réalisé par 2LCT`,
      alternates: {
        canonical: `/portfolio/${slug}`,
      },
      openGraph: {
        title: `${project.name} | Portfolio 2LCT`,
        description: project.short_description,
        url: `https://www.2lct.fr/portfolio/${slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Projet | Portfolio 2LCT',
      alternates: {
        canonical: `/portfolio/${slug}`,
      },
    }
  }
}

export default async function PorfolioDetailPage({params}) {
  const { slug } = await params
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <PortfolioClient params={slug} />
    </Suspense>
  )
}