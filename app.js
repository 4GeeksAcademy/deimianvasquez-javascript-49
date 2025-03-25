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


let age = 100
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
// console.log(num1 > num2 && num1 < num3 ) // AND de verdadero ambos deben ser verdaderos
// console.log(num1 < num2 || num1 > num3 ) // OR evalua si cualquier resultado es verdadero devuelve true
// console.log((num1 > num2 && num2 > num3) || num1 < num3)
// console.log(!true)

// let data = false


// if(data){
//     console.log("encendido")
//     data = !data
// }else{
//     console.log("apagado")
// }



// paso a paso
// let numRandom = Math.random() // 0.222222
// numRandom  = numRandom * 10 // 2.222222
// numRandom = (Math.floor(numRandom)) //  2 


// sugar sintax
let numRandom = Math.floor(Math.random() * 4 + 1)

let num = 5.4
// console.log(numRandom)
// console.log(Math.round(num))





/*
    if (condición)--> si esto es verdadero 
    {
        Aquí va lo que se ejecutara si es verdadera la condición
    }
    else{
        Aquí va lo que se ejecutara si es falsa la condición
    }
*/

// if (tShirt.toLowerCase() === color) {
//     console.log("No quiero la camisa, odio ese color")
// } else {
//     console.log("Me agrada ese color")
// }


// let color = "blue"
// let colorCamisa = prompt("Por favor, ingresa el color de la camisa: ")

// if(colorCamisa.toLowerCase() == color){
//     alert("No la quiero, odio ese color")
// }else{
//     alert("Me la llevo, es genial!!")
// }


// let edad = parseInt(prompt("Ingresa tu edad y le sumare 10 años: "))
// console.log(typeof(edad))
// alert(edad = edad + 10)

let sientoQueMeAtropelloUnTren = true;
let meAtropelloUnTren = false;


// if (sientoQueMeAtropelloUnTren) {
//     if (meAtropelloUnTren == true) {
//         console.log("No tienes gripe");
//     }
//     else {
//         console.log("Tienes gripe");
//     }
// } else {
//     console.log("No tienes gripe");
// }


// if (sientoQueMeAtropelloUnTren == false || meAtropelloUnTren == true) {
//     console.log("No tienes gripe");
// }
// else if (sientoQueMeAtropelloUnTren == true && meAtropelloUnTren == false) {
//     console.log("Tienes gripe")
// }
// else {
//     console.log("No tengo idea");
// }


// let selectedNumber = 3;

// if (selectedNumber == numRandom) {
//     console.log("Ganaste!!!!!")
// } else if (selectedNumber < numRandom) {
//     console.log("El numero que seleccionaste es menor al ganador")
// } else {
//     console.log("El numero que seleccionaste es mayor al ganador")
// }

// console.log(selectedNumber, numRandom)


age = 15

// condicional de statement
// if (age < 16) {
//     console.log("No puedes conducir");
// }
// else{
//     console.log("Puedes conducir");
// }


// condicional de expresión
// (expresión) ? (en caso de que sea verdadero) : (En caso de que sea falso)
// age < 16 ?  console.log("No puedes conducir") : console.log("Puedes conducir");
// age < 16 && console.log("Eres menor, no puedes entrar")

// JSX --> solo acepta expresiones

// funcion suma dos números
// function sum(...args) {
//     //El algoritmo 
//     let total = 0

//     for (let num of args) {
//         if (typeof (num) == "number") {
//             total = total + num
//         }
//     }

//     return total
// }


// function saludar(name) {
//     let result = "";
//     if (typeof (name) == "string") {
//         result = `Hola ¿qué tal ${name}?`
//     }

//     return result
// }

// function multi(num1, num2) {
//     let result = num1 * num2

//     return result
// }



// console.log(saludar("deimian"))
// console.log(sum(15, 58, 89, "89999"))
// console.log(multi(5, sum(15,89,multi(58,96)))

// console.log(saludar())
function saludar() {
    return "hola"
}


const multiply = function (num1, num2) {
    
    if(typeof(num1) == "number"){
        return num1 * num2
    }else{
        return "Solo puede multiplicaer números"
    }
}
// console.log(multiply("h", 6))


// arrow function --> función flecha
const suma = (num1, num2) => num1 + num2
// console.log(suma(10, 10))
// modularización 

let myArrayNotEmpty = ["Nombre", 5]
let myArrayNew = new Array(5) // --> No se recomienda

let myArray = [[1,50,20,10], "Maria", "Alvaro", "Guillermo", "Cristian", "Tobias","Julian", "Daniela", "Daniel"]
myArray[1] = "Valentina" // sobrescribimos el elemento 1 del array
let result =  myArray.push("Maria", "Jose David")
// console.log(result)

// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray[myArray.length - 1])
let namesito = "Deimian"

myArray.push(namesito) // agrega en la ultima posición
let ressultThree =  myArray.pop() // elimina a la ultima posición

myArray.shift() // elimina la primer posición 
myArray.unshift("Soy el inicio")// agrega en la primer posición
myArray.push("Juanito")
myArray.unshift("Viviana")
// console.log(ressultThree)

// for (bucle o loop) 
// for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

// for(let i = 1; i < 10; i++ ){
//     for(let j = 1; j < 10; j++ ){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
//     console.log("\n")
// }

// Deimian saluda a todas las persona del array myArray
// for(let i = 0; i < myArray.length; i++){
//     console.log(`Hola ¿qué tal ${myArray[i]}?`)
// }


// for of --> les recomiendo cuando necesitamos los elementos del array 
// for(let name of myArray){
//     console.log(`Hola ¿qué tal ${name}?`)
// }


// // for in --> lo recomiendo para trabajar con objetos ó indices
// for(let index in myArray){
//     // console.log(`Hola ¿qué tal ${myArray[index]}?`)
//     console.log(index)
// }


// let newArr = myArray.slice(3,6)
// console.log(myArray)
// console.log(newArr)
// console.log(myArray)



myArray.splice(0,3)
console.log(myArray)
