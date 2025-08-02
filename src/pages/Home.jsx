import React from "react";

//COMPONENTS
import FirstSection from "../components/FirstSection";
import SecSection from "../components/SecSection";
import ThirdSection from "../components/ThirdSection";
const Home = () => {
  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto">
        <FirstSection />
      </div>
      <SecSection />
      <ThirdSection />
    </>
  );
};

export default Home;
