const cadena ='Mi nombre es Fer y tengo 20 años'

const regexp = /nombre es  ([A-Z][a-z]+)/
const match = regexp.exec(cadena)

console.log(isHere)

if (match){
    const name = match[1]
    console.log(name)

}else{
    console.log('No match')
}

