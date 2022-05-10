import KnightContext from "../KnightContext";
import { useContext } from "react";
const PuppyKnightCard = ({ image, knightName, knightRole }) => {
  const { addKnight } = useContext(KnightContext);
  const knightData = {};
  knightData.knightName = knightName;
  knightData.knightRole = knightRole;

  return (
    <div className="w-1/3 font-MedievalSharp flex flex-col content-center justify-center bg-slate-300 shadow-slate-600 drop-shadow-xl border-black border-2">
      <img src={image} alt="" />
      <p className="knight-name text-xl">{knightName}</p>
      <p className="knight-role text-xl">{`Role: ${knightRole}`}</p>
      <button
        className="bg-black text-zinc-200"
        onClick={() => {
          console.log("knight added")
          addKnight(knightData)}}
      >
        Hire Knight
      </button>
    </div>
  );
};

export default PuppyKnightCard;
