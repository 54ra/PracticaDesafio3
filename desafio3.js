/* @file desafio3.js
 * @description Generador algorítmico de tablero de ajedrez 8x8 y procesador de historial de jugadas.
 * @author Sara López Shaida
 * @coauthor Julia Szmolarik Sánchez
 * @version 1.0.0
 * @date 2026-10-10*/

/*Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:
    1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas
algebraicas.
    2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.
    3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque
console.log("=== GENERANDO TABLERO ALGEBRAICO 8x8 ===");*/

console.log("=== GENERANDO TABLERO ALGEBRAICO 8x8 ===");
// Primer comentario de Sara (autora): El tablero de ajedrez se genera desde la fila 8 descendiendo hasta la 1

for (let fila = 8; fila >= 1; fila--) {
    let lineaTablero = "";

    //Primer comentario de Sara (autora): recorrer las columnas
    // Comentario de Julia: Bucle anidado para recorrer los códigos ASCII de las columnas desde la 'a' hasta la 'h'.
    for (let colChar= 'a'.charCodeAt(0); colChar <= 'h'.charCodeAt(0); colChar++) {
        let columna= String.fromCharCode(colChar);
        let coordenada= `${columna}${fila}`;

        // Primer comentario de Sara (autora): convertir carácter a una posición numérica
        // Comentario de Julia: Convierte el valor ASCII en una posición numérica del 1 al 8.
        let colIndex= colChar - 'a'.charCodeAt(0) + 1;

        //Primer comentario de Sara (autora): fórmula
        // Comentario de Julia: Aplica la fórmula de paridad para asignar si la casilla es [Clara] u [Oscura].
        let colorCasilla= ((fila + colIndex) % 2 === 0) ? "[Clara]" : "[Oscura]";

        // Primer comentario de Sara (autora): acumular las casillas de la misma fila en una sola línea
        // Comentario de Julia: Concatena cada casilla con su color para formar la línea completa de la fila.
        lineaTablero += `${coordenada}${colorCasilla} `;
    }
    console.log(lineaTablero);
}

/* Comentario de Julia:
Array con el historial de jugadas en notación algebraica y metadatos de la partida. */

const historialPartida= [
    "e4",
    "e5",
    "COMENTARIO: Apertura clásica de peón de rey",
    "Nf3",
    "Nc6",
    "COMENTARIO: Las negras defienden la casilla e5",
    "Bc4",
    "Nf6",
    "Ng5",
    "d5",
    "exd5",
    "Nxd5",
    "Qf3#", // Primer comentario de Sara (autora): Esta jugada incluye el símbolo '#' de Jaque Mate
    "Qg3",  // Primer comentario de Sara (autora): Jugada posterior que no debe llegar a procesarse
    "COMENTARIO: Esta línea será totalmente ignorada"];

// Primer comentario de Sara (autora): recorrer el historial con un bucle for...of

for (let jugada of historialPartida) {

    //Si es un comentario, lo saltamos con 'continue'
    if (jugada.startsWith("COMENTARIO:")) {
        continue;
    }

    // Primer comentario de Sara (autora): Si no es comentario, procesamos e imprimimos la jugada en la consola
    // Comentario de Julia: Muestra en la consola la jugada que ha pasado el filtro.
    // Respuesta de Sara (autora): Exacto, solo llegan a este punto los movimientos válidos de las piezas.
    console.log(`Procesando jugada válida: ${jugada}`);

    //Primer comentario de Sara (autora): Si contiene el carácter '#', abortamos el bucle por completo con 'break'
    if (jugada.includes('#')) {
        console.log("¡Jaque Mate detectado! Finalizando el análisis de la partida.");
        break;
    }
}