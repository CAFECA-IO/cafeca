import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useViewport } from "../provider/ViewportProvider";
import Dropdown from "./Dropdown";

const DesktopTabs = ({ feature, setFeature, features }) => {
  const { t } = useTranslation();
  return (
    <ul className="features__tabs">
      {features.map((key) => (
        <li
          className={`features__tab${feature === key ? " active" : ""}`}
          key={`tab--${key}`}
          onClick={() => setFeature(key)}
        >
          <h4 className="header-primary">{t(key)}</h4>
        </li>
      ))}
    </ul>
  );
};

const MobileTab = ({ feature, setFeature, features }) => {
  return (
    <Dropdown feature={feature} setFeature={setFeature} features={features} />
  );
};

const Tabs = ({ feature, setFeature }) => {
  const { width } = useViewport();
  const breakpoint = 740;
  const features = ["financial", "rent", "travel", "government", "others"];
  return width <= breakpoint ? (
    <MobileTab feature={feature} setFeature={setFeature} features={features} />
  ) : (
    <DesktopTabs
      feature={feature}
      setFeature={setFeature}
      features={features}
    />
  );
};

const Features = (props) => {
  const { t } = useTranslation();
  const [feature, setFeature] = useState("financial");
  const contents = {
    financial: {
      des: [
        "financial_description_1",
        "financial_description_2",
        "financial_description_3",
        "financial_description_4",
      ],
      img: "bank@2x.png",
    },
    rent: {
      des: [
        "rent_description_1",
        "rent_description_2",
        "rent_description_3",
        "rent_description_4",
      ],
      img: "renting@2x.png",
    },
    travel: {
      des: [
        "travel_description_1",
        "travel_description_2",
        "travel_description_3",
        "travel_description_4",
      ],
      img: "travel_@2x.png",
    },
    government: {
      des: [
        "travel_description_1",
        "travel_description_2",
        "travel_description_3",
        "travel_description_4",
      ],
      img: "gov@2x.png",
    },
  };
  return (
    <div className="features">
      <h2 className="features__header header-primary header-primary--medium">
        {t("what_can_we_do")}
      </h2>
      <Tabs feature={feature} setFeature={setFeature} />
      <div className="features__container">
        <ul className={`features__tab-contents ${feature}`}>
          {Object.keys(contents).map((key) => (
            <li
              className={`features__tab-content${
                feature === key ? " active" : ""
              }`}
              key={`tab-content-${key}`}
            >
              <ul className="features__content">
                {contents[key].des.map((d) => (
                  <li className="features__text" key={d}>
                    <div className="features__text--decoration"></div>
                    <h5 className="header-primary">{t(d)}</h5>
                  </li>
                ))}
              </ul>
              <div className="features__image">
                {/* <img
                  src={require("../assets/images/" + contents[key].img)}
                  alt="keys"
                /> */}
              </div>
            </li>
          ))}
          <li
            className={`features__tab-content${
              feature === "others" ? " active" : ""
            }`}
          >
            <div className="features__image">
              <img src={require("../assets/images/others@2x.png")} alt="keys" />
            </div>
            <div className="features__content-container">
              <ul className="features__content">
                {["others_description_1", "others_description_2"].map((key) => (
                  <li className="features__text" key={key}>
                    <h5 className="header-primary">{t(key)}</h5>
                  </li>
                ))}
              </ul>
              <a
                className="features__content-button button button--primary"
                href="/contact"
              >
                <h4 className="header-primary">{t("contact_us")}</h4>
              </a>
            </div>
          </li>
        </ul>
      </div>
      {feature !== "others" && (
        <a className="features__button button button--primary" href="/products">
          <h4 className="header-primary">{t("learn_more")}</h4>
        </a>
      )}
    </div>
  );
};

export default Features;
