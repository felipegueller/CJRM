const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)
const h2 = document.querySelector('h2')
const egg = document.querySelector('.egg')
const button = document.querySelector('button')

const showCopyLog = () => console.log("Texto copiado!")
const changeEggColor = () => egg.style.backgroundColor = "lightgoldenrodyellow"

const showWhoClickedInsideDiv = event => {
  const tagName = event.target.tagName.toLowerCase()
  const regex = /^div$/
  const message = regex.test(tagName)
    ? 'Clicou na div.'
    : `Clicou no ${tagName}, filho da div.`

  h2.textContent = message
}

const showCoordinates = event => {
  const { offsetX, offsetY } = event
  const coords = `Eixo X: ${offsetX} | Eixo Y: ${offsetY}`

  egg.textContent = coords;
}


div.addEventListener('click', showWhoClickedInsideDiv)
h2.addEventListener('copy', showCopyLog)
egg.addEventListener("mousemove", showCoordinates)
button.addEventListener('click', () => changeEggColor)

/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/

// elementsInsideDiv.forEach(element => {
//   element.addEventListener('click', event => {
//     event.stopPropagation()
//     const tagName = event.target.tagName.toLowerCase()
//     const message = `Clicou no ${tagName}, filho da div.`

//     h2.textContent = message
//   })
// })

/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
]

const hasAFrontendDeveloper = ({ profession}) => profession === 'Front-end developer'
const containsAFrontendDeveloper = people.some(hasAFrontendDeveloper)

if (containsAFrontendDeveloper)
  console.log("O array people contém, no mínimo, um(a) Front-end developer.")