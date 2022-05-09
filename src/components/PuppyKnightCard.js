const PuppyKnightCard = ({ image, knightName, knightRole }) => {
  return (
    <div className="w-1/3 font-MedievalSharp flex flex-col content-center justify-center bg-slate-300 shadow-slate-600 drop-shadow-xl border-black border-2">
      <img src={image} alt="" />
      <p className="knight-name text-xl">{knightName}</p>
      <p className="knight-role text-xl">{`Role: ${knightRole}`}</p>
    </div>
  );
};

export default PuppyKnightCard;
