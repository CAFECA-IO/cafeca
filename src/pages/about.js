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
          <h5 className="header-secondary about__text">
            {t("about_us_introducion")}
          </h5>
          <ul className="about__services">
            <h5 className="about__services-title header-secondary">
              {t("about_us_services")}
            </h5>
            <li className="about__service">
              <a
                className="about__link"
                href="https://tidebit.com"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="header-secondary"> https://tidebit.com</h5>
              </a>
              <h5 className="header-secondary about__text">
                {t("about_us_service_1")}
              </h5>
            </li>
            <li className="about__service">
              <a
                className="about__link"
                href="https://boltchain.io"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="header-secondary"> https://boltchain.io</h5>
              </a>
              <h5 className="header-secondary about__text">
                {t("about_us_service_2")}
              </h5>
            </li>
            <li className="about__service">
              <a
                className="about__link"
                href="https://swap.tidebit.network"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="header-secondary">
                  https://swap.tidebit.network
                </h5>
              </a>
              <h5 className="header-secondary about__text">
                {t("about_us_service_3")}
              </h5>
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
