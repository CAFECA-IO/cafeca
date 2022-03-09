import React from "react";

const Header = (props) => {
  return (
    <div className={`header${props.menuOpen ? " active" : ""}`}>
      <a className="header__logo" href="/">
        <img className="header__logo--image" src="/LOGO.png" alt="CAFECA" />
      </a>
      <button className="header__hambuger" onClick={props.toggleMenuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Header;
