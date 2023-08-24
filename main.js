const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const clickOnCookie = document.querySelector('.clickOnCookie')
const tryAgain = document.querySelector('#tryAgain')

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A maior de todas as torres começa no solo.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
]

clickOnCookie.addEventListener('click', openCookie)
tryAgain.addEventListener('click', closeCookie)
document.addEventListener('keydown', pressedEnter)

function openCookie() {
  newPhrase = choosePhrase()
  screen2.querySelector("p").innerText = newPhrase
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}

function closeCookie() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}

function choosePhrase() {
  let randomNumber = Math.round(Math.random() * 5)
  return phrases[randomNumber]
}

function pressedEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    closeCookie()
  } else if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    openCookie()
  }
}
