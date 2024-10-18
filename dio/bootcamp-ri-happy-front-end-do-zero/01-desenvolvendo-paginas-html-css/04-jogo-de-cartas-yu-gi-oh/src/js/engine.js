const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    empateScore: 0,
    scoreBox: document.getElementById('score_points')
  },
  cardSprites: {
    avatar: document.getElementById('card-image'),
    name: document.getElementById('card-name'),
    type: document.getElementById('card-type')
  },
  fieldCards: {
    player: document.getElementById('player-field-card'),
    computer: document.getElementById('computer-field-card')
  },
  playerSides: {
    playerBox: document.querySelector('#player-cards'),
    computerBox: document.querySelector('#computer-cards')
  },
  actions: {
    button: document.getElementById('next-duel')
  }
}

const playerSides = {
  player1: 'player-cards',
  computer: 'computer-cards'
}
const pathImages = './src/assets/icons/'
const cardData = [
  {
    id: 0,
    name: 'Blue Eyes White Dragon',
    type: 'Paper',
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoseOf: [2],
    TieOf: [0]
  },
  {
    id: 1,
    name: 'Dark Magician',
    type: 'Rock',
    img: `${pathImages}magician.png`,
    WinOf: [1],
    LoseOf: [0],
    TieOf: [1]
  },
  {
    id: 2,
    name: 'Blue Eyes White Dragon',
    type: 'Scissors',
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    LoseOf: [1],
    TieOf: [2]
  }
]

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length)
  return cardData[randomIndex].id
}

async function createCardImage(IdCard, fieldSide) {
  const cardImage = document.createElement('img')
  cardImage.setAttribute('height', '100px')
  cardImage.setAttribute('src', './src/assets/icons/card-back.png')
  cardImage.setAttribute('data-id', IdCard)
  cardImage.classList.add('card')

  if (fieldSide === playerSides.player1) {
    cardImage.addEventListener('mouseover', () => {
      drawSelectCard(IdCard)
    })

    cardImage.addEventListener('click', () => {
      setCardsField(cardImage.getAttribute('data-id'))
    })
  }

  return cardImage
}

async function setCardsField(cardId) {
  await removeAllCardsImages()

  let computerCardId = await getRandomCardId()

  state.fieldCards.player.style.display = 'block'
  state.fieldCards.computer.style.display = 'block'

  state.fieldCards.player.src = cardData[cardId].img
  state.fieldCards.computer.src = cardData[computerCardId].img

  let duelResults = await checkDuelResults(cardId, computerCardId)

  await updateScore()
  await drawButton(duelResults)
}

async function updateScore() {
  state.score.scoreBox.innerText = `Score: 

    Win: ${state.score.playerScore} 

    Lose: ${state.score.computerScore}

    Empate: ${state.score.empateScore}`
}

async function checkDuelResults(playerCardId, computerCardId) {
  let duelResults
  let playerCard = cardData[playerCardId]

  if (playerCard.WinOf.includes(computerCardId)) {
    duelResults = 'Ganhou'
    state.score.playerScore++
    await playAudio('win')
  }
  if (playerCard.LoseOf.includes(computerCardId)) {
    duelResults = 'Perdeu'
    state.score.computerScore++
    await playAudio('lose')
  }
  if (playerCard.TieOf.includes(computerCardId)) {
    duelResults = 'Empate'
    state.score.empateScore++
    await playAudio('lose')
  }

  return duelResults
}

async function drawButton(text) {
  state.actions.button.innerText = text
  state.actions.button.style.display = 'block'
}

async function removeAllCardsImages() {
  let { playerBox, computerBox } = state.playerSides
  let imgElements = playerBox.querySelectorAll('img')
  imgElements.forEach(img => img.remove())

  imgElements = computerBox.querySelectorAll('img')
  imgElements.forEach(img => img.remove())
}

async function drawSelectCard(index) {
  state.cardSprites.avatar.src = cardData[index].img
  state.cardSprites.name.innerText = cardData[index].name
  state.cardSprites.type.innerText = 'Attribute: ' + cardData[index].type
}

async function drawCards(cardNumbers, fieldSide) {
  for (let i = 0; i < cardNumbers; i++) {
    const randomIdCard = await getRandomCardId()
    const cardImage = await createCardImage(randomIdCard, fieldSide)

    document.getElementById(fieldSide).appendChild(cardImage)
  }
}

function init() {
  drawCards(5, playerSides.player1)
  drawCards(5, playerSides.computer)
}

async function resetDuel() {
  state.cardSprites.avatar.src = ''
  state.actions.button.style.display = 'none'

  state.fieldCards.player.style.display = 'none'
  state.fieldCards.computer.style.display = 'none'

  init()
}

async function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`)
  audio.play()
}

init()
