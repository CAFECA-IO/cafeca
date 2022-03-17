import React from "react";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__title">
            <p className="header-primary">{t("contact_us_en")}</p>
          </div>
          <ul className="footer__infos">
            <li className="footer__info">
              <p className="header-primary">+886 02-27001979</p>
            </li>
            <li className="footer__info">
              <p className="header-primary">contact@cafeca.io</p>
            </li>
            <li className="footer__info">
              <p className="header-primary">{t("contact_info")}</p>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__title">
            <p className="header-primary">{t("service")}</p>
          </div>
          <ul className="footer__infos">
            <li className="footer__info">
              <p className="header-primary">{t("product_info")}</p>
            </li>
            <li className="footer__info">
              <p className="header-primary">{t("become_partner")}</p>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__title">
            <p className="header-primary">{t("info")}</p>
          </div>
          <ul className="footer__infos">
            <li className="footer__info">
              <p className="header-primary">{t("about_us")}</p>
            </li>
            <li className="footer__info">
              <p className="header-primary">{t("our_team")}</p>
            </li>
            <li className="footer__info">
              <p className="header-primary">{t("contact_us")}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
      <p className="header-secondary">@ CAFECA 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
