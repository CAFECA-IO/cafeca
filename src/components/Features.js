import React from "react";
import { useTranslation } from "react-i18next";

const Features = (props) => {
  const { t } = useTranslation();
  return (
    <div className="features">
      <h2 className="features__header header-primary header-primary--medium">
        {t("what_can_we_do")}
      </h2>
      <ul className="features__tabs">
        <li className="features__tab active">
          <h4 className="header-primary">
            {t("financial")}
          </h4>
        </li>
        <li className="features__tab">
          <h4 className="header-primary">{t("rent")}</h4>
        </li>
        <li className="features__tab">
          <h4 className="header-primary">
            {t("travel")}
          </h4>
        </li>
        <li className="features__tab">
          <h4 className="header-primary">
            {t("government")}
          </h4>
        </li>
        <li className="features__tab">
          <h4 className="header-primary">
            {t("others")}
          </h4>
        </li>
      </ul>
      <div className="features__container">
        <ul className="features__tab-contents">
          <li className="features__tab-content">
            <ul className="features__content">
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("financial_description_1")}
                </h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("financial_description_2")}
                </h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("financial_description_3")}
                </h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("financial_description_4")}
                </h5>
              </li>
            </ul>
            <div className="features__image">
              <img src={require("../assets/images/bank@2x.png")} alt="keys" />
            </div>
          </li>
          <li className="features__tab-content">
            <ul className="features__content">
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("rent_description_1")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("rent_description_2")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("rent_description_3")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("rent_description_4")}</h5>
              </li>
            </ul>
            <div className="features__image">
              <img
                src={require("../assets/images/renting@2x.png")}
                alt="keys"
              />
            </div>
          </li>
          <li className="features__tab-content">
            <ul className="features__content">
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("travel_description_1")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("travel_description_2")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("travel_description_3")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("travel_description_4")}</h5>
              </li>
            </ul>
            <div className="features__image">
              <img
                src={require("../assets/images/travel_@2x.png")}
                alt="keys"
              />
            </div>
          </li>
          <li className="features__tab-content">
            <ul className="features__content">
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("government_description_1")}
                </h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("government_description_2")}
                </h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("government_description_3")}
                </h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">
                  {t("government_description_4")}
                </h5>
              </li>
            </ul>
            <div className="features__image">
              <img src={require("../assets/images/gov@2x.png")} alt="keys" />
            </div>
          </li>
          <li className="features__tab-content">
            <div className="features__image">
              <img src={require("../assets/images/others@2x.png")} alt="keys" />
            </div>
            <ul className="features__content">
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("others_description_1")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("others_description_2")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("others_description_3")}</h5>
              </li>
              <li className="features__text">
                <div className="features__text--decoration"></div>
                <h5 className="header-primary">{t("others_description_4")}</h5>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <a className="button button--primary" href="/products">
        <h4 className="header-primary">{t("learn_more")}</h4>
      </a>
    </div>
  );
};

export default Features;
