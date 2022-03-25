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

  // const [observerObj, setObserverObj] = React.useState(null);
  // const containerEl = document.querySelector(".data__container");
  // const countryEl = document.querySelector(".data__count--country");
  // const CAGREl = document.querySelector(".data__count--CAGR");
  // const userEl = document.querySelector(".data__count--user");

  const handleWindowScroll = useCallback(() => {
    let windowHeight = window.innerHeight;
    let elementTop = containerRef.current.getBoundingClientRect().top;
    let elementVisible = containerRef.current.clientHeight;
    // if (!triggered) {
    if (
      elementTop < windowHeight - elementVisible / 2 &&
      elementTop > -elementVisible / 2
    ) {
      setTriggered(true);
      if (!triggered) {
        animateValue(countryRef.current, 0, 70, 500);
        animateValue(CAGRRef.current, 0, 54.8, 800, true);
        animateValue(userRef.current, 0, 6300, 1000);
      }
    } else {
      setTriggered(false);
    }
    // }
  }, [triggered, countryRef, CAGRRef, userRef]);

  // const addObserver = (element, options) => {
  //   let io_observer = new IntersectionObserver((entries, observer) => {
  //     const ratio = entries[0].intersectionRatio;
  //     const boundingRect = entries[0].boundingClientRect;
  //     const intersectionRect = entries[0].intersectionRect;
  //     if (ratio === 0) {
  //       console.log("outside");
  //     } else if (ratio < 1) {
  //       if (boundingRect.top < intersectionRect.top) {
  //         console.log("on the top");
  //       } else {
  //         console.log("on the bottom");
  //       }
  //     } else {
  //       console.log("inside");
  //     }
  //     setObserverObj({
  //       observer,
  //       entries,
  //     });
  //   }, options);
  //   io_observer.observe(element);
  // };

  useEffect(() => {
    // addObserver(countryRef?.current)
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
