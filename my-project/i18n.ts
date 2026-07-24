import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome back",
      profile: "User Profile",
      address: "Manage Address",
      logout: "Sign Out",
      privacy: "Privacy Policy",
      terms: "Terms and Conditions"
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido de nuevo",
      profile: "Perfil de usuario",
      address: "Gestionar Dirección",
      logout: "Cerrar sesión",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones"
    }
  }
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });
}

export default i18n;