import React, { createContext, useContext, useState } from 'react';

interface CalendlyContextType {
  calendlyToken: string | null;
  setCalendlyToken: (token: string) => void;
  clearCalendlyToken: () => void;
  refreshToken: string | null; // Adicionar refresh token
  setRefreshToken: (token: string) => void; // Adicionar função para definir refresh token
}

const CalendlyContext = createContext<CalendlyContextType | null>(null);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [calendlyToken, setCalendlyToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null); // Estado para refresh token

  const handleSetToken = (token: string) => {
    setCalendlyToken(token);
  };

  const handleClearToken = () => {
    setCalendlyToken(null);
    setRefreshToken(null); // Limpar refresh token ao fazer logout
  };

  const handleSetRefreshToken = (token: string) => {
    setRefreshToken(token);
  };

  return (
    <CalendlyContext.Provider
      value={{
        calendlyToken,
        setCalendlyToken: handleSetToken,
        clearCalendlyToken: handleClearToken,
        refreshToken,
        setRefreshToken: handleSetRefreshToken,
      }}
    >
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};