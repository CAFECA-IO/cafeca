import React from "react";
import { useTranslation } from "react-i18next";
const About = (props) => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content about__content--image">
          <div className="about__image"></div>
        </div>
        <div className="about__content about__content--description">
          <h2 className="about__header header-primary header-primary--medium">
            {t("about_us_en")}
          </h2>
          <p className="header-secondary about__text">
            {t("about_us_introducion")}
          </p>
          <ul className="about__services">
            <p className="about__services-title header-secondary">
              {t("about_us_services")}
            </p>
            <li className="about__service">
              <a
                className="about__link"
                href="https://tidebit.com"
                target="_blank"
                rel="noreferrer"
              >
                <p className="header-secondary"> https://tidebit.com</p>
              </a>
              <p className="header-secondary about__text">
                {t("about_us_service_1")}
              </p>
            </li>
            <li className="about__service">
              <a
                className="about__link"
                href="https://boltchain.io"
                target="_blank"
                rel="noreferrer"
              >
                <p className="header-secondary"> https://boltchain.io</p>
              </a>
              <p className="header-secondary about__text">
                {t("about_us_service_2")}
              </p>
            </li>
            <li className="about__service">
              <a
                className="about__link"
                href="https://swap.tidebit.network"
                target="_blank"
                rel="noreferrer"
              >
                <p className="header-secondary">
                  https://swap.tidebit.network
                </p>
              </a>
              <p className="header-secondary about__text">
                {t("about_us_service_3")}
              </p>
            </li>
          </ul>
          <a className="about__button button button--primary" href="/">
            <h4 className="header-primary">{t("back")}</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
