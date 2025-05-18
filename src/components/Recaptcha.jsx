import { useCallback } from 'react'

const useRecaptcha = () => {
  const handleReCaptcha = useCallback(async () => {
    if (!window.grecaptcha) {
      console.error("grecaptcha non chargé")
      return null
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'submit' }
      )
      return token
    } catch (error) {
      console.error("Erreur reCAPTCHA", error)
      return null
    }
  }, [])

  return { handleReCaptcha } // ✅ Pas de recaptchaToken ici
}

export default useRecaptcha
