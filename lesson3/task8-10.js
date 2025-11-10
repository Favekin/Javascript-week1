//task8

for (let i = 1; i <= 10; i++) {
  let row = ''
  for (let j = 1; j <= 10; j++) {
    row += (i * j) + '\t'
  }
  console.log(row)
}


//task9
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

names.forEach(name => {
  console.log('Hello, ' + name + '!')
})

const nameLengths = names.map(name => name.length)
console.log('Lengths of names:', nameLengths)

const namesStartingWithD = names.filter(name => name.startsWith('D'))
console.log('Names starting with D:', namesStartingWithD)

//task10

const colors = ['red', 'green', 'blue', 'yellow']

for (const color of colors) {
  console.log('Color: ' + color.toUpperCase())
}
