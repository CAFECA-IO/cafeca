import { useTranslation } from "react-i18next";
import React from "react";

const Main = (props) => {
  const { t } = useTranslation();
  return (
    <main className="main">
      <div className="main__image">
        <div className="main__image--box"></div>
        <div className="main__image--box"></div>
        <div className="main__image--box"></div>
        <div className="main__image--box"></div>
        <div className="main__image--box"></div>
        <div className="main__image--box"></div>
        <div className="main__image--box"></div>
      </div>
      <div className="main__content">
        <h1 className="header-primary">{t("leading")}</h1>
        <h3 className="header-secondary">{t("leading_description")}</h3>
        <a className="main__button button--primary" href="/contact">
          <h4 className="header-primary">{t("get_started")}</h4>
        </a>
      </div>
    </main>
  );
};

export default Main;
