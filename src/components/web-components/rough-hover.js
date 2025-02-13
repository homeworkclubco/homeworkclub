/* -------------------------------------------------------------------------- /
  reference: https://github.com/rough-stuff/rough-notation

  - underline: This style creates a sketchy underline below an element.
  - box: This style draws a box around the element.
  - circle: This style draws a circle around the element.
  - highlight: This style creates a highlight effect as if marked by a highlighter.
  - strike-through: This style draws horizontal lines through the element.
  - crossed-off: This style draws an 'X' across the element.
  - bracket: This style draws a bracket around an element, usually a paragraph of text. By default on the right side, but can be configured to any or all of left, right, top, bottom.
/ -------------------------------------------------------------------------- */



import { annotate } from 'rough-notation'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

if (typeof window !== 'undefined') {
  class RoughHoverElement extends HTMLElement {
    constructor() {
      super()
      this.annotation = null
    }

    connectedCallback() {
      const target = this.firstElementChild
      if (!target) return

      // Read attributes
      const type = this.getAttribute('data-type') || 'circle'
      const color = this.getAttribute('data-color') || 'currentcolor'
      const duration = parseFloat(this.getAttribute('data-duration')) || 1
      const onScroll = this.getAttribute('data-on-scroll') || false

      // Create annotation
      this.annotation = annotate(target, { type, color, duration, animate: true })

      // Scroll effect (box for buttons)
      if (onScroll) {
        ScrollTrigger.create({
          trigger: target,
          start: 'top 80%',
          onEnter: () => {
            this.annotation.show()
          },
        })
      }

      // Hover effect
      target.addEventListener('mouseenter', () => {
        if (this.annotation) {
          this.annotation.show()
        }
      })

      target.addEventListener('mouseleave', () => {
        if (this.annotation && !onScroll) {
          this.annotation.hide();
        }
      })
    }
  }

  customElements.define('rough-hover', RoughHoverElement)
}
