import React, { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

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
  const [triggered, setTriggered] = React.useState(false);
  const containerRef = useRef();
  const countryRef = useRef();
  const CAGRRef = useRef();
  const userRef = useRef();
  // const containerEl = document.querySelector(".data__container");
  // const countryEl = document.querySelector(".data__count--country");
  // const CAGREl = document.querySelector(".data__count--CAGR");
  // const userEl = document.querySelector(".data__count--user");

  const handleWindowScroll = useCallback(() => {
    var windowHeight = window.innerHeight;
    var elementTop = containerRef.current.getBoundingClientRect().top;
    var elementVisible = containerRef.current.clientHeight;
    if (elementTop < windowHeight - elementVisible) {
      // setTriggered(true);
      animateValue(countryRef.current, 0, 70, 500);
      animateValue(CAGRRef.current, 0, 54.8, 800, true);
      animateValue(userRef.current, 0, 6300, 1000);
    } else {
      // setTriggered(false);
    }
  }, [countryRef, CAGRRef, userRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [handleWindowScroll]);

  return (
    <div className="data">
      <h2 className="data__header header-primary header-primary--medium">
        {t("data_header")}
      </h2>
      {/* <div className="data__container"> */}
      <div
        className={`data__container${triggered ? " active" : ""}`}
        ref={containerRef}
      >
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">{t("data_title_1")}</p>
          </div>
          <div className="data__image-box"></div>
          {/* ++TODO*/}
          {/* https://react.i18next.com/latest/trans-component */}
          <div className="data__text">
            <p className="header-secondary">{t("data_text_1_1")}</p>
            <p
              className="data__count--country emphasize--primary"
              ref={countryRef}
            ></p>
            <p className="header-secondary">{t("data_text_1_2")}</p>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">{t("data_title_2")}</p>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p
              className="data__count--CAGR emphasize--primary"
              ref={CAGRRef}
            ></p>
            <p className="header-secondary">{t("data_text_2")}</p>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">{t("data_title_3")}</p>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p
              className="data__count--user emphasize--primary"
              ref={userRef}
            ></p>
            <p className="header-secondary">{t("data_text_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
