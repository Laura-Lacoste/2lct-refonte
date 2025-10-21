import { Suspense } from "react"
import PrestationsClient from "./prestationsClient"

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.2lct.fr'}/api/service/${params.slug}`, {
      cache: 'no-store'
    })
    const prestation = await res.json()
    
    return {
      title: `${prestation.name} | Prestations 2LCT`,
      description: prestation.short_description || `Découvrez la prestation ${prestation.name} proposée par 2LCT`,
      alternates: {
        canonical: `/prestations/${params.slug}`,
      },
      openGraph: {
        title: `${prestation.name} | Prestations 2LCT`,
        description: prestation.short_description,
        url: `https://www.2lct.fr/prestations/${params.slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Prestation | 2LCT',
      alternates: {
        canonical: `/prestations/${params.slug}`,
      },
    }
  }
}

export default function PrestationsDetailPage({params}) {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <PrestationsClient params={params} />
    </Suspense>
  )
}