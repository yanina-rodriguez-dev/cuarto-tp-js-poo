/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
 nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
//crear clase, protoripo del cual se van a crear los objetos
class Producto {

    //metodo contrstructor
 constructor(paramCodigo, paramNombre, paramPrecio) {
    //propiedades
  this.codigo = paramCodigo;
  this.nombre = paramNombre;
  this.precio = paramPrecio;
 }
  //
    mostrarDatos() {
      console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
      document.write(`<p class="container contenedor">Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}<br></p>`);
    }
  }
  //creo los objetos del prototipo - añado array
  let productos = [
    new Producto("12334hd", "Cartera Trendy", 5650),
    new Producto("2334hsd", "Camisa Trudy", 3204),
    new Producto("1663kjl", "Zapatos Valley", 7450),
    new Producto("1063kml", "Zapatos Vetsi", 6450),
  ];

  for (let indice = 0; indice < productos.length; indice++) {
  productos[indice].mostrarDatos();
}