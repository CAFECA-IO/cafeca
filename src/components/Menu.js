import React from "react";
import { useTranslation } from "react-i18next";
import packageJson from "../../package.json";

const Menu = (props) => {
  const { t } = useTranslation();

  return (
    <ul className={`menu${props.menuOpen ? " active" : ""}`}>
      <li className="menu__item">
        <a className="menu__link" href="/about">
          {t("about-us")}
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/products">
          {t("products_introduction")}
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/team">
          {t("our_team")}
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="/contact">
          {t("back_to_home")}
        </a>
      </li>
      <div className="menu__text">
        v{packageJson.version}(Alpha) CEFECA © 2022
      </div>
    </ul>
  );
};

export default Menu;
