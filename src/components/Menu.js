import React from "react";
import { useTranslation } from "react-i18next";
import packageJson from "../../package.json";

const Menu = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`menu${props.menuOpen ? " active" : ""}`}
      onClick={props.closeMenuHandler}
    >
      <div className="menu__container">
        <a className="menu__link" href="/about">
          <h3 className="menu__item header-secondary ">{t("about_us")}</h3>
        </a>
        <a className="menu__link" href="/products">
          <h3 className="menu__item header-secondary ">{t("products_introduction")}</h3>
        </a>
        <a className="menu__link" href="/">
          <h3 className="menu__item header-secondary ">{t("back_to_home")}</h3>
        </a>
      </div>
    </div>
  );
};

export default Menu;
