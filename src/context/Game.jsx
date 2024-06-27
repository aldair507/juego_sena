import React, { createContext, useState, useContext } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // Define your default settings object
  const defaultSettings = {
    nivel: 'normal',
    tiempoNormal: 3,
    tiempoVeterano: 2,
    tiempoDios: 1,
    duracionJuego: 30,
  };

  // State to hold settings, initialized with default values
  const [settings, setSettings] = useState(defaultSettings);

  // Log settings to console for debugging
  console.log('Contexto de settings:', settings);

  return (
    <GameContext.Provider value={{ settings, setSettings }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
