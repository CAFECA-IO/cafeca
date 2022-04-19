import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };
  const toggleMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`layout${menuOpen ? " active" : ""}`}>
      <div className="layout__bg">
        <div className="layout__background layout__background--1"></div>
        <div className="layout__background layout__background--2"></div>
        <div className="layout__background layout__background--3"></div>
        <div className="layout__bg-img layout__bg-img--star"></div>
        <div className="layout__bg-img layout__bg-img--earth"></div>
      </div>
      <div className="layout__content">{children}</div>
      <Footer />
      <div className="layout__backdrop" onClick={closeMenuHandler}></div>
      <Menu menuOpen={menuOpen} closeMenuHandler={closeMenuHandler} />
      <Header menuOpen={menuOpen} toggleMenuHandler={toggleMenuHandler} />
    </div>
  );
};

export default Layout;
