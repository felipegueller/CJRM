// Exercice 01 - Fiding all indexes of a occurrences in letters array
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

while (index !== -1) {
  indexesOfA.push(index)
  index = letters.indexOf(element, index + 1)
}

// console.log(indexesOfA)

// Exercice 02 - Finding if an element exists in the array or not and updating the

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper']

const transformToStringList = array =>
  array.reduce((acc, item, index, array) => {
    return array.length - 1 === index ? `${acc}- ${item}` : `${acc}- ${item} \n`
  }, '')

function updateVegetablesCollection(vegetablesArr, veggie) {
  const veggieIndex = vegetablesArr.indexOf(veggie)

  if (veggieIndex === -1) {
    vegetablesArr.push(veggie)
    console.log(`The ${veggie} has been added in collection. Now the items are: 
      \n${transformToStringList(vegetablesArr)}`)
  } else {
    console.log(`The ${veggie} had exists in collection, your items are: 
      \n${transformToStringList(vegetablesArr)}`)
  }
}

updateVegetablesCollection(veggies, 'spinach');
updateVegetablesCollection(veggies, 'spinach');