/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
let cuenta = {
//PROPIEDADES:
Titular: 'Alex',
Saldo: 0,
//METODOS:
    // Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Ingresar: function(cantidad){
 this.Saldo += cantidad
},
//Un método extraer() que permita retirar la cantidad pasada como parámetro.
Extraer:(cantidad)=>{
    if(cantidad <=this.Saldo){
        this.Saldo -= cantidad;
    }else{
       console.log('El saldo es insuficiente') 
    }

},

//Un método informar() que retorne la información del estado de la cuenta. 
Informar:function(){
return(`Titular:${this.Titular} el saldo que posee en su cuenta es: ${this.Saldo}`)
},
}

//MOSTRAR POR CONSOLA 
console.log(cuenta);
console.log(cuenta.Informar());
Ingresar(500);
Extraer(20);
Informar();
console.log(cuenta.Informar());
document.write(`Titular:${cuenta.Titular} el saldo que posee en su cuenta es: ${cuenta.Saldo}`)