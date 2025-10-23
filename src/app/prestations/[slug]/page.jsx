import { Suspense } from "react"
import PrestationsClient from "./prestationsClient"

export async function generateMetadata({ params }) {
    const { slug } = await params

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.2lct.fr'}/api/service/${slug}`, {
      cache: 'no-store'
    })
    const prestation = await res.json()
    
    return {
      title: `${prestation.name} | Prestations 2LCT`,
      description: prestation.short_description || `Découvrez la prestation ${prestation.name} proposée par 2LCT`,
      alternates: {
        canonical: `/prestations/${slug}`,
      },
      openGraph: {
        title: `${prestation.name} | Prestations 2LCT`,
        description: prestation.short_description,
        url: `https://www.2lct.fr/prestations/${slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Prestation | 2LCT',
      alternates: {
        canonical: `/prestations/${slug}`,
      },
    }
  }
}

export default async function PrestationsDetailPage({params}) {
  const { slug } = await params
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <PrestationsClient params={slug} />
    </Suspense>
  )
}