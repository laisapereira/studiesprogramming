const numbers = [ 1,4,5,9,14,23]
const doubledNumbers = numbers.map (num => num * 2 )

// console.log(doubledNumbers)

const fahrenheit = [0 ,22, 45,50,75,120]
const celsius = fahrenheit.map (num => Math.round (num - 32) * 5/9)

console.log (celsius)