import { Outlet } from "react-router-dom";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="home-container w-full h-full">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
