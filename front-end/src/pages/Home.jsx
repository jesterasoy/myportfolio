import React from "react";

//COMPONENTS
import FirstSection from "../components/FirstSection";
import SecSection from "../components/SecSection";

const Home = () => {
  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto">
        <FirstSection />
      </div>
      <SecSection />
    </>
  );
};

export default Home;
