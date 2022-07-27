let heroes = ['Wolwerine', 'Superman', 'Super Justiceiro']
heroes[4] = 'Fred'
// heroes = ['new array'] // works

const fruits = ['banana', 'apple', 'orange']
fruits[3] = 'grape'
// fruits = ['new array'] // does work, error 

// Methods and property
// console.log(`fruits length: ${fruits.length} items`) // length property

const fruitsString = fruits.join(' | ')
// console.log(fruitsString, '\n' ,typeof fruitsString)

const indexOfApple = fruits.indexOf('apple')
// console.log(`Apple index: ${indexOfApple}`)

const fruitsLengthAfterPushApple = fruits.push('apple')
// console.log(fruitsLengthAfterPushApple)

// fruits.push(...heroes)
// console.log('Fruits + heroes: ', fruits)

const lastIndexOfApple = fruits.lastIndexOf('apple')
// console.log(`Last apple's index: ${lastIndexOfApple}`)

const lastElementRemovedOfArray = fruits.pop()
// console.log(lastElementRemovedOfArray)

// console.log('Concat: ', fruits.concat(heroes, [2, 3, 4]))
