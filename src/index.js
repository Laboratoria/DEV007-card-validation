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

document.querySelector("#inputNumero").addEventListener('keydown', onlyNumbers);
document.querySelector("#inputNumero").addEventListener('keyup', dibujoNumeroTarjeta);
