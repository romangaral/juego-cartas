//--------------------------------VARIABLES----------------------------
/*Variables constantes con los valores de toda la baraja */
const valor = ["1", "2", "3", "4", "5", "6", "7", "S", "C", "R"];
const palo = ["OR", "BA", "CO", "ES"];
const baraja = [];

//----------------------------------CLASES------------------------------
/*Clase carta con un constructor con dos parametros, el nombre de 
la carta sera la concatenacion de esos parametros */
class Carta {
  constructor(valor, palo) {
    this.valor = valor;
    this.palo = palo;
    this.nombre = valor + palo;
  }
}
/*Clase jugador con tres parametros que se inicializan cuando creamos el objeto,
tenemos dos metodos que son los que aumentaran los intentos y los matchs */
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
/*Inicializamos la baraja creando objetos carta uniendo el valor y el palo */
function inicializaBaraja() {
  for (let i = 0; i < valor.length; i++) {
    for (let j = 0; j < palo.length; j++) {
      carta = new Carta(valor[i], palo[j]);
      baraja.push(carta.nombre);
    }
  }
}

/*Funcion para pedir los nombres y comprobar que 
el campo no esta vacio */
function pideNombres() {
  do {
    Jugador.nombre = prompt("Jugador, introduce tu nombre:");

    var nombreOK = true;
    //Comprobamos que el campo no este vacio o que solo sean espacios en blanco o
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

/*solicitamos una carta por teclado, la combertimos a mayusculas, y verificamos
que se encuentra en el array baraja, si no es asi genera una alerta y vuelve a 
pedirla */
function eligeCarta(jugador) {
  do {
    var apuesta = prompt(jugador.nombre + " elige una carta");
    var apuestaMay = apuesta.toLocaleUpperCase();

    if (baraja.includes(apuestaMay)) {
      return apuestaMay;
    } else {
      baraja.includes(apuestaMay) == false;
      alert("Introduce una carta valida");
    }
  } while (baraja.includes(apuestaMay) == false);
}

/*Funcion que compara las apuestas de los jugadores y comprueba si son iguales */
function jugadaEnCurso(apuesta1, apuesta2) {
  var apuesta1 = eligeCarta(jugador1);
  var apuesta2 = eligeCarta(jugador2);
  var rst = document.querySelector(".resultado");

  if (apuesta1 == apuesta2) {
    jugador1.setMatch(jugador1.getMatch());
    jugador1.setIntentos(jugador1.getIntentos());
    
    rst.appendChild(document.createTextNode("Intento " + jugador1.getIntentos() + ": MATCH POINT!!"));
    rst.appendChild(document.createElement("br"));
    rst.appendChild(document.createTextNode("Puntos de partida: " + jugador1.getMatch()));
    rst.appendChild(document.createElement("br"));
    rst.appendChild(document.createElement("br"));

  } else {
    jugador1.setIntentos(jugador1.getIntentos());
    
    rst.appendChild(document.createTextNode("Intento " + jugador1.getIntentos() + ": NO Match"));
    rst.appendChild(document.createElement("br"));
    rst.appendChild(document.createTextNode("Puntos de partida: " + jugador1.getMatch()));
    rst.appendChild(document.createElement("br"));
    rst.appendChild(document.createElement("br"));
  }
}

/*Funcion principal que comienza la partida, tiene dentro las demas funciones 
para ir inicializandolas */
function comenzarPartida() {
  var fin = document.querySelector(".final");

  inicializaBaraja();

  //creamos el objeto jugador 1
  jugador1 = new Jugador(pideNombres(), 0, 0);
  let nombre1 = document.getElementById("nombre1");
  nombre1.appendChild(document.createTextNode(`Jugador 1: ${jugador1.nombre}`));
  nombre1.appendChild(document.createElement("br"));
  nombre1.appendChild(document.createElement("br"));

  //creamos el objeto jugador 2
  jugador2 = new Jugador(pideNombres(), 0, 0);
  let nombre2 = document.getElementById("nombre1");
  nombre2.appendChild(document.createTextNode(`Jugador 2: ${jugador2.nombre}`));
  
  //Realizamos los 10 intentos dentro del bucle do-while
  do {
    jugadaEnCurso();
  } while (jugador1.getIntentos() <= 10);
  
  /*Dependiendo de los match que generemos, enviaremos un mensaje al final
  de la partida */
  switch(jugador1.getMatch()){
    case 0:
    case 1:
    case 2:
    case 3:
      final = ("MATCH Points: " + jugador1.getMatch() + ". El resultado final es de " + 
      jugador1.getMatch() + " sobre 10, necesitáis mejorar...");
      break;
    case 4:
    case 5:
    case 6:
      final = ("MATCH Points: " + jugador1.getMatch() + ". El resultado final es de " + 
      jugador1.getMatch() + " sobre 10, vais por buen camino...");
      break;
    case 7:
    case 8:
    case 9:
      final = ("MATCH Points: " + jugador1.getMatch() + ". El resultado final es de " + 
      jugador1.getMatch() + " sobre 10, estais en la misma sintonia...");
      break;
    case 10:
      final = ("MATCH Points: " + jugador1.getMatch() + ". El resultado final es de " + 
      jugador1.getMatch() + " sobre 10, sois perfectos lo, lo boráis...");
      break;
  }

  fin.appendChild(document.createTextNode(final));
}


//---------------------------COMIENZO DE PARTIDA-------------------------

comenzarPartida();

//---------------------------------FIN------------------------------