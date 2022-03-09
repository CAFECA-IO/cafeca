import React from "react";
import Data from "../components/Data";
import Features from "../components/Features";
import Main from "../components/Main";
import Specialize from "../components/Specialize";

const Landing = (props) => {
  return (
    <div className="landing">
      <Main />
      <Features />
      <Specialize />
      <Data />
    </div>
  );
};

export default Landing;
