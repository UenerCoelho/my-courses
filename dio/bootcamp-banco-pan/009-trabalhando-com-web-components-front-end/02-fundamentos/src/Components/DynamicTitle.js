class DynamicTitle extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    // component base
    const componentRoot = document.createElement('h1')
    componentRoot.textContent = this.getAttribute('titulo')

    // component style
    const style = document.createElement('style')
    style.textContent = `
    h1{
      color: blue;
    }`

    // sent to shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define('title-dynamic', DynamicTitle)
