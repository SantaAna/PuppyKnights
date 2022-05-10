const KennelCard = ({ knight, removeOnClick }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 ">
      <img src={knight.knightImage} alt="" className="h-48 w-48" />
      <div className="flex flex-col text-xl font-MedievalSharp">
        <p className="underline">{knight.knightName}</p>
        <p>{`Role: ${knight.knightRole}`}</p>
        <p>{`Bones: ${knight.boneCost}`} </p>
      </div>
      <button
        onClick={removeOnClick}
        className="bg-red-600 text-black text-xl p-4 m-2 rounded-md hover:bg-red-400"
      >
        Disband Knight
      </button>
    </div>
  );
};

export default KennelCard;
