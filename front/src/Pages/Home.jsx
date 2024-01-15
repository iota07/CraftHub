import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TitleH2 from "../Components/Title/TitleH2";
import Salutation from "../Components/Salutation/Salutation";

const Home = () => {
  return (
    <div className="home w-full h-screen bg-yellow text-blue pt-24 md:pt-36 pl-6 flex">
      <Salutation username="Marine" />
      <TitleH2 title="Trending Now" />
      <Navbar />
      <Posts image="../public/micro.jpg" title="" text="lorem epsum"/>
    </div>
  );
};

export default Home;
