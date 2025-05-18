'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function RecaptchaLayout({ children }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LcGRT4rAAAAAMAB-NK16rMLy8nCb5PeeUU7EvPc'>
      {children}
    </GoogleReCaptchaProvider>
  )
}
