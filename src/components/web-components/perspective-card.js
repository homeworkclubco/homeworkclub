/**
 * @class PerspectiveCard
 * @extends HTMLElement
 * @description A custom web component that creates an interactive card with 3D perspective and shine effects on hover.
 * The card tilts based on mouse position and displays a moving shine effect that follows the cursor.
 *
 * @example
 * // Basic usage
 * <perspective-card>
 *   <div class="card-content">
 *     <h3>My Card Title</h3>
 *     <p>Card content goes here</p>
 *   </div>
 * </perspective-card>
 *
 * @example
 * // With custom properties
 * <style>
 *   .custom-card {
 *     --tilt-amount: 15;
 *     --shine-intensity: 0.8;
 *     --content-lift: 30;
 *     --card-bg: #2a2a2a;
 *     --card-radius: 12px;
 *   }
 * </style>
 * <perspective-card class="custom-card">
 *   <!-- Card content -->
 * </perspective-card>
 *
 * @property {number} --tilt-amount - Controls the maximum tilt angle in degrees (default: 20)
 * @property {number} --shine-intensity - Controls the opacity of the shine effect (default: 1)
 * @property {string} --tilt-speed - Duration of the tilt animation when moving the mouse (default: 0.1s)
 * @property {string} --reset-speed - Duration of the reset animation when mouse leaves (default: 0.5s)
 * @property {number} --content-lift - How much the content raises on the z-axis in pixels (default: 20)
 * @property {string} --card-bg - Background color of the card (default: white)
 * @property {string} --card-radius - Border radius of the card (default: 8px)
 */
class PerspectiveCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // Initialize variables
    this.isHovering = false
    this.mousePosition = { x: 0.5, y: 0.5 }

    // Bind methods
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    // Define styles and structure
    this.render()
  }

  connectedCallback() {
    this.card = this.shadowRoot.querySelector('.perspective-card')
    this.card.addEventListener('mousemove', this.handleMouseMove)
    this.card.addEventListener('mouseenter', this.handleMouseEnter)
    this.card.addEventListener('mouseleave', this.handleMouseLeave)
  }

  disconnectedCallback() {
    this.card.removeEventListener('mousemove', this.handleMouseMove)
    this.card.removeEventListener('mouseenter', this.handleMouseEnter)
    this.card.removeEventListener('mouseleave', this.handleMouseLeave)
  }

  handleMouseMove(e) {
    const rect = this.card.getBoundingClientRect()

    // Calculate normalized position (0 to 1) within the card
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    this.mousePosition = { x, y }
    this.updateEffects()
  }

  handleMouseEnter() {
    this.isHovering = true
    this.updateEffects()
  }

  handleMouseLeave() {
    this.isHovering = false
    this.updateEffects()
  }

  updateEffects() {
    if (!this.card) return

    const tiltX = this.isHovering
      ? (0.5 - this.mousePosition.y) * this.getCustomProperty('--tilt-amount', 20)
      : 0
    const tiltY = this.isHovering
      ? (this.mousePosition.x - 0.5) * this.getCustomProperty('--tilt-amount', 20)
      : 0

    this.card.style.setProperty('--perspective-tilt-x', `${tiltX}deg`)
    this.card.style.setProperty('--perspective-tilt-y', `${tiltY}deg`)
    this.card.style.setProperty('--shine-x', `${this.mousePosition.x * 100}%`)
    this.card.style.setProperty('--shine-y', `${this.mousePosition.y * 100}%`)
    this.card.style.setProperty(
      '--shine-opacity',
      this.isHovering ? this.getCustomProperty('--shine-intensity', 1) : 0
    )

    // Update transition timing
    this.card.style.transition = this.isHovering
      ? `transform ${this.getCustomProperty('--tilt-speed', 0.1)}s ease`
      : `transform ${this.getCustomProperty('--reset-speed', 0.5)}s ease`

    // Content z-translation
    const content = this.shadowRoot.querySelector('.card-content')
    if (content) {
      content.style.transform = this.isHovering
        ? `translateZ(${this.getCustomProperty('--content-lift', 20)}px)`
        : 'translateZ(0px)'
    }
  }

  getCustomProperty(propertyName, fallbackValue) {
    const computedStyle = getComputedStyle(this)
    const propertyValue = computedStyle.getPropertyValue(propertyName).trim()
    return propertyValue ? parseFloat(propertyValue) : fallbackValue
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --tilt-amount: 10;
          --shine-intensity: 1;
          --tilt-speed: 0.1s;
          --reset-speed: 0.5s;
          --content-lift: 9;
          --card-bg: white;
          --card-radius: 8px;
          
          display: block;
        }
        
        .perspective-card {
          position: relative;
          background-color: var(--card-bg);
          border-radius: var(--card-radius);
          overflow: hidden;
          transform: perspective(1000px) 
                    rotateX(var(--perspective-tilt-x, 0deg)) 
                    rotateY(var(--perspective-tilt-y, 0deg));
          transform-style: preserve-3d;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        
        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: radial-gradient(
            circle at var(--shine-x, 50%) var(--shine-y, 50%), 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(255, 255, 255, 0) 80%
          );
          opacity: var(--shine-opacity, 0);
          transition: opacity 0.3s ease;
          mix-blend-mode: soft-light;
          z-index: 10;
        }
        
        .card-content {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
          height: 100%;
        }
        
        ::slotted(*) {
          margin: 0;
          padding: 0;
        }
      </style>
      
      <div class="perspective-card">
      <div class="card-content">
      <slot></slot>
      </div>
      <div class="shine-effect"></div>
      </div>
    `
  }
}

// Register the web component
customElements.define('perspective-card', PerspectiveCard)
