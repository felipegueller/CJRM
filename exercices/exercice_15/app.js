/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const jsVideos = document.querySelector(".videos")
const insertVideoClass = child => {
  child.classList.add("video")
}

Array.from(jsVideos.children).forEach(insertVideoClass)


/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
const subtitle = document.querySelector("h2")
const parentName = subtitle.parentElement.tagName.toLowerCase()
console.log(`The <h2> parent is the ${parentName} element.`)


/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
const title = document.querySelector('h1')
console.log(title.nextElementSibling)


/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
console.log(jsVideos.previousElementSibling)


/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
const logItemClicked = event => {
  const clickedElement = event.target
  console.log(clickedElement)
}

jsVideos.addEventListener('click', logItemClicked)

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/
const button = document.querySelector("button")
const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const createListItem = ({name}) => {
  const li = document.createElement('li')
  li.textContent = name

  return li
}

const addItemOnList = li => jsVideos.append(li)

const insertListItens = () => {
  const lis = videos.map(createListItem)

  lis.forEach(addItemOnList)
}

button.addEventListener('click', insertListItens)

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
const removeBodyChildren = () => {
  const body = document.body
  const bodyChildrenElements = Array.from(body.children)

  bodyChildrenElements.forEach(element => body.removeChild(element))
}

title.addEventListener('click', removeBodyChildren)