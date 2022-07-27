// basic loop
// for (let i = 0; i <= 5; i++)
//   console.log(`The index's value now is ${i}`)

// running an array
const names = ['Ana', 'Mario', 'Steve']
let htmlList = ''

for (let i = 0; i < names.length; i++) 
  htmlList += `<li>${names[i]}</li>\n`

// console.log(htmlList)

// MDN sample using two conters
const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0, j = arr.length - 1; i < j; i++, j--) 
  console.log(`${arr[i]} ${arr[j]}`)
