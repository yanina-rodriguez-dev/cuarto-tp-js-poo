/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo
 y si está encendido o apagado. 
 Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/
//Primero modelo el objeto auto, abstraigo las caracteristicas de la vida real antes de comenzar a crearlo.

let auto = {
  //PROPIEDADES son caracteristicas clave: valor en valor no hay restricciones puede ser cualquier tipo de datos
  nombre: "auto",
  color: "azul",
  marca: "renault",
  modelo: "koleos",
  cantPuertas: "5",
  anio: "2019",
  id: "aeio123",
  //METODOS- Acciones
  endender: () => {
    document.write(`<p>El auto esta encendido.</p>`);
  },
  frenar: function () {
    document.write(`<p>El auto se detuvo</p>`);
  },
  //arrow fuction funcion mas corta
  tocarBocina: () => {
    document.write(`El auto tien su bocina encendida`);
  },
  apagar: function () {
    document.write(`<p>El auto esta apagado</p>`);
  },
};
console.log(auto);
console.log(auto.nombre);

for (let propiedad in auto) {
  if (typeof auto[propiedad] === "function") {
    console.log(`${propiedad}: [Método del objeto]`);
  } else {
    console.log(`${propiedad}: ${auto[propiedad]}`);
  }
}

document.write(`<p>Nombre:${auto.nombre}</p>`);
document.write(`<p>Color::${auto.color}</p>`);
document.write(`<p>Marca:${auto.marca}</p>`);
document.write(`<p>Modelo:${auto.modelo}</p>`);
document.write(`<p>Cantidad de puertas:${auto.cantPuertas}</p>`);
document.write(`<p>Año:${auto.anio}</p>`);
document.write(`<p>Id:${auto.id}</p>`);

// MUESTRO OBJETO CON METODOS
auto.endender();
auto.frenar();
auto.tocarBocina();
auto.apagar();




// for (let propiedad in auto) {
//    if (typeof auto[propiedad] === "function") {
//      document.write(`${propiedad}: [Método del objeto]<br>`);

//  }
//mostarr por pantalla

// document.write(`<p>Encendido: ${auto.encender}</p>`);
