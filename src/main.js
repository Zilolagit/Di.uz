import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from "@/locales/en.json"
import uz from "@/locales/uz.json"
import ru from "@/locales/ru.json"

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)


const i18n = createI18n({
    locale: localStorage.getItem("lang") || 'en',
    fallbackLocale: 'uz',
    messages: {
      en: en,
      uz: uz,
      ru: ru,
    }
  })
  

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
