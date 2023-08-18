const link = document.querySelector("a")
console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://www.globo.com')
link.innerHTML = 'Acesse o site da Globo'

const paragraph = document.querySelector('p')

const showParagraphClass = () =>
  console.log(paragraph.getAttribute('class'))
showParagraphClass()

paragraph.removeAttribute('class')
showParagraphClass()

paragraph.setAttribute('class', 'success')
paragraph.setAttribute('class', 'error')
showParagraphClass()

paragraph.setAttribute('style', 'color: green; font-size: 20px;')


