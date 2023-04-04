/*3-Escribe una clase que permita crear distintos objetos 
“rectángulos”, con las propiedades de alto y ancho, mas los métodos 
necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área
*/
//CLASE QUE CREA RECTANGULOS

class Rectangulo {
  constructor(alto, ancho) {
    //PROPIEDADES 
        this.alto = alto;
        this.ancho = ancho;
 }
    //METODOS 
    //modifico
  modificarAlto(alto1) {
        this.alto = alto1;
 }
  modificarAncho(ancho1) {
        this.ancho = ancho1;
 } 
 //muestro
 mostrarPropiedades() {
        return (`Alto del rectangulo: ${this.alto}-Ancho del rectangulo: ${this.ancho}`);
    //console.log(`Alto del rectangulo: ${this.alto}-Ancho del rectangulo: ${this.ancho}`)
    }
//calculo
 calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
    }
 calcularArea() {
        return this.alto * this.ancho;
    }
}
//nuevo objeto rectangulo
let rectangulo1 = new Rectangulo(10, 20);
console.log(rectangulo1.mostrarPropiedades());
//asigno valores para mostrar 
rectangulo1.modificarAlto(15);
rectangulo1.modificarAncho(25);

console.log(rectangulo1.mostrarPropiedades());
//Calculo de perimetro y area del rectangulo
console.log(`Perimetro: ${rectangulo1.calcularPerimetro()}`);
console.log(`Area: ${rectangulo1.calcularArea()}`);