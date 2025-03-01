/**
 * Web Component that applies Rough Notation annotations to its child element,
 * triggering the animation when the component scrolls into view.
 *
 * Attributes:
 * - `data-type`: Type of annotation (e.g., 'underline', 'circle', 'highlight'). Default is 'underline'.
 * - `data-color`: Stroke color of the annotation. Accepts any CSS color value. Default is 'currentcolor'.
 * - `data-stroke-width`: Width of the annotation stroke. Default is 3.
 * - `data-multiline`: Whether the annotation should wrap across multiple lines. Default is true.
 * - `data-iterations`: Number of drawing iterations for the annotation. Default is 3.
 * - `data-duration`: Duration of the GSAP animation in seconds. Default is 1.5.
 *
 * Example usage:
 * ```html
 * <rough-notation data-type="circle" data-color="red" data-duration="2">
 *   <span>Important Text</span>
 * </rough-notation>
 * ```
 *
 * The component wraps its first child element and applies the annotation effect,
 * ensuring the target element is positioned above the annotation.
 */

import { annotate } from 'rough-notation'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

class RoughNotationElement extends HTMLElement {
  connectedCallback() {
    this.style.display = 'inline-flex' // Ensures element wraps contents correctly

    const target = this.firstElementChild
    if (!target) return

    // place target on top of underline
    target.style.position = 'relative'
    target.style.zIndex = '1'

    // Read attributes for customization
    const type = this.getAttribute('data-type') || 'underline'
    const color = this.getAttribute('data-color') || 'currentcolor'
    const strokeWidth = parseFloat(this.getAttribute('data-stroke-width')) || 3
    const multiline = this.hasAttribute('data-multiline') || true
    const iterations = parseInt(this.getAttribute('data-iterations')) || 3
    const duration = parseFloat(this.getAttribute('data-duration')) || 1.5

    // Create annotation
    const annotation = annotate(target, {
      type,
      color,
      strokeWidth,
      multiline,
      iterations,
      animate: true,
    })

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
