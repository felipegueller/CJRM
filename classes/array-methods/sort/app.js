// Ordernando um array de palavras
const fruit = ['apple', 'orange', 'greap', 'watermellon', 'bananas']
fruit.sort() // altera o array original

console.log({fruit})

// ordernando números
const numbers = [10, 23, 12, 5, 32, 77, 18, 15]
// numbers.sort((number1, number2) => number1 - number2) // asc
numbers.sort((number1, number2) => number2 - number1) // desc

console.log({numbers})

// Ordenando objetos pela propriedade
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => item2.score - item1.score) // desc

console.log({theBigFamily})