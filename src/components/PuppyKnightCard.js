import KnightContext from "../KnightContext";
import { useContext } from "react";
import { v4 } from "uuid";
const PuppyKnightCard = ({ image, knightName, knightRole, boneCost }) => {
  const { addKnight } = useContext(KnightContext);
  const knightData = {};
  knightData.knightName = knightName;
  knightData.knightRole = knightRole;
  knightData.knightImage = image;
  knightData.boneCost = boneCost;

  return (
    <div className="w-1/3 font-MedievalSharp flex flex-col content-center justify-center bg-slate-300 shadow-slate-600 drop-shadow-xl border-black border-2 text-xl">
      <img src={image} alt="" />
      <p className="knight-name">{knightName}</p>
      <p className="knight-role">{`Role: ${knightRole}`}</p>
      <p className="Knight-Bones"> {`Bones: ${boneCost}`}</p>
      <button
        className="bg-yellow-400 text-black text-xl p-4 m-2 rounded-md hover:bg-yellow-300"
        onClick={() => {
          knightData.knightID = v4();
          addKnight(knightData);
        }}
      >
        Hire Knight
      </button>
    </div>
  );
};

export default PuppyKnightCard;
