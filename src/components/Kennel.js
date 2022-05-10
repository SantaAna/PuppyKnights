import KnightContext from "../KnightContext";
import KennelCard from "./KennelCard";
import { useContext } from "react";
const Kennel = () => {
  const { removeKnight, knights, totalBones } = useContext(KnightContext);
  const knightCards = knights.map((knight) => {
    const removeOnClick = () => {
      removeKnight(knight.knightID);
    };
    return <KennelCard knight={knight} removeOnClick={removeOnClick} />;
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center mt-7 mb-7">
        <h2 className="text-4xl font-MedievalSharp">Manage your kennel</h2>
      </div>
      <div className="flex flex-row items-center justify-center mt-2 mb-7">
        <h2 className="text-4xl font-MedievalSharp">{`Total bones owed: ${totalBones()}`}</h2>
      </div>
      {knightCards}
    </div>
  );
};

export default Kennel;
