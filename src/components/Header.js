import React, { useState } from "react";
import { useStateport } from "../provider/StateProvider";
const Header = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { languageKey, changeLanguage } = useStateport();

  return (
    <div className={`header${props.menuOpen ? " active" : ""}`}>
      <a className="header__logo" href="/">
        <img className="header__logo--image" src="/LOGO.png" alt="CAFECA" />
      </a>
      <div className="header__container">
        <div
          className={`header__dropdown${openDropdown ? " active" : ""}`}
          onClick={() => {
            setOpenDropdown((prev) => !prev);
          }}
        >
          <img
            className="header__dropdown--icon"
            src={require("../assets/images/ios-world-outline@2x.png")}
            alt="CAFECA"
          />
          <ul className="header__dropdown--list">
            <li
              className={`header__dropdown--item${
                languageKey === "en_us" ? " selected" : ""
              }`}
              onClick={() => {
                changeLanguage("en_us");
                setOpenDropdown(false);
              }}
            >
              <h3 className="header-primary">EN</h3>
            </li>
            <li
              className={`header__dropdown--item${
                languageKey === "zh_tw" ? " selected" : ""
              }`}
              onClick={() => {
                changeLanguage("zh_tw");
                setOpenDropdown(false);
              }}
            >
              <h3 className="header-primary">中</h3>
            </li>
          </ul>
        </div>
        <button className="header__hambuger" onClick={props.toggleMenuHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
