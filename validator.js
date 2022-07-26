const validator = {
  isValid: function (cardNumber) {
    //Declaro la variable, aplico reversa  y map(Number) para queme regrese el arreglo invertido y con valores numéricos
    let numCard = cardNumber.split("").reverse().map(Number)
    //console.log(numCard)

    let sum = 0; //verifica que la suma final sea 0 

    for (let i = 0; i < numCard.length; i++) {//inicia en la posición 0, aplicammos a todo el arreglo, de uno en uno
      if (i % 2 === 1) {//Si el residuo de la posicion de cada arreglo es =1(impar)
        let multiplicar = numCard[i] * 2  //Se declara una varibale que tome el valor de esa posición y *2
        console.log(multiplicar)
        if (multiplicar > 9) { //Si ese valor es mayor a 9
          let resultadoFinal = multiplicar - 9// restamos 9 (Lo mismo que sumar cifra de dos digitos)
          sum += resultadoFinal //a mi variable (sum) le sumo los numeros que cumplen la condición anterior
        } else {
          sum += multiplicar;//si no es >9 y esta en posición par, entonces solo se duplica y se suma a la variable (sum)
          //console.log(multiplicar);
        }
      } else {
        sum += numCard[i];
      }//condicional para posiciones pares, si el módulo es diferente a 1, se suman sus valores a la variable (sum)
    }

    let results = sum % 10; //nueva variable para resultado final de la operación, ya que tengo la suma total, se obtiene el módulo entre 10
    if (results === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function(cardNumber) {
    let miArray = Array.from(cardNumber) //definir arreglo
    let longArray = cardNumber.lengt; //longitud del arreglo
    if (longArray <= 4) { //Si la longitud del arreglo es igual o menor a 4
        return miArray //devuelve el arreglo 
    } else {
        for (let i = 0; i < miArray.length - 4; i++) {
            miArray[i] = '#' //Si no, devolvera el array enmascarado con #, excepto los ultimos cuatro digitos
        }
        let masknumber = miArray.join(""); //Con .joing hago que mi arreglo no este dividido o separado al mostrarlo
        return masknumber;
    }
}
}
console.log(results)



export default validator;


