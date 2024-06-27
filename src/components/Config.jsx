import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameContext';

const GameConfig = () => {
  const { settings, setSettings } = useContext(GameContext);
  const [nivel, setNivel] = useState(settings.nivel);
  const [tiempoNormal, setTiempoNormal] = useState(settings.tiempoNormal);
  const [tiempoVeterano, setTiempoVeterano] = useState(settings.tiempoVeterano);
  const [tiempoDios, setTiempoDios] = useState(settings.tiempoDios);
  const [duracionJuego, setDuracionJuego] = useState(settings.duracionJuego);

  const handleSave = () => {
    setSettings({
      nivel,
      tiempoNormal,
      tiempoVeterano,
      tiempoDios,
      duracionJuego,
    });
  };

  return (
    <div className="config flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-3xl mb-4">Configuración del Juego</h2>
      <label className="block">
        Nivel:
        <select
          className="ml-2 border rounded p-2"
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="veterano">Veterano</option>
          <option value="dios">Dios</option>
        </select>
      </label>
      <label className="block">
        Tiempo Normal:
        <input
          type="number"
          className="ml-2 border rounded p-2"
          value={tiempoNormal}
          onChange={(e) => setTiempoNormal(e.target.value)}
        />
      </label>
      <label className="block">
        Tiempo Veterano:
        <input
          type="number"
          className="ml-2 border rounded p-2"
          value={tiempoVeterano}
          onChange={(e) => setTiempoVeterano(e.target.value)}
        />
      </label>
      <label className="block">
        Tiempo Dios:
        <input
          type="number"
          className="ml-2 border rounded p-2"
          value={tiempoDios}
          onChange={(e) => setTiempoDios(e.target.value)}
        />
      </label>
      <label className="block">
        Duración del Juego:
        <input
          type="number"
          className="ml-2 border rounded p-2"
          value={duracionJuego}
          onChange={(e) => setDuracionJuego(e.target.value)}
        />
      </label>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={handleSave}
      >
        Guardar
      </button>
    </div>
  );
};

export default GameConfig;
