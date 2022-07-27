// inteiros e decimais
const radius = 10
const pi = 3.14

// operadores aritiméticos
const remainder = 5 % 2 // 1 -> resto da divisão
const area = pi * radius ** 2

console.log(area)

// Ordem de precedência das operações aritiméticas
const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)

// 1° parênteses
// 2° expoentes ou raízes
// 3° multiplicação ou divisão
// 4° adição e subtração

// Operadores de incremento e decremento
let postLikes = 10
postLikes++
postLikes--

// Operadores assignment (addition, subtraction, multiplication and division)
postLikes += 10
postLikes -=10
postLikes *= 10
postLikes /= 10

// NaN - Not a Number
// occurs when a operation results at a value different of a number
console.log(7 / 'oi')
console.log('s' - 4)