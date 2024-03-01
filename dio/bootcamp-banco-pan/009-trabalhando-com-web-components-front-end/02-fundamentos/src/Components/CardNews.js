class CardNews extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card')

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card__left')

    const author = document.createElement('span')
    author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous')
    const linkTitle = document.createElement('h1')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url')
    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('content')

    cardLeft.appendChild(author)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card__right')
    const newsImage = document.createElement('img')
    newsImage.src =
      this.getAttribute('img-src') || './assets/img/default-photo.png'
    newsImage.alt = this.getAttribute('img-alt')
    cardRight.appendChild(newsImage)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
    .card {
      width: 720px;
      /* border: 1px solid gray; */
      box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .card__right > img {
      width: 100%;
      height: 100%;
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
      font-weight: 400;
    }
    
    .card__left > h1 {
      margin-top: 15px;
      font-size: 25px;
    }
    
    .card__left > p {
      color: #777;
    }
    `

    return style
  }
}

customElements.define('card-news', CardNews)
