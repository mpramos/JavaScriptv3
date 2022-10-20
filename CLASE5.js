//! IF ELSE
const edad=45

if (edad===18) {
    console.log('puede votar');
} else if(edad>18) {
    console.log('puede votar');
} else{
    console.log('no puedes votar porque eres menor de edad');
}

//! SWITCH
var numero=5
switch (numero) {
    case 1:
        console.log('hola soy el numero uno');
        break;
    case 2:
            console.log('hola soy el numero dos');
            break;
    case 3:
            console.log('hola soy el numero tres');
            break;
    default:
        console.log('No soy nada');;
}
//! FOR
for (let i = 0; i < estudiantes.length; i++) {
                  saludar_Estudiantes(estudiantes[i]); 
    }
    var estudiantes=['Alejandro','Erick','Freddy','Grover']
    function saludar_Estudiantes(estudiante) {
        console.log(`Hola, ${estudiante}`);
    }
for(var estudiante of estudiantes){
    saludar_Estudiantes(estudiante) //?
}
const TecnologiasWeb=[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
]
for(var tecnologia of TecnologiasWeb ){
    console.log(tecnologia.toLowerCase()); //?
}

for (let i = 0; i < 5; i++) {
    if(i===3){
        console.log('encontramos la posicion')
        break
    }  
    console.log(i); 
}
if(2==='2'){
    console.log('son iguales')
} else {
    console.log('no son iguales');
}

//! WHILE
var i=0;
var x=0;
while (i<10) {
    i++
    x+=i
    console.log(i);
}
do {
    i+=1;
    console.log(i)
} while (i<5);

//! Funciones
//? Declarativas
function funcion_1(params) {
    return 3
}
//? Expresión
var miFuncion=function(params) {
    return 5
}
miFuncion()
//? Anónima
//! DEFAULT PARAMS
function nuevoUsuario(nombre,edad,pais) {
    var nombre=nombre || 'maria'
    var edad=edad || 45
    var pais=pais || 'Colombia'
    console.log(nombre,edad,pais);
}
nuevoUsuario()
nuevoUsuario('Freddy',25,'Peru')
// La sintaxis sea más amigable
function nuevoAdministrador(nombre='Juana',pais='Argentina', edad=35) {
    console.log(nombre,pais,edad);
}
nuevoAdministrador()
nuevoAdministrador('Freddy','Bolivia',25)

//! Array
let persona=['Marisol',22,true]

console.log(persona);
let hobbies=Array('pintar','leer','autodidacta')
// console.log(hobbies[3]);

//! añadir elemento al final
hobbies.push('escalar','bailar')
console.log(hobbies)
//! añadir elemento al inicio
hobbies.unshift('correr')
console.log(hobbies)
//! eliminar elementos al final
hobbies.pop()
console.log(hobbies)
//! eliminar elementos al inicio
hobbies.shift()
console.log(hobbies)
console.log(hobbies.length)
//! indexof
let posicion = hobbies.indexOf('autodidacta')
console.log(posicion);







