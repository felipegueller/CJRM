const paragraph = document.querySelector('p')
// paragraph.innerHTML += " Modifying"

const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//   paragraph.innerHTML += ` Inserido (${index + 1})`
// })

const div = document.querySelector(".content")
const guys = ['Ruan', 'Felipe', 'Pedro']

guys.forEach(guy => div.innerHTML += `<p>${guy}</p>`)