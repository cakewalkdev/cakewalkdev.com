/**
 * Sends the contact form to Static Forms in the background and swaps in the thank-you
 * message, so the visitor never leaves the page. `?contact=true` covers the no-JavaScript
 * path, where Static Forms redirects back after a plain form post.
 * Either way the contact section is scrolled into view, so the thank-you message is on screen.
 */
export default () => ({
  status: 'idle',
  error: '',

  init() {
    const url = new URL(location.href)
    if (url.searchParams.get('contact') !== 'true') return

    this.status = 'sent'
    // Drop the flag so a refresh or a shared link shows the form again. The router keeps its own
    // data in history.state, so that's passed through untouched.
    url.searchParams.delete('contact')
    history.replaceState(history.state, '', url)
    this.showSection('instant')
  },

  /** Brings the whole contact section (heading included) to the top of the window. */
  showSection(behavior = 'smooth') {
    const section = this.$root.closest('#contact') ?? this.$root
    // Wait for Alpine to swap the form for the thank-you message before measuring
    this.$nextTick(() => section.scrollIntoView({ behavior, block: 'start' }))
  },

  async submit() {
    const form = this.$root.querySelector('form')
    const data = new FormData(form)
    // The redirect is only for plain posts; a fetch following it would land on our own HTML
    data.delete('redirectTo')

    this.status = 'sending'
    this.error = ''

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) throw new Error(result.error)
      this.status = 'sent'
      form.reset()
      // The form collapses into a short message, which can leave the page scrolled past it
      this.showSection()
    } catch (error) {
      this.status = 'error'
      this.error = `Sorry, your message didn't send${error.message ? ` (${error.message})` : ''}. Please try again in a moment.`
    }
  },
})
