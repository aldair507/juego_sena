import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex flex-col items-center justify-center h-screen">
      <nav className="w-full p-4 bg-gray-800 text-white">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/game" className="text-blue-500 hover:underline">
              Iniciar Juego
            </Link>
          </li>
          <li>
            <Link to="/highscores" className="text-blue-500 hover:underline">
              Puntajes Altos
            </Link>
          </li>
          <li>
            <Link to="/config" className="text-blue-500 hover:underline">
              Configuración
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl mb-8">Strooper</h1>
      </div>
    </div>
  );
};

export default Home;
