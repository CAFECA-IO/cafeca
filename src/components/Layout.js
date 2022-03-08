import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
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
      <Menu menuOpen={menuOpen} closeMenuHandler={closeMenuHandler} />
      <div className="layout__content">{children}</div>
      <div className="layout__backdrop" onClick={closeMenuHandler}></div>
      <Header menuOpen={menuOpen} toggleMenuHandler={toggleMenuHandler} />
    </div>
  );
};

export default Layout;
