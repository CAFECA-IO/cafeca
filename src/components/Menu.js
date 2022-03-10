import React from "react";
import { useTranslation } from "react-i18next";
import packageJson from "../../package.json";

const Menu = (props) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`menu${props.menuOpen ? " active" : ""}`}
      onClick={props.closeMenuHandler}
    >
      <div className="menu__container">
        {/* <li className="menu__item">
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
            {t("contact_us")}
          </a>
        </li> */}
        <li className="menu__item">
          <a className="menu__link" href="/">
            {t("back_to_home")}
          </a>
        </li>
      </div>
    </ul>
  );
};

export default Menu;
