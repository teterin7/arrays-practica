let numeros=[5,1,3,5,7,7,7]


let suma=0
let promedio=0
let tamanio= numeros.length
numeros.forEach((numero)=>{
    suma=suma+numero;
});

promedio=suma/tamanio

console.log(" el promedio es :" + promedio);
