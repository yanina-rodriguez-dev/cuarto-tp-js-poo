/*Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :
crear un script con toda la logica necesaria que solicite al usuario un movimiento 
(piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar
 por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 
 (se puede realizar con los conceptos vistos hasta hoy)
*/
//prompt para solicitar 
//math random para aleatoria la eleccion entre tres
//
// creo variables arriba 
//array para almacenar lista ppot
const opciones = ['PIEDRA', 'PAPEL', 'TIJERAS'];

let eleccionUsuario = prompt('¿Quieres 1-piedra, 2-papel o 3-tijeras?');


// const eleccionPc = '';


// DEFINIR QUE SE MUESTRA CUANDO ELIJO UNA OPCION COMO USUARIO
if(eleccionUsuario === '1' || eleccionUsuario === 'PIEDRA' || eleccionUsuario === 'piedra'){
  eleccionUsuario = 'PIEDRA'  
    document.write('PIEDRA');
}
if(eleccionUsuario  === '2' || eleccionUsuario === 'PAPEL' || eleccionUsuario === 'papel'){
   eleccionUsuario = 'PAPEL'
    document.write('PAPEL');
}
if(eleccionUsuario === '3' || eleccionUsuario === 'TIJERA' || eleccionUsuario === 'tijera'){
    eleccionUsuario = 'TIJERA'
    document.write('TIJERA');
}


//
let eleccionCompu = '';
//
function eleccionPc(){

let eleccionPc = Math.floor(Math.random() *3) +1;

if(eleccionPc === 1){
  eleccionCompu = 'PIEDRA'
    document.write('PIEDRA');
}
if(eleccionPc === 2 ){
  eleccionCompu = 'PAPEL'
document.write('PAPEL');
}
if(eleccionPc === 3){
   eleccionCompu = 'TIJERA'   
    document.write('TIJERA');
}
}
eleccionPc()
 
function ganador(){
    if(eleccionCompu = eleccionUsuario){
document.write('Empate')
    }else{

        if(eleccionUsuario === 'PIEDRA' && eleccionCompu === 'PAPEL') {
            document.write('Te gano la pc')
        }
        if(eleccionUsuario === 'PAPEL' && eleccionCompu === 'TIJERA'){
            document.write('Te gano la pc')
        }
        if(eleccionUsuario === 'TIJERA' && eleccionCompu === 'PIEDRA'){
            document.write('Te gano la pc')
        }
        //RESULTADOS EN LOS QUE GANA EL USUARIO
        if(eleccionUsuario === 'PAPEL' && eleccionCompu === 'PIEDRA') {
            document.write('Ganaste')
        }
        if(eleccionUsuario === 'TIJERA' && eleccionCompu === 'PAPEL'){
            document.write('Ganaste')
        }
        if(eleccionUsuario === 'PIEDRA' && eleccionCompu === 'TIJERA'){
            document.write('Ganaste')
        }
}

}

ganador()
console.log('El jugador eligio:'+ eleccionUsuario)
console.log('La PC eligio:'+ eleccionCompu);