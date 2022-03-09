import React from "react";
import Features from "../components/Features";
import Main from "../components/Main";
import Specialize from "../components/Specialize";

const Landing = (props) => {
  return (
    <div className="landing">
      <Main />
      <Features />
      <Specialize />
    </div>
  );
};

export default Landing;
