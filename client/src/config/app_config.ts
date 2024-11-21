

interface AppConfig{
    recaptchaSiteKey:string;
}

const appConfig:AppConfig = {
 recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY as string,
}

export default appConfig;