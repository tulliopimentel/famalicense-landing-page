import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic'
})
