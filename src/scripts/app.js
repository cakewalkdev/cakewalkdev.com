import Alpine from 'alpinejs'
import AOS from 'aos'
import contactForm from './contact.js'

AOS.init({
  once: true,
})

// The router swaps in each new page without a full load, so AOS has to pick up its elements again
document.addEventListener('astro:after-swap', () => AOS.refreshHard())

Alpine.data('contactForm', contactForm)

window.Alpine = Alpine

Alpine.start()
