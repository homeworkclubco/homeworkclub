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
 * - `data-on-scroll`: Whether to trigger the annotation on scroll. Default is true.
 * - `data-on-hover`: Whether to trigger the annotation on hover. Default is false.
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
  constructor() {
    super()
    this.annotation = null
    this.scrollTrigger = null
    this.setupAnnotation = this.setupAnnotation.bind(this)
  }

  disconnectedCallback() {
    // Clean up the scroll trigger when component is disconnected
    if (this.scrollTrigger) {
      this.scrollTrigger.kill()
      this.scrollTrigger = null
    }

    // Also clean up the annotation if it exists
    if (this.annotation) {
      this.annotation = null
    }
  }

  setupAnnotation() {
    this.style.display = 'inline-flex'

    const target = this.firstElementChild
    if (!target) return

    // place target on top of underline
    target.style.position = 'relative'
    target.style.zIndex = '1'

    // Read attributes for customization
    const type = this.getAttribute('data-type') || 'underline'
    const color = this.getAttribute('data-color') || 'currentcolor'
    const strokeWidth = parseFloat(this.getAttribute('data-stroke-width')) || 2.5
    const multiline = this.getAttribute('data-multiline') || true
    const iterations = parseInt(this.getAttribute('data-iterations')) || 2
    const duration = parseFloat(this.getAttribute('data-duration')) || 1.5
    const onScroll = this.getAttribute('data-on-scroll') || true
    const onHover = this.getAttribute('data-on-hover') || false
    
    // Create annotation
    this.annotation = annotate(target, {
      type,
      color,
      strokeWidth,
      multiline,
      iterations,
      duration,
      animate: true,
    })

    // Create new ScrollTrigger
    if (onScroll == true) {
      // if (this.getBoundingClientRect().top < window.innerHeight * 1) {
      //   this.annotation.show()
      // }


      this.scrollTrigger = ScrollTrigger.create({
        trigger: this,
        start: 'top 80%',
        onEnter: () => {
          this.annotation.show()
        },
      }) 
    }

    if (onHover) {
      target.addEventListener('mouseenter', () => {
        if (this.annotation) {
          this.annotation.hide()
          this.annotation.show()
        }
      })

      target.addEventListener('mouseleave', () => {
        if (this.annotation) {
          this.annotation.hide()
        }
      })
    }
  }

  connectedCallback() {
    this.setupAnnotation();

    // Listen for Astro page transitions and re-setup when they occur
    // document.addEventListener('astro:page-load', this.setupAnnotation)
  }
}

customElements.define('rough-notation', RoughNotationElement)