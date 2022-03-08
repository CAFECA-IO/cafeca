import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

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

  const changeLanguage = useCallback(
    (key) => {
      setLanguageKey(key);
      i18n.changeLanguage(key);
    },
    [i18n]
  );

  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
