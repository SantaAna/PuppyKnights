import { createContext, useState } from "react";

const KnightContext = createContext();

export function KnightProvider({ children }) {
  const [knights, setKnights] = useState([]);
  const addKnight = (knight) => {
    setKnights((state) => [...state, knight]);
  };
  const removeKnight = (knightID) => {
    setKnights((state) => state.filter((x) => x.knightID !== knightID));
  };
  const totalBones = () => {
    return knights.reduce((prev, curr) => prev + curr.boneCost, 0);
  };
  return (
    <KnightContext.Provider
      value={{ knights, addKnight, removeKnight, totalBones }}
    >
      {children}
    </KnightContext.Provider>
  );
}

export default KnightContext;
