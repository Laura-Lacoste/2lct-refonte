import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useRecaptcha = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleReCaptcha = async () => {
        if (!executeRecaptcha) {
            console.error("ReCAPTCHA non monté !");
            return null;
        }

        try {
            const token = await executeRecaptcha("submit");
            if (!token) {
                console.error("Erreur ReCAPTCHA : Aucun token généré !");
                return null;
            }

            console.log("ReCAPTCHA Token reçu :", token);
            setRecaptchaToken(token);
            return token;
        } catch (error) {
            console.error("Erreur lors de l'exécution de reCAPTCHA :", error);
            return null;
        }
    };

    return { recaptchaToken, handleReCaptcha };
};

export default useRecaptcha;