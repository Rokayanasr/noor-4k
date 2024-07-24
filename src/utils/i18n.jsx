import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
    .use(Languagedetector)
    .use(HttpApi)
    .init({
        debug: true,
        fallbackLng: "ar",
        detecion: {
            order: ["localStorage","cookie", "htmlTag", "sessionStorage", "navigator", "path", "subdomain"],
        },
        caches: ["localStorage"],
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
    });
