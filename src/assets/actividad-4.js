console.log('Concectado')

console.warn('parte 1 actividad')

const hoy = new Date()
let dia = hoy.getDay()

const diasDeLaSemana = [
    'domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',
]

console.log(diasDeLaSemana[dia])

// ------------------------------------------------------------

console.warn('parte 2 actividad')

const diasDeLaSemana2= {
    0:'domingo',1:'lunes', 2:'martes', 3:'miercoles', 4:'jueves', 5:'viernes', 6:'sabado'
}
console.log(diasDeLaSemana2[dia])

// ------------------------------------------------------------------

 console.warn('punto 3')

 let cantidadHombres = parseInt(prompt('Ingrese la cantidad de hombres'))//16
 let cantidadMujeres = parseInt(prompt('Ingrese la cantidad de mujeres'))//24
 const totalHombresMujeres = cantidadMujeres + cantidadHombres;
 
 let porcentajeHombres = ((cantidadHombres*100)/totalHombresMujeres)
 let porcentajeMujeres = ((cantidadMujeres*100)/totalHombresMujeres)


 console.log(`El porcentaje de hombres es: ${Math.round(porcentajeHombres)}% `)
 console.log(`El porcentaje de mujeres es: ${Math.round(porcentajeMujeres)}%`)


//  ---------------------------------------------------------------------------

   console.warn('punto 4')
   let numero1 = parseInt(prompt('Ingrese un numero'))//5
   let numero2 = parseInt(prompt('Ingrese otro numero'))//3

   let suma = numero1 + numero2    
   let resta = numero1 - numero2
   let multiplicacion = numero1 * numero2
   let division = numero1 / numero2

   let respuesta = parseInt(prompt('Que operacion desea realizar? 1 para suma , 2 para resta, 3 para multiplicacion, 4 para division'))

    if (respuesta === 1) {  
            console.log({suma})
    } else if (respuesta === 2){
            console.log({resta})
   }else if ( respuesta === 3) {
            console.log({multiplicacion})
    } else if ( respuesta === 4) {
            console.log({division})
    } else {
        console.error('Error Ingrese un numero valido: 1 , 2, 3 o 4')
   }

//  --------------------------------------------------------------------

 console.warn('punto 5')

 let tipoHuevo = prompt('Que tipo de huevo desea llevar: 1 para "a" o 2 para "aa"?')
 let cantidadHuevo = parseInt(prompt('cantidad de huevos que llevara?'))

 if (tipoHuevo == 1 && cantidadHuevo < 101){
     console.log(`total a pagar ${(220*cantidadHuevo)}`)
 } else if (tipoHuevo == 1 && cantidadHuevo > 100 && cantidadHuevo < 201){
     console.log(`total a pagar ${(((220*cantidadHuevo)-(220*cantidadHuevo*5)/100))}`)
 } else if (tipoHuevo == 1 && cantidadHuevo > 200 && cantidadHuevo < 301){
     console.log(`total a pagar ${(((220*cantidadHuevo)-(220*cantidadHuevo*8)/100))}`)
 }else if (tipoHuevo == 1 && cantidadHuevo > 300){
     console.log(`total a pagar ${(((220*cantidadHuevo)-(220*cantidadHuevo*10)/100))}`)
 } else if(tipoHuevo == 2 && cantidadHuevo < 101){
     console.log(`total a pagar ${(250*cantidadHuevo)}`)
 } else if (tipoHuevo == 2 && cantidadHuevo > 100 && cantidadHuevo < 201){
    console.log(`total a pagar ${(((250*cantidadHuevo)-(220*cantidadHuevo*5)/100))}`)
 } else if (tipoHuevo == 2 && cantidadHuevo > 200 && cantidadHuevo < 301){
    console.log(`total a pagar ${(((250*cantidadHuevo)-(220*cantidadHuevo*8)/100))}`)
 }else if (tipoHuevo == 2 && cantidadHuevo > 300){
    console.log(`total a pagar ${(((250*cantidadHuevo)-(220*cantidadHuevo*10)/100))}`)
 } else {
     console.error('Error ingrese un numero valido: 1 o 2')
 }
