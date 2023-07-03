const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { customer_name } = form

  console.log(customer_name.value)
});

const username = "Felipe"
const pattern = /[a-zA-Z]{6,}/

const isAMatch = username.search(pattern)
console.log(isAMatch) // 0


// const isAMatch = pattern.test(username)
// console.log(isAMatch) // true

