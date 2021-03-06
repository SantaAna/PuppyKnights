import KnightContext from "../KnightContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const { knights } = useContext(KnightContext);
  return (
    <div className="flex flex-row justify-between items-center bg-stone-800 text-zinc-100 h-1/5 font-MedievalSharp ">
      <h1 className="ml-7 text-5xl">Puppy Knights</h1>
      <div className="flex flex-row justify-center items-center gap-3 mr-7 text-2xl">
        <Link to="/"> Home</Link>
        <Link to="/recruit"> Recruit</Link>
        <Link to="/kennel"> Kennel</Link>
        <div className="number-wrapper bg-red-600 h-10 w-10 rounded-full flex justify-center items-center">
          <span>{knights.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
