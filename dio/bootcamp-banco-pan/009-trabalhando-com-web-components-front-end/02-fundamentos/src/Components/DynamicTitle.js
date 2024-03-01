class DynamicTitle extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    // Component base
    const componentRoot = document.createElement('h1')
    componentRoot.textContent = this.getAttribute('title-attr')

    // Component style
    const style = document.createElement('style')
    style.textContent = `
      h1 {
        color: blue;
      }
    `

    // Adicionando ao shadow DOM
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define('title-dynamic', DynamicTitle)
