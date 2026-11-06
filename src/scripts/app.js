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

// The router only runs count.js once, so report each client-side navigation ourselves. The
// referrer is blanked because document.referrer still points at whatever site sent the first visit
document.addEventListener('astro:after-swap', () => {
  window.goatcounter?.count?.({ referrer: () => '' })
})
