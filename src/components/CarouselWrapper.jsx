'use client'

import dynamic from 'next/dynamic'

// Import client-only version
const EmblaCarousel = dynamic(() => import('@/src/components/EmblaCarousel'), { ssr: false })

export default function CarouselWrapper({ slides, options }) {
  return <EmblaCarousel slides={slides} options={options} />
}
