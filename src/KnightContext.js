import { createContext, useState } from "react";

const KnightContext = createContext();

export function KnightProvider({ children }) {
  const [knights, setKnights] = useState([]);
  const addKnight = (knight) => {
    setKnights((state) => [...state, knight]);
  };
  return (
    <KnightContext.Provider value={{ knights, addKnight }}>
      {children}
    </KnightContext.Provider>
  );
}

export default KnightContext;
