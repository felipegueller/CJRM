const button = document.querySelector("button")
const ul = document.querySelector('ul')
const lis = document.querySelectorAll("ul li")

const removeLiFromDOM = event => {
  const clickedElement = event.target

  clickedElement.remove()
}

const addListItem = () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.append(li)
}

lis.forEach(li => li.addEventListener('click', removeLiFromDOM))
button.addEventListener('click', addListItem)