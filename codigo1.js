
/*
class Calculadora {
	
    sumar (num1,num2){
		return parseInt(num1) + parseInt(num2);
	}
	restar (num1,num2){
		return parseInt(num1) - parseInt(num2);
	}
	dividir  (num1,num2){
		return parseInt(num1) / parseInt(num2);
	}
	multiplicar (num1,num2){
		return parseInt(num1) * parseInt(num2);
	}
	potenciar(num,exp){
		//return num**exp;
		let numero=num;
			for (var i =1;i< exp;i++) {
		 	numero=numero * num;

		 }return numero;
					
	}
	raizCuadrada(num){
		const numero=num;
		const res= Math.sqrt(numero);
		return res;
	}
	raizCubica(num){
		const numero=num;
		const res= Math.cbrt(numero);
		return res;
	}
}

const calculadora = new Calculadora();

alert("Bienvenido a mi calculadora, qué operacion quieres realizar?");
operacion = prompt ("1:suma, 2:resta, 3:dividir, 4:multiplicar, 5:potenciar, 6:raíz cuadrada de un número, 7:raíz cúbica de un número");
if(operacion ==1){
let numero1 = prompt("primer numero para sumar");
let numero2 = prompt("segundo numero para sumar");
resultado=calculadora.sumar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if(operacion ==2){
	let numero1 = prompt("primer numero para restar");
	let numero2 = prompt("segundo numero para restar");
	resultado=calculadora.restar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if(operacion ==3){
	let numero1 = prompt("primer numero para dividir");
	let numero2 = prompt("segundo numero para dividir");
	resultado=calculadora.dividir(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if(operacion ==4){
	let numero1 = prompt("primer numero para multiplicar");
	let numero2 = prompt("segundo numero para multiplicar");
	resultado=calculadora.multiplicar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if(operacion ==5){
	let numero1 = prompt("base");
	let numero2 = prompt("exponente");
	resultado=calculadora.potenciar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if(operacion ==6){
	let numero1 = prompt("numero para calcular su raiz");
	resultado=calculadora.raizCuadrada(numero1);
	alert(`tu resultado es ${resultado}`);
}
else if(operacion ==7){
	let numero1 = prompt("numero para calcular su raiz cúbica");
	resultado=calculadora.raizCubica(numero1);
	alert(`tu resultado es ${resultado}`);
}
 else {
	alert("esa no es una opcion valida");
}

*/

//problema LLAVES COFLA
const contenedor =document.querySelector(".flex-container");

document.querySelector(".send-button").value="COMPRAR";
const boton=document.querySelector(".send-button");
let valorAntiguo=boton.value;
boton.value=boton.value.toUpperCase();

function crearLlave(nombre,modelo,precio){


	img="<img class='llave-img' src ='llave.png'>";
	nombre=`<h2>${nombre}</h2>`;
	modelo=`<h3> ${modelo}</h2>`;
	precio=`<p>Precio: <b>${precio} €</b></p>`;

	return [img,nombre,modelo,precio];
}
const changeHidden=(number)=>{
	document.querySelector(".key-data").value= number;
}

let documentFragment = document.createDocumentFragment();
//document.write(llave[0],llave[1],llave[2]);
for ( var i =1; i<=20; i++){

	let modeloRandom = Math.round(Math.random()*1000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave=crearLlave(`Llave: ${i}`,`Modelo: ${modeloRandom}`,precioRandom);
	let div=document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.tabIndex=i;

	div.classList.add(`item-${i}`,'flex-item'); // añadimos estas 2 clases
	div.innerHTML = llave[0]+ llave[1] + llave[2] + llave[3];
	
	documentFragment.appendChild(div);

}
contenedor.appendChild(documentFragment);