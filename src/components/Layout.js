import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const languages = {
  en_us: "English",
  zh_hk: "繁體中文(香港)",
  jp: "日本語",
  zh_cn: "简体中文",
  zh_tw: "繁體中文",
};

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const [languageKey, setLanguageKey] = useState("en_us");
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = useCallback(
    (key) => {
      setLanguageKey(key);
      i18n.changeLanguage(key);
    },
    [i18n]
  );

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
