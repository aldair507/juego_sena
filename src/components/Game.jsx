import React, { useEffect, useState } from "react";

const colores = [
  "amarillo",
  "azul",
  "naranja",
  "verde",
  "negro",
  "blanco",
  "rojo",
  "purpura",
];

const coloresNombre = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "gray",
  "white",
  "orange",
];

const Game = () => {
  const settings = {
    nivel: "normal",
    tiempoNormal: 3,
    tiempoVeterano: 2,
    tiempoDios: 1,
    duracionJuego: 30,
  };

  const [palabraActual, setPalabraActual] = useState("");
  const [colorActual, setColorActual] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(settings.duracionJuego || 30);
  const [reiniciarJuego, setReiniciarJuego] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!juegoTerminado) {
        setTiempoRestante((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [juegoTerminado]);

  useEffect(() => {
    if (tiempoRestante <= 0) {
      endGame();
    } else {
      showNextWord();
    }
  }, [tiempoRestante]);

  const showNextWord = () => {
    const wordIndex = Math.floor(Math.random() * colores.length);
    const colorIndex = Math.floor(Math.random() * coloresNombre.length);
    setPalabraActual(colores[wordIndex]);
    setColorActual(coloresNombre[colorIndex]);
  };

  const verificar = (correcto) => {
    if (!juegoTerminado && tiempoRestante > 0) {
      if (
        (correcto && palabraActual === colorActual) ||
        (!correcto && palabraActual !== colorActual)
      ) {
        setCorrectCount((prev) => prev + 1);
      }
      setTotalCount((prev) => prev + 1);
      showNextWord();
    }
  };

  const reiniciarJuegoFunc = () => {
    setCorrectCount(0);
    setTotalCount(0);
    setTiempoRestante(settings.duracionJuego || 30);
    setReiniciarJuego(false);
    setJuegoTerminado(false);
  };

  const endGame = () => {
    setJuegoTerminado(true);
    console.log("¡Juego terminado!");
  };

  if (!settings) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="game flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="text-3xl mb-8">Juego Strooper</h2>

      {!juegoTerminado && (
        <>
          <div
            className="word-display text-4xl mb-4 font-bold"
            style={{ color: colorActual }}
          >
            {palabraActual}
          </div>

          <div className="game-info mb-8">
            <p className="text-lg">Palabras correctas: {correctCount}</p>
            <p className="text-lg">Total palabras: {totalCount}</p>
            <p className="text-lg">Tiempo restante: {tiempoRestante} segundos</p>
          </div>

          <div className="game-controls">
            <button
              className="border-t-2 border-b-2 border-green-700 bg-green-900 text-white px-6 py-2 rounded mr-4"
              onClick={() => verificar(true)}
            >
              Correcto
            </button>
            <button
              className="border-t-2 border-b-2 border-red-700 bg-red-500 text-white px-6 py-2 rounded"
              onClick={() => verificar(false)}
            >
              Incorrecto
            </button>
          </div>
        </>
      )}

      {juegoTerminado && (
        <div className="game-info mt-8">
          <p className="text-2xl text-center">¡Juego terminado!</p>
          <p className="text-lg">Palabras correctas: {correctCount}</p>
          <p className="text-lg">Total palabras: {totalCount}</p>
        </div>
      )}

      <button
        className="bg-blue-700 text-white px-6 py-2 rounded mt-4"
        onClick={reiniciarJuegoFunc}
      >
        Volver a iniciar
      </button>
    </div>
  );
};

export default Game;
