// string
console.log("It's a string!")

const email = 'felipe.gueller@gmail.com'

console.log(`My email address: ${email}`)

// concatenação de strings
const firstName = 'Felipe'
const lastName = 'Gueller'
const fullName = firstName.concat(' ', lastName)

console.log(firstName + ' ' + lastName)
console.log(firstName, lastName)
console.log('Full name: ', fullName)
console.log('Arroz' + 9)

// accessando a um caractere específico
console.log(fullName[4]) // zero base

// propriedade de comprimento
console.log('First name size: ', firstName.length)
console.log('Last name size: ', lastName.length)
console.log('White space size: ', ' '.length)
console.log('Full name size: ', fullName.length)

// métodos de strings
console.log(fullName.toUpperCase())
console.log(fullName.toLocaleLowerCase())
console.log(fullName.charCodeAt(5))

// métodos comuns de string
const lastIndexOfA = email.lastIndexOf('a')
console.log('last occurrence of a on email: ', lastIndexOfA)

const indexOfAt = email.indexOf('@')
const emailSlice = email.slice(0, indexOfAt)
console.log('email slice:', emailSlice)

const replaceDotByUndescore = email.replace('.', '_')
console.log(replaceDotByUndescore)
const replaceAllDotByUndescore = email.replaceAll('.', '_')
console.log(replaceAllDotByUndescore)
