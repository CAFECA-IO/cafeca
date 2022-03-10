import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Features = (props) => {
  const { t } = useTranslation();
  const [feature, setFeature] = useState("financial");
  return (
    <div className="features">
      <h2 className="features__header header-primary header-primary--medium">
        {t("what_can_we_do")}
      </h2>
      <ul className="features__tabs">
        <li
          className={`features__tab${feature === "financial" ? " active" : ""}`}
          onClick={() => setFeature("financial")}
        >
          <h4 className="header-primary">{t("financial")}</h4>
        </li>
        <li
          className={`features__tab${feature === "rent" ? " active" : ""}`}
          onClick={() => setFeature("rent")}
        >
          <h4 className="header-primary">{t("rent")}</h4>
        </li>
        <li
          className={`features__tab${feature === "travel" ? " active" : ""}`}
          onClick={() => setFeature("travel")}
        >
          <h4 className="header-primary">{t("travel")}</h4>
        </li>
        <li
          className={`features__tab${
            feature === "government" ? " active" : ""
          }`}
          onClick={() => setFeature("government")}
        >
          <h4 className="header-primary">{t("government")}</h4>
        </li>
        <li
          className={`features__tab${feature === "others" ? " active" : ""}`}
          onClick={() => setFeature("others")}
        >
          <h4 className="header-primary">{t("others")}</h4>
        </li>
      </ul>
      <div className="features__container">
        <ul className={`features__tab-contents ${feature}`}>
          <li className={`features__tab-content${feature === "financial"? " active":""}`}>
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
          <li className={`features__tab-content${feature === "rent"? " active":""}`}>
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
          <li className={`features__tab-content${feature === "travel"? " active":""}`}>
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
          <li className={`features__tab-content${feature === "government"? " active":""}`}>
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
          <li className={`features__tab-content${feature === "others"? " active":""}`}>
            <div className="features__image">
              <img src={require("../assets/images/others@2x.png")} alt="keys" />
            </div>
            <div className="features__content-container">
              <ul className="features__content">
                <li className="features__text">
                  <h5 className="header-primary">
                    {t("others_description_1")}
                  </h5>
                </li>
                <li className="features__text">
                  <h5 className="header-primary">
                    {t("others_description_2")}
                  </h5>
                </li>
              </ul>
              <a
                className="features__button button button--primary"
                href="/products"
              >
                <h4 className="header-primary">{t("learn_more")}</h4>
              </a>
            </div>
          </li>
        </ul>
      </div>
      {feature !== "others" && (
        <a className="button button--primary" href="/products">
          <h4 className="header-primary">{t("learn_more")}</h4>
        </a>
      )}
    </div>
  );
};

export default Features;
