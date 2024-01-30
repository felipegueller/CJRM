const article = document.querySelector('article')

// Array.from(article.children).forEach(item => {
//   item.style.color = "#84e"
// })

const title = document.querySelector("h2")

// parentElement retorna o pai do elemento e pode ser encadeado
console.log(title.parentElement.parentElement.parentElement)

// obtém o próximo elemento no mesmo nível da dom
console.log(title.nextElementSibling)

// obtém o elemento anterior no mesmo nível da dom
console.log(title.previousElementSibling)