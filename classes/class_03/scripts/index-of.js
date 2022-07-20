// Fiding all indexes of a occurrences in letters array
const letters = ['a', 'f', 'd', 'a', 'a', 'c', 'b', 'a']
const indexesOfA = []
const element = 'a'

// first form of resolution
// let index = -1s

// do {
//   index = letters.indexOf(element, index + 1)
//   if (index !== -1) indexesOfA.push(index)
// } while(index != -1)

// second form of resolution
let index = letters.indexOf(element)

while (index !== -1)  {
  indexesOfA.push(index)
  index = letters.indexOf(element, index + 1)
}

console.log(indexesOfA)