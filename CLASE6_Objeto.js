const persona={
    primerNombre:'Freddy',
    apellido:'Montes',
    edad:30,
    pais:'Bolivia',
    stack:'💻',
    herramientas:[
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'MongoDB'
    ],
    estaCasado:true,
    obtenerNombreCompleto:function() {
        return `${this.primerNombre}${this.apellido}`
    },
    telefono:'+5343434343'
}
console.log(persona.primerNombre);
console.log(persona.apellido);

let num = 3
if (num > 0) {
  console.log(`${num} es un numero positivo`)
}
const numbers = [1, 2, 3, 4, 5, 6]
	numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers.splice(3, 3)) 