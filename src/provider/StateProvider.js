import React from "react";
import { useTranslation } from "react-i18next";

const stateContext = React.createContext({});

export const useStateport = () => {
  const { languageKey, changeLanguage } = React.useContext(stateContext);
  return { languageKey, changeLanguage };
};

const StateProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [languageKey, setLanguageKey] = React.useState("en_us");

  const changeLanguage = React.useCallback(
    (key) => {
      setLanguageKey(key);
      i18n.changeLanguage(key);
    },
    [i18n]
  );

  return (
    <stateContext.Provider value={{ languageKey, changeLanguage }}>
      {children}
    </stateContext.Provider>
  );
};

export default StateProvider;
