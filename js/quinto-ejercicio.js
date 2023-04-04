
/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    //metodo constructor
    
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
        //#
        //propiedades que hacen referencia al objt
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
    generarDNI() {
        const dni = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        return dni;
    }
    //MUESTRO 
 mostrarGeneracion() {
   let generacion;
    let rasgo;
//CLASIFICACION DE CADA GEN  
      if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = 'Generación Z';
        rasgo = 'Irreverencia';
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = 'Generación Y (millennials)';
        rasgo = 'Frustración';
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = 'Generación X';
        rasgo = 'Obsesión por el éxito';
      } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = 'Baby Boom';
        rasgo = 'Ambición';
      } else if (this.anioNacimiento < 1949) {
        generacion = 'Silent Generation (niños de la posguerra)';
        rasgo = 'Austeridad';
      }
  
      console.log(`${this.nombre} pertenece a la ${generacion}, cuyo rasgo característico es la ${rasgo}.`);
    }
  }
  let persona1 = new Persona('Juan', 25,'dni', 'H', 75, 1.8, 1996);
//   let persona1 = new Persona('Juan', 25, persona.generarDNI(), 'H', 75, 1.8, 1996);
persona1.mostrarGeneracion(); 
// Persona.generarDNI()





