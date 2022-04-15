/* let numbers = [4 ,5, 8, 9]

let testNumbers = numbers.filter(function(number) {
    return true;
});

console.log(testNumbers) */

function getPositiveTemperatures(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature > 0  
    })
}

console.log(getPositiveTemperatures([-5, 12, 3]))