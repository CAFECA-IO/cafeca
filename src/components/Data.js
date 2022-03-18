import { t } from "i18next";
import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

const animateValue = (element, start, end, duration, isDecimal) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerText = isDecimal
      ? (progress * (end - start) + start).toFixed(2)
      : Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const Data = (props) => {
  const { t } = useTranslation();
  const countryEl = document.querySelector(".data__count--country");
  const CAGREl = document.querySelector(".data__count--CAGR");
  const userEl = document.querySelector(".data__count--user");

  useEffect(() => {
    animateValue(countryEl, 0, 70, 5000);
    animateValue(CAGREl, 0, 54.8, 5000, true);
    animateValue(userEl, 0, 6300, 5000);
  }, [countryEl, CAGREl, userEl]);

  return (
    <div className="data">
      <h2 className="data__header header-primary header-primary--medium">
        {t("data_header")}
      </h2>
      <div className="data__container">
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">{t("data_title_1")}</p>
          </div>
          <div className="data__image-box"></div>
          {/* ++TODO*/}
          {/* https://react.i18next.com/latest/trans-component */}
          <div className="data__text">
            <p className="header-secondary">{t("data_text_1_1")}</p>
            <p className="data__count--country data__animation--country emphasize--primary"></p>
            <p className="header-secondary">{t("data_text_1_2")}</p>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">{t("data_title_2")}</p>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p className="data__count--CAGR data__animation--CAGR emphasize--primary"></p>
            <p className="header-secondary">{t("data_text_2")}</p>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">{t("data_title_3")}</p>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p className="data__count--user data__animation--user emphasize--primary"></p>
            <p className="header-secondary">{t("data_text_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
