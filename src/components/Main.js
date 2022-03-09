import { useTranslation } from "react-i18next";
import React from "react";

const Main = (props) => {
  const { t } = useTranslation();
  return (
    <main className="main">
      <div className="main__image">
        <div className="main__image--box">
          {/* <img src={require("../assets/images/keys.png")} alt="keys" /> */}
        </div>
        <div className="main__image--box">
          {/* <img src={require("../assets/images/coins.png")} alt="coins" /> */}
        </div>
        <div className="main__image--box">
          {/* <img src={require("../assets/images/tickets.png")} alt="tickets" /> */}
        </div>
        <div className="main__image--box">
          {/* <img src={require("../assets/images/keys.png")} alt="keys" /> */}
        </div>
        <div className="main__image--box">{/* <img src="" alt="" /> */}</div>

        <div className="main__image--box">{/* <img src="" alt="" /> */}</div>

        <div className="main__image--box">{/* <img src="" alt="" /> */}</div>
      </div>
      <div className="main__content">
        <h1 className="header--primary">{t("leading")}</h1>
        <h3 className="header--secondary">{t("leading_description")}</h3>
        <a className="main__button button--primary" href="/contact">
          <h4 className="header--primary">{t("get_started")}</h4>
        </a>
      </div>
    </main>
  );
};

export default Main;
