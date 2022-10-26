// Inicializando un array con corchetes
let numeros=[1,2,3,4,45,'Maria',true,false,'🤩']//?
// Inicializando un array con el constructor
const arr=Array() 
const ochoValores=Array(12).fill('0')
console.log(ochoValores);
console.log(arr);
//Split
let apellido='Bejarano' 
const caracteresApellido=apellido.split('')
console.log(caracteresApellido);

let universidades='Gabriel René Moreno, Universidad Mayor de San Andrés, Universidad Mayor San Simón,Juan Misael saracho'

const ListaUniversidades=universidades.split(',') 
console.log(ListaUniversidades);
console.log(ListaUniversidades.length);

let txt='I love teaching and learn HTML,CSS,JS,React'
const listaTxt=txt.split(' ')
console.log(listaTxt);
console.log(listaTxt.length);

const frutas=['banana','mango','piña','limón','sandia','toronja']


let Primerafruta=frutas[3]
console.log(Primerafruta);

const primeraLista=[1,2,3]
const segundaLista=[4,'maria',5,6,'🤩']
const terceraLista= primeraLista.concat(segundaLista)
console.log(terceraLista);
console.log(primeraLista);
console.log(segundaLista);

var numbers=[1,2,3,4,'maria','👀']
// console.log(numbers.indexOf('juana'));
let indice= numbers.indexOf('👀')
if(indice===-1){
    console.log('No existe el valor');
} else{
    console.log('existe ese valor');
}

if(numbers.indexOf('maria')===-1){
        console.log('No existe ése valor');
}else{
    console.log('Si existe ése valor');
}

var numbers=[1,1,1,1,2,3,6]
let IndiceNumbers=numbers.lastIndexOf(1)
console.log('posición del elemento buscado 🔍 ',IndiceNumbers);

var numbers=[1,2,3,4,5]

// console.log(numbers.includes(-4));
console.log('esto es un array? ',Array.isArray(numbers))

var numbers=[1,2,3,4,5]
console.log(numbers.join())
const nombres=['alejandro','Andre','Daniel']
console.log(nombres.join('🌟 '));


var numbers=[1,2,3,4,5]

// 2,3,4
console.log(numbers.slice())
console.log(numbers.slice(1,3))

var numbers=[1,2,3,4,5]
console.log(numbers.splice(1,3));

const TecnologiasWeb=['HTML','CSS','JS','React','A']
console.log(TecnologiasWeb.sort())
console.log(TecnologiasWeb.reverse());





