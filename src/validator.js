const validator = {
  // ...
  isValid: (creditCardNumber) => {

    //verificar que sean solo números//
    if ( isNaN(creditCardNumber) ){
      console.log("No es un número");
      return false;
    }

    //Verificar que el largo de la tarjeta sea 16 C
    let largoString = creditCardNumber.length;
    if (largoString !== 16){
      console.log("El largo de la tarjeta no corresponde");
      return false;
    }

    //algoritmo de Luhn
    creditCardNumber = creditCardNumber.toString(); //para asegurar de que el parámetro sea string//

    let reverse = "";
    for (let i = creditCardNumber.length - 1; i >= 0 ; i--) {
      //creditCardNumber[i];        // Primera forma de obtener el caracter en el indice "i"
      //creditCardNumber.charAt(i); // Segunda forma de obtener el caracter en el indice "i"
      reverse = reverse + (creditCardNumber[i]);
    }

    /*
    Numero enviado de tarjeta: 1547865415446841

    let reverse = ""; // Cada vuelta a reverse se le suma el caracter del número de tarjeta desde el final
    hacia el comienzo.

    Primera vuelta
    reverse = reverse + "1"; // reverse: "1"
    Segunda vuelta
    reverse = reverse + "4"; // reverse: "14"
    Tercera vuelta...
    reverse = reverse + "8"; // reverse: "148"
    reverse = reverse + "6"; // reverse: "1486"...

    
    */
    


    console.log(reverse);

    console.log("Fin de el código");
  }
};

/* 
function hola(userName){
  console.log("hola " + userName);
}
*/

export default validator;
