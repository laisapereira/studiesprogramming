const fs = require('fs')

console.log(1)

/* callback

fs.readFile ('./text1.txt', (err, contents) => {
    fs.readFile('./text2.txt', (err2, contents2) => {
        console.log(err, String(contents))
        console.log(err2, String(contents2))
    })  
})

*/

/* const readFile = file => new Promise((resolve, reject) =>{
        fs.readFile(file, (err, contents) => {
            if(err) {
                reject(err)
            } else {
                resolve(contents)
            }
        })
    })

readFile('./text1.txt')
    .then (contents => {
        console.log(String(contents))
        return readFile('./text2.txt')
    })

    .then(contents => {
        console.log(String(contents))
    })
 */

//async/await - açucar sintático em cima da promise

const init = async() => {
    const contents = await readFile('./text1.txt')
    const contents2 = await readFile('./text2.txt')
    console.log(String(contents))
    console.log(String(contents2))
}

console.log('init', init())

console.log(2)

console.log(3) 
