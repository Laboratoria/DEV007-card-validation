import validator from './validator.js';

console.log(validator);


function onlyNumbers(evento){
    console.log(evento);

    //verificar que sean solo números y la tecla borrar//
    if (isNaN(evento.key) && evento.key !== "Backspace") {
        console.log("No es un número");
        evento.preventDefault(); //prevenir un evento, en este caso evita que se dibuje una tecla no permitida
        return false;
    }

    //Verificar que el largo de la tarjeta sea 16 C
    const creditCardNumber = document.querySelector("#inputNumero").value;
    const largoString = creditCardNumber.length;
    if (largoString > 16) {
      console.log("El largo de la tarjeta no corresponde");
      evento.preventDefault(); //previene que se escriban mas de 16 caracteres
      return false;
    }
}

function dibujoNumeroTarjeta (){
    let creditCardNumber = document.querySelector("#inputNumero").value;
    if (creditCardNumber.length == 0){
        document.querySelector("#numero").innerHTML = "#### #### #### ####";
    } else {
        creditCardNumber = validator.maskify (creditCardNumber);
        document.querySelector("#numero").innerHTML = creditCardNumber;
    }
}

function dibujoNombreTarjeta (){
    let creditCardName = document.querySelector("#inputNombre").value;
    if(creditCardName.length == 0){
        document.querySelector("#nombre").innerHTML = "LOREM IPSUM";
    } else { 
        document.querySelector("#nombre").innerHTML = creditCardName;

    }
}

function botonValidacion(){
    const creditCardNumber = document.querySelector("#inputNumero").value; 
    const isValid = validator.isValid(creditCardNumber);
    if (isValid){
        alert('tarjeta válida');
    } else {
        alert ('tarjeta inválida');
    }
}

document.querySelector("#inputNumero").addEventListener('keydown', onlyNumbers);
document.querySelector("#inputNumero").addEventListener('keyup', dibujoNumeroTarjeta);
document.querySelector("#inputNombre").addEventListener('keyup', dibujoNombreTarjeta);
document.querySelector("#botonEnvio").addEventListener('click',botonValidacion);


const tarjeta = document.querySelector("#tarjeta");
const formulario = document.querySelector("#formulario");

// Giro de la tarjeta
const inputCvv = document.querySelector("#inputCVV");
inputCvv.addEventListener('focus', () => {
	tarjeta.classList.add('active');
});
inputCvv.addEventListener('blur', () => {
	tarjeta.classList.remove('active');
});


//selección del mes de expiración
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerHTML = i;
	formulario.seleccionarMes.appendChild(opcion); //agrega hijos (opciones) al elemento padre (opcion)
}

//selección del año de expiración
const anioActual = new Date().getFullYear();
for(let i = anioActual; i <= anioActual + 10; i++){
	let opcion = document.createElement('option'); //me crea mas elementos de tag html, en este caso de <option>
	opcion.value = i;
	opcion.innerHTML = i;
	formulario.seleccionarAnio.appendChild(opcion);
}
