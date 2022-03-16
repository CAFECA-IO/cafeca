import React from "react";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__title">
            <h5 className="header-primary">{t("contact_us_en")}</h5>
          </div>
          <ul className="footer__infos">
            <li className="footer__info">
              <h5 className="header-primary">+886 02-27001979</h5>
            </li>
            <li className="footer__info">
              <h5 className="header-primary">contact@cafeca.io</h5>
            </li>
            <li className="footer__info">
              <h5 className="header-primary">{t("contact_info")}</h5>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__title">
            <h5 className="header-primary">{t("service")}</h5>
          </div>
          <ul className="footer__infos">
            <li className="footer__info">
              <h5 className="header-primary">{t("product_info")}</h5>
            </li>
            <li className="footer__info">
              <h5 className="header-primary">{t("become_partner")}</h5>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__title">
            <h5 className="header-primary">{t("info")}</h5>
          </div>
          <ul className="footer__infos">
            <li className="footer__info">
              <h5 className="header-primary">{t("about_us")}</h5>
            </li>
            <li className="footer__info">
              <h5 className="header-primary">{t("our_team")}</h5>
            </li>
            <li className="footer__info">
              <h5 className="header-primary">{t("contact_us")}</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
      <h6 className="header-secondary">@ CAFECA 2022</h6>
      </div>
    </footer>
  );
};

export default Footer;
