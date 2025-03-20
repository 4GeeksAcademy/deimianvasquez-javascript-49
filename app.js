/*
    variables:
    1.- let
    2.- const
    3.- var (no se recomienda)

*/

let nombre = "Deimian Vásquez" // declarando
nombre = "Cristian Yanza" // reasignando por cualquier tipo de datos 
nombre = "Otro Nombre"


const urlBase = "https://deimian.api.com"
// const PI = 3.14151


var name = "Daniela Cornejo"
var name = "Deimian"
var DB_PASSWORD = "1234566"


let age = "diez"
let nombreApellido = "Valentina Lopez" // funciones y variables camelCase
let NombreApellido = "Guillermo cruz" // clases y componentes PascalCase

// console.log(nombre)
// console.log(urlBase)
// console.log(PI)

// Tipos de datos 

//Boolean --> true, false
let form = true

// String --> caracteres "hol1222*/+#"
let text = 'Aquí va el texto'
let textTwo = "Esta es la otra parte"
let textThree = "Soy la tercera parte"
let ressult = 'Mi texto de \"relleno\"' + " " + text + " " + textTwo + " " + textThree // concatenación
let ressultTwo = `Mi texto de "relleno" ${text} ${textTwo} ${textThree}` // concatenar con literals


// console.log(ressultTwo)
// console.log(ressult)


// Number --> integer 10, float 10.1

let sum1 = 15.10
let sum2 = 10

// console.log(sum2 + sum1)


// undefined --> no tiene nada para devolver
let lastname;

lastname = "Leonardi"
// console.log(lastname)


// null --> tiene algo y es vacío
let firstname = null
firstname = "Hola"
// console.log(firstname)


// array --> poemos hacer un arrglo de distintos tipos de datos
// let names = ["Deimian", "Juan", 15, 52, true, undefined, null, [5,8,6,9], age]
// console.log(names)

// console.log(Math.PI)

// objet --> guarda grupo de información
let humanOne = {
    // key(llaves) : (properties, value)
    name: "Deimian",
    pets: ["Cat", "Dog"],
    age: 36,
}

let humanTwo = {
    "name": "Juan",
    "pets": ["Cat", "Dog"],
    "age": 36,
}

let names = [humanOne, humanTwo]
// console.log(names)


//operadores Logicos

// ==(igual a) --> con dos iguales evalúa solo el valor
// ===(igual a) --> con tres iguales evalúa el valor y e tipo de dato

let num1 = "15"
let num2 = 14

let num3 = 18

// console.log(num1 === num2)
// console.log(num1 != num2)
// console.log(num1 > num2)
console.log(num1 > num2 && num1 < num3 ) // AND de verdadero ambos deben ser verdaderos
console.log(num1 < num2 || num1 > num3 ) // OR evalua si cualquier resultado es verdadero devuelve true
console.log((num1 > num2 && num2 > num3) || num1 < num3)
console.log(!true)

let data = false


if(data){
    console.log("encendido")
    data = !data
}else{
    console.log("apagado")
}
