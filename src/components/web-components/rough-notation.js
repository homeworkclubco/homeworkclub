import { annotate } from 'rough-notation'

import { gsap } from 'gsap/dist/gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

class RoughNotationElement extends HTMLElement {
  connectedCallback() {
    this.style.display = 'inline-flex' // Ensures element wraps contents correctly

    const target = this.firstElementChild
    if (!target) return

    // Read attributes for customization
    const type = this.getAttribute('data-type') || 'underline'
    const color = this.getAttribute('data-color') || 'black'
    const strokeWidth = parseFloat(this.getAttribute('data-stroke-width')) || 3
    const multiline = this.hasAttribute('data-multiline') || false
    const iterations = parseInt(this.getAttribute('data-iterations')) || 3
    const duration = parseFloat(this.getAttribute('data-duration')) || 1.5

    // Create annotation
    const annotation = annotate(target, { type, color, strokeWidth, multiline, iterations, animate: true })

    // Animate on scroll
    ScrollTrigger.create({
      trigger: this,
      start: 'top 80%',
      onEnter: () => {
        annotation.show()
        gsap.to(annotation, { duration, ease: 'power1.out' })
      },
    })
  }
}

customElements.define('rough-notation', RoughNotationElement)
