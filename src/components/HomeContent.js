import Attack from "../images/attack.jpg";

const HomeContent = () => {
  return (
    <div className="home-page-container flex flex-col justify-center items-center mt-7">
      <h2 className="text-5xl font-MedievalSharp">
        Your kingdom is under attack!
      </h2>
      <p className="text-2xl font-MedievalSharp mb-7">
        You must assemble a party of brave puppy knigts to defend your realm,
        but bravery isn't cheap - each knigts will expect payment in bones.
      </p>
      <img src={Attack} alt="" />
    </div>
  );
};

export default HomeContent;
