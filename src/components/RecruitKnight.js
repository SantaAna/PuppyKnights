import PuppyKnightCard from "./PuppyKnightCard";
import BigKnight from "../images/big-chonk-knight.jpg";
import SwordsMan from "../images/Swordsman.jpg";
import Paladin from "../images/paladin.jpg";

const RecruitKnight = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-7">
      <h2 className="text-5xl font-MedievalSharp">
        Add knigths to your kennel
      </h2>
      <div className="card-container grid grid-cols-3 w-full justify-items-center mt-7">
        <PuppyKnightCard
          image={BigKnight}
          knightName="Heavy Knight"
          knightRole={"Tank"}
          boneCost={12}
        />
        <PuppyKnightCard
          image={SwordsMan}
          knightName="Blade Master"
          knightRole={"Damage"}
          boneCost={8}
        />
        <PuppyKnightCard
          image={Paladin}
          knightName="Paladin"
          knightRole={"Support"}
          boneCost={9}
        />
      </div>
    </div>
  );
};

export default RecruitKnight;
