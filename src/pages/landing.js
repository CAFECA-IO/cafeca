import React from "react";
import Data from "../components/Data";
import Features from "../components/Features";
import ContactForm from "../components/Form";
import Main from "../components/Main";
import Partners from "../components/Partners";
import Specialize from "../components/Specialize";

const Landing = (props) => {
  return (
    <div className="landing">
      <Main />
      <Features />
      <Specialize />
      <Data />
      <Partners/>
      <ContactForm />
    </div>
  );
};

export default Landing;
