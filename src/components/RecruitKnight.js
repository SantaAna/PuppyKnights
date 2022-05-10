import PuppyKnightCard from "./PuppyKnightCard";
import BigKnight from "../images/big-chonk-knight.jpg";

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
        />
        <PuppyKnightCard
          image={BigKnight}
          knightName="Heavy Knight"
          knightRole={"Tank"}
        />
        <PuppyKnightCard
          image={BigKnight}
          knightName="Heavy Knight"
          knightRole={"Tank"}
        />
      </div>
    </div>
  );
};

export default RecruitKnight;
