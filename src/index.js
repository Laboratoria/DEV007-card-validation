import validator from './validator.js';

console.log(validator);


function onlyNumbers(evento) {
  //verificar que sean solo números y la tecla borrar//
  if ((isNaN(evento.key) || evento.key === " ") && evento.key !== "Backspace") { // Si es que el valor no es numérico && es espacio " " && no es borrar
    evento.preventDefault(); //prevenir un evento, en este caso evita que se dibuje una tecla no permitida
  }
}
//Verificar que el largo de la tarjeta sea 16 C
function largoTarjetaCredito(evento) {
  const creditCardNumber = document.querySelector("#inputNumero").value;
  const largoString = creditCardNumber.length;
  if (largoString > 16) {
    console.log("El largo de la tarjeta no corresponde");
    evento.preventDefault(); //previene que se escriban mas de 16 caracteres
  }
}

function dibujoNumeroTarjeta() {
  let creditCardNumber = document.querySelector("#inputNumero").value;
  if (creditCardNumber.length === 0) {
    document.querySelector("#numero").innerHTML = "#### #### #### ####";
  } else {
    creditCardNumber = validator.maskify(creditCardNumber);
    document.querySelector("#numero").innerHTML = creditCardNumber;
  }
}

function dibujoNombreTarjeta() {
  const creditCardName = document.querySelector("#inputNombre").value;
  if (creditCardName.length === 0) {
    document.querySelector("#nombre").innerHTML = "LOREM IPSUM";
  } else {
    document.querySelector("#nombre").innerHTML = creditCardName;
  }
}

function botonValidacion() {
  const creditCardNumber = document.querySelector("#inputNumero").value;
  const isValid = validator.isValid(creditCardNumber);
  if (isValid) {
    alert('tarjeta válida');
  } else {
    alert('tarjeta inválida');
  }
}

function dibujarCVVTarjeta() {
  const codigoSeguridad = document.querySelector("#inputCVV").value;
  if (codigoSeguridad.length === 0) {
    document.querySelector("#CVV").innerHTML = "CVV";
  } else {
    document.querySelector("#CVV").innerHTML = codigoSeguridad;
  }
}

/* 
34 y 37	American Express
36	Diner's Club / International
4	Visa
51 to 55	MasterCard
*/

function validarFranquicia (){
  const creditCardNumber = document.querySelector("#inputNumero").value;
  let urlImagen = "img/";
  if (creditCardNumber.startsWith("4") === true){
    urlImagen = urlImagen + "Visa.png";
  } else if(creditCardNumber.startsWith("34") === true || creditCardNumber.startsWith("37") === true ){
    urlImagen = urlImagen + "Amex.png";
  } else if (creditCardNumber.startsWith("36") === true){
    urlImagen = urlImagen + "Diners.png";
  } else if (creditCardNumber.startsWith("51") === true || creditCardNumber.startsWith("52") === true || creditCardNumber.startsWith("53") === true || creditCardNumber.startsWith("54") === true || creditCardNumber.startsWith("55") === true){
    urlImagen = urlImagen + "mastercard.png"
  } else {
    urlImagen = "#";
  }
  document.querySelector("#franquicia").setAttribute("src",urlImagen);
}

document.querySelector("#inputNumero").addEventListener('keydown', onlyNumbers);
document.querySelector("#inputNumero").addEventListener('keydown', largoTarjetaCredito);
document.querySelector("#inputNumero").addEventListener('keyup', dibujoNumeroTarjeta);
document.querySelector("#inputNombre").addEventListener('keyup', dibujoNombreTarjeta);
document.querySelector("#formulario").addEventListener('submit', botonValidacion);
document.querySelector("#inputCVV").addEventListener('keydown', onlyNumbers);
document.querySelector("#inputCVV").addEventListener('keyup', dibujarCVVTarjeta);
document.querySelector("#inputNumero").addEventListener('keyup',validarFranquicia);

const tarjeta = document.querySelector("#tarjeta");
const formulario = document.querySelector("#formulario");
const mesExpiracion = document.querySelector("#mesExpiracion");
const anioExpiracion = document.querySelector("#anioExpiracion");


// Giro de la tarjeta
const inputCvv = document.querySelector("#inputCVV");
inputCvv.addEventListener('focus', () => {
  tarjeta.classList.add('active');
});
inputCvv.addEventListener('blur', () => {
  tarjeta.classList.remove('active');
});


//selección del mes de expiración
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.seleccionarMes.appendChild(opcion); //agrega hijos (opciones) al elemento padre (opcion)
}

//selección del año de expiración
const anioActual = new Date().getFullYear();
for (let i = anioActual; i <= anioActual + 10; i++) {
  const opcion = document.createElement('option'); //me crea mas elementos de tag html, en este caso de <option>
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.seleccionarAnio.appendChild(opcion);
}
// Selecionar Mes
formulario.seleccionarMes.addEventListener('change', () => {
  const valorSeleccionMes = document.querySelector("#seleccionarMes").value;
  if (valorSeleccionMes === "") {
    mesExpiracion.innerHTML = "MM";
  } else {
    mesExpiracion.innerHTML = document.querySelector("#seleccionarMes").value;
  }
});

// Seleccionar Año
formulario.seleccionarAnio.addEventListener('change', () => {
  const valorSeleccionAnio = document.querySelector("#seleccionarAnio").value;
  if (valorSeleccionAnio === "") {
    anioExpiracion.innerHTML = "AA";
  } else {
    anioExpiracion.innerHTML = document.querySelector("#seleccionarAnio").value.slice(2);
  }
});


