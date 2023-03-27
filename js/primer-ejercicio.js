/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo
 y si está encendido o apagado. 
 Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/
let auto = {
    //PROPIEDADES clave: valor
   color:'azul',
   marca: 'renault',
   modelo:'koleos',
   anio:'2019',
   id:'aeio123',
    //METODOS
   endender: function(){
      document.write(`<p>El auto esta encendido.</p>`)
   },

   apagar: function(){
      document.write(`<p>El auto esta apagado</p>`)
   }
}
console.log(auto);

for(){

}
document.write(`<p>Encendido: ${auto}</p>`)
