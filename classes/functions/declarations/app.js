
// No error(Hoisting)
sayHi()

// Function declarations
function sayHi() {
  console.log("hello")
}

// ReferenceError
favoriteFood()

// Function expression
const favoriteFood = function () {
  console.log("Lasanha")
}

favoriteFood()
sayHi()

