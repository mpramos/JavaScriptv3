// Strings
const nombre='maria' //?
const apellido="ramos" //?

nombre.length //?
nombre.charAt(3)//?

// const nombreCompleto=nombre+' '+ apellido //?
const nombreCompleto=`${nombre} ${apellido} ${2+3}` //?
nombreCompleto.replace('maria','juana')//?
nombreCompleto.search('xxxxx')//?
nombreCompleto.toUpperCase()//?
const parrafo=`***************
*                             *
*                             *
*
*
*
********************************`
console.log(parrafo)

//! Condicionales y booleanos

if('[]'){
    console.log('La condición si se cumplió');
}
else{
    console.log('La condición no se cumplió');
}
//! Falsy Values
Boolean('')//?
Boolean("")//?
Boolean(``)//?
Boolean(0)//?
Boolean(-0)//?
Boolean(0n)//?
Boolean(NaN)//?
Boolean(null)//?
Boolean(undefined)//?
//! Truthly
Boolean('maria')//?
Boolean({})//?
Boolean([])//?

typeof(true)//?
var name='maria'//?
typeof(name)//?
typeof(String(5))
typeof(5)//?
typeof(String(true)) //?

//! Number
typeof(.5)//?
typeof(Number('5')) //?
typeof(String(5)) //?

const suma= 5+10 //?
typeof suma //?
typeof suma.toFixed(2) //?
typeof suma.toString()//?


//! Objetos
const usuario={
    nombre:'juana',
    apellido:'pérez',
    ciudad:'Cochabamba'
}
usuario.nombre //?
usuario.apellido //?
usuario['nombre'] //?

let numeros=[1,2,3,4,5,56]
// for (let index = 0; index < numeros.length; index++) {
//     const element = numeros[index];
//     console.log(element)
// }
//! PROGRAMACION FUNCIONAL
//* Funciones declarativas
function suma(a,b) {
    return a+b
}
console.log(suma(2,4))//?

//*Funciones de flecha
const suma=(a,b)=>{
    return a+b
}
console.log(suma(2,4))









