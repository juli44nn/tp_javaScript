/*import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


//funciones usadas
const obtenerNombre = ()=>{
  let nombre= prompt("Ingresa tu nombre","pepe");; 
  return nombre; 
};

let ingresoNumeros = ()=>{
  let arreglo= []; 

  for(let i=0; i<3;i++){

    do{
      arreglo[i]= Number(prompt("valor "+(i+1)));

    }while(typeof arreglo[i]!="number")

  }
  return arreglo;
}

let compara= (arr)=>{
  let mayor = arr[0];
  for(let i=1 ; i<3; i++){
    if(arr[i]>mayor)
      mayor=[arr[i]];
  }
  return mayor;
}



//variables declaradas
let a =5 , b=7 ,c=a+b; 
let d ,e,f ,nombre; 


//EJERCICIO 2 

console.log("el valor de la variable c es "+c);

//ejercicio3 

nombre = obtenerNombre();
if(nombre!==null && nombre !==undefined)
  console.log("hola",nombre);
else{
  console.log("no ingresate tu nombre, ingresalo xfavor!");
  obtenerNombre();
}

//operadores

  let arreglo = ingresoNumeros();
  console.log("el mayor es: "+  compara(arreglo));



//paridad

let valor = prompt("ingresa el numero ");
if(valor %2 ==0)
  console.log("el numero "+valor+" es par")
else
  console.log("el numero "+valor+" es impar")


//asignacion y blucles
let variable = 10 ; 

while(variable!==0){
  console.log(variable);
  variable-= 1; 
}

let mayorCien;
do{
  mayorCien = Number(prompt("ingresa un valor mayor a cien "));

}while(mayorCien<=100)

console.log(mayorCien);



let esPar = (num)=>{
  if(num%2==0)
    return true;
  else
    return false;
}

function convertirCelsiusAFahrenheit (celsius){
  let F = celsius *1.8 + 32 ; 
  console.log(celsius+"°C equivale a",F+"°F");
}


let paridad = prompt("ingresa un valor ");
console.log("el numero ",paridad, "es par?: "+esPar(paridad));


let celcius= Number(prompt("ingresa los grados celcius"));
convertirCelsiusAFahrenheit(celcius);
*/


//Objetos

let libro = {
  titulo: "MR Mercedes",
  autor: 'Stephen King',
  anio: 2010,

  temporalidad: function(){
    let fehcaActual = new Date();
    if(fehcaActual-this.anio<=10)
      console.log("el libro",this.titulo, "es reciente")
    else
      console.log("el libro",this.titulo, "es antiguo")


  }

}




let persona = {
  nombre: 'Lucio',
  edad: 24,
  ciudad:'Atenas',

  actualizar: function(nameCiudad){
    this.ciudad =nameCiudad ; 

    console.log("se ha actualizado la ciudad, los nueos datos son:\n"+ "Nombre: "+this.nombre,'\nEdad '+this.edad+"\nCiudad "+this.ciudad);
  }
}


persona.actualizar("Mendoza");

libro.temporalidad();


//Arrays

let numeros = [1,2,3,4,5,6,7,8,9,10];
let nuevoArray = [];
for(let i=0 ; i<numeros.length; i++){
  nuevoArray[i]= numeros[i]*2; 
}

console.log("los datos originales son "+numeros+"\n"
  ,"los datos nuevos: "+nuevoArray
);


let pares = []; 

for(let i=0 ;i<=20; i++)
{
  if(i%2 ==0)
    pares[i]=i;
}
console.log("primeros numeros pares "+pares);



//DOM
function cambiaarColor() {
  let contenedor = document.getElementById('elementos'); 

  if(contenedor.classList.contains('parrafo'))
    contenedor.classList.remove('parrafo');
  else
    contenedor.classList.add('parrafo');
}



const botonColor = document.getElementById('botonColor');

botonColor.addEventListener('click',()=>{
  cambiaarColor();
})


let boton2 = document.getElementById("formulario");

boton2.addEventListener("click",()=>{

  let texto = document.getElementById("texto").value; 
  alert("el msj ingresado es: "+texto);
})


const lista = document.querySelectorAll('#lista li');

lista.forEach(item=>{
  item.addEventListener('click',()  =>{
    console.log(item.textContent);
  })
});



let habilitar = document.getElementById('habilitar');
let deshabilitar = document.getElementById("deshabilitar");

habilitar.addEventListener('click',()=>{

  let entrada = document.getElementById('entrada');
  entrada.disabled = false;
})

deshabilitar.addEventListener('click',()=>{

  let entrada = document.getElementById('entrada');
  entrada.disabled = true;
})


function persistir(){
  let campo = String(document.getElementById("correo").value);
  let textoCorreoGuardado =  JSON.parse(localStorage.getItem('correo'));
  let parrafo = document.getElementById('msj');

  if(campo === textoCorreoGuardado){
    parrafo.textContent ="correo guardado: " +campo;

  }else{
    localStorage.setItem('correo',campo);
    parrafo.textContent ="el correo no existe. se ha creado!!"
  }

  localStorage.setItem('correo',JSON.stringify(campo));

}


let guardar = document.getElementById('guardar');

guardar.addEventListener('click',()=>{
  persistir()
})