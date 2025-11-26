import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useGoogleToken = defineStore( "cloudflare-turnstile", () => {
    const siteKey = import.meta.env.VITE_GOOGLE_SITE_KEY;
    const reCaptchaToken = ref(null);

    const insertWidget = async () => {
        grecaptcha.ready(() => {
            grecaptcha.execute(siteKey, { action: 'submit' })
            .then(token => {
                reCaptchaToken.value = token
            })
        })
    };

    const getToken = async () => {

        // Promise to ensure reCaptchaToken gets values
        if (reCaptchaToken.value == null) {
            const response = await new Promise((resolve) => {
                const stop = watch(reCaptchaToken, (val) => {
                    if (val) {
                        stop();
                        resolve(val);
                    }
                });
            });

            return response;
        } else return reCaptchaToken.value;
    };

    watch(reCaptchaToken, () => {
        console.log("🧩 TOKEN");
    });

    return {
        reCaptchaToken,
        insertWidget,
        getToken,
    };
});
