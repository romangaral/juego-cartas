//--------------------------------Variables----------------------------

const valor = ["1", "2", "3", "4", "5", "6", "7", "S", "C", "R"];
const palo = ["Or", "Ba", "Co", "Es"];
const baraja = [];
var ptsTotales = 0;

//----------------------------------CLASES------------------------------

class Carta {
  constructor(valor, palo) {
    this.valor = valor;
    this.palo = palo;
    this.nombre = valor + palo;
  }

  /*getNombre() {
    return this.nombre;
  }
  setNombre(carta) {
    this.nombre = nombre;
  }*/
}

class Jugador {
  constructor(nombre, intentos, match) {
    this.nombre = nombre;
    this.intentos = intentos;
    this.match = match;
  }
  getIntentos() {
    return this.intentos;
  }
  setIntentos(intentos) {
    this.intentos = intentos + 1;
  }
  getMatch() {
    return this.match;
  }
  setMatch(match) {
    this.match = match + 1;
  }
}

//-------------------------------FUNCIONES--------------------------

function inicializaBaraja() {
  for (let i = 0; i < valor.length; i++) {
    for (let j = 0; j < palo.length; j++) {
      carta = new Carta(valor[i], palo[j]);
      baraja.push(carta.nombre);
    }
  }
}

function pideNombres() {
  do {
    Jugador.nombre = prompt("Nombre jugador");

    var nombreOK = true;
    //Comprobamos que el campo no este vacio o que solo sean espacios en blanco
    if (
      Jugador.nombre == null ||
      Jugador.nombre.length == 0 ||
      /^\s/.test(Jugador.nombre)
    ) {
      nombreOK = false;
      alert("Campo obligatorio para comenzar");
    }
  } while (nombreOK == false);

  return Jugador.nombre;
}

function eligeCarta(jugador) {

  do {

    let apuesta = prompt(jugador.nombre + " elige una carta");

    if (baraja.includes(apuesta)) {
      return apuesta;
    } else {
      baraja.includes(apuesta) == false
      alert("Introduce una carta valida");
    }
  } while (baraja.includes(apuesta) == false);
}

function jugadaEnCurso(apuesta1, apuesta2) {
  var apuesta1 = eligeCarta(jugador1);
  var apuesta2 = eligeCarta(jugador2);

  if (apuesta1 == apuesta2) {
    jugador1.setMatch(jugador1.getMatch());
    console.log("acertaste. Tienes " + jugador1.getMatch() + " matchs");
  } else {
    console.log("no has acertado!!!!");
  }
}

inicializaBaraja();
console.log(baraja);

jugador1 = new Jugador(pideNombres(), 0, 0);
console.log(jugador1);

jugador2 = new Jugador(pideNombres(), 0, 0);
console.log(jugador2);

console.log(jugador1.getIntentos());

jugador1.setIntentos(jugador1.getIntentos());

console.log(jugador1.getIntentos());
