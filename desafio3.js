/*Desafío 3: Generador Algorítmico y Buscador de Casillas 8x8 (3.5
Puntos)
Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:
    1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas
algebraicas.
2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.
3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque
console.log("=== GENERANDO TABLERO ALGEBRAICO 8x8 ===");*/

console.log("=== GENERANDO TABLERO ALGEBRAICO 8x8 ===");
// El tablero de ajedrez se genera desde la fila 8 descendiendo hasta la 1
for (let fila = 8; fila >= 1; fila--) {
    let lineaTablero = "";

    // recorrer las columnas
    for (let colChar= 'a'.charCodeAt(0); colChar <= 'h'.charCodeAt(0); colChar++) {
        let columna= String.fromCharCode(colChar);
        let coordenada= `${columna}${fila}`;

        // convertir carácter a una posición numérica
        let colIndex= colChar - 'a'.charCodeAt(0) + 1;

        //fórmula
        let colorCasilla= ((fila + colIndex) % 2 === 0) ? "[Clara]" : "[Oscura]";

        // acumular las casillas de la misma fila en una sola línea
        lineaTablero += `${coordenada}${colorCasilla} `;
    }
    console.log(lineaTablero);
}

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
    "Qf3#", // Esta jugada incluye el símbolo '#' de Jaque Mate
    "Qg3",  // Jugada posterior que no debe llegar a procesarse
    "COMENTARIO: Esta línea será totalmente ignorada"];

// recorrer el historial con un bucle for...of
for (let jugada of historialPartida) {

    //Si es un comentario, lo saltamos con 'continue'
    if (jugada.startsWith("COMENTARIO:")) {
        continue;
    }

    // Si no es comentario, procesamos e imprimimos la jugada en la consola
    console.log(`Procesando jugada válida: ${jugada}`);

    //Si contiene el carácter '#', abortamos el bucle por completo con 'break'
    if (jugada.includes('#')) {
        console.log("¡Jaque Mate detectado! Finalizando el análisis de la partida.");
        break;
    }
}