import validator from './validator.js';
let button = document.getElementById ("buttonSend");//declarar button llamar id "button" desde index.html
button.addEventListener ("click", function (e) {
   e.preventDefault ()
let cardNumber= document.getElementById ("cardNumber").value;
let regex= new RegExp ('^[0-9]+$');
if(!regex.test(cardNumber)){
    alert("¡Por favor, ingresa un número de tarjeta!")
    
}else{


let validacion= validator.isValid(cardNumber);

document.getElementById("cardNumber").value =validator.maskify(cardNumber);
if (validacion){
  alert("¡Tu tarjeta es válida!");
}else{ 
    alert("¡Tu tarjeta es inválida! Por favor, ingresa un número de tarjeta válido"); 
 
}
//console.log(validator);
}
});