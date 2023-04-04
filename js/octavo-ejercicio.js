/* Crea una clase llamada "Persona" que tenga las propiedades "nombre",
 "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase
  "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/
class Persona {
    //constructor y propiedades
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  //metodos
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }

    despedirse() {
      console.log("Hasta luego!");
    }
  }
  //objetos nuevos 
  const persona1 = new Persona("Yanina", 24, "programadora");
  const persona2 = new Persona("Tamara", 36, "diseñador");
  //saludos-consola
  persona1.saludar(); 
  persona2.saludar(); 
  //despedidas
  persona1.despedirse();
  persona2.despedirse(); 

  