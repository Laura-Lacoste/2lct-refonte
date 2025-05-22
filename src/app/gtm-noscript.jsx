'use client'

import { useEffect } from 'react'

export default function GTMNoScriptFix() {
  useEffect(() => {
    const iframe = document.createElement('iframe')
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-TVW9PNP7'
    iframe.height = '0'
    iframe.width = '0'
    iframe.style.display = 'none'
    iframe.style.visibility = 'hidden'

    const noscript = document.createElement('noscript')
    noscript.appendChild(iframe)

    document.body.prepend(noscript)
  }, [])

  return null
}
