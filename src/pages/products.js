import React, { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Products = (props) => {
  const { t } = useTranslation();
  const [currentContent, setCurrentContent] = React.useState("intro");
  const introRef = useRef();
  const fingerRef = useRef();
  const offlineRef = useRef();
  const deviceRef = useRef();
  const traceRef = useRef();

  const handleWindowScroll = useCallback(() => {
    let windowHeight = window.innerHeight;
    let introTop = introRef.current.getBoundingClientRect().top;
    let fingerTop = fingerRef.current.getBoundingClientRect().top;
    let offlineTop = offlineRef.current.getBoundingClientRect().top;
    let deviceTop = deviceRef.current.getBoundingClientRect().top;
    let traceTop = traceRef.current.getBoundingClientRect().top;

    // console.log(offlineRef.current.getBoundingClientRect());
    // console.log(
    //   offlineTop < windowHeight - offlineRef.current?.clientHeight / 2
    // );
    // console.log(offlineTop > -offlineRef.current?.clientHeight / 2);
    if (
      introTop < windowHeight - introRef.current?.clientHeight / 2 &&
      introTop > -introRef.current?.clientHeight / 2
    ) {
      setCurrentContent("finger-back");
    }
    if (
      fingerTop < windowHeight - fingerRef.current?.clientHeight / 2 &&
      fingerTop > -fingerRef.current?.clientHeight / 2
    ) {
      setCurrentContent("finger");
    }
    if (
      offlineTop < windowHeight - offlineRef.current?.clientHeight / 2 &&
      offlineTop > -offlineRef.current?.clientHeight / 2
    ) {
      setCurrentContent("offline");
    }
    if (
      deviceTop < windowHeight - deviceRef.current?.clientHeight / 2 &&
      deviceTop > -deviceRef.current?.clientHeight / 2
    ) {
      setCurrentContent("device");
    }
    if (
      traceTop < windowHeight - traceRef.current?.clientHeight / 2 &&
      traceTop > -traceRef.current?.clientHeight / 2
    ) {
      setCurrentContent("trace");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [handleWindowScroll]);

  return (
    <div className={`products ${currentContent}`}>
      <div className="products__container">
        <div className="products__intro" ref={introRef}>
          <div className="products__intro-image">
            <div className="products__intro-image products__intro-image--circle"></div>
            <div className="products__intro-image products__intro-image--card">
              <div className="products__intro-image--card-inner">
                <div className="products__intro-image--card-front"></div>
                <div className="products__intro-image--card-back"></div>
              </div>
            </div>
          </div>
          <div className="products__intro-content">
            <h1 className="products__intro-header header-primary">CAFECA</h1>
            <p className="products__intro-description header-secondary">
              {t("product_introducion")}
            </p>
            <a href="/products/#finger">
              <button className="products__intro-button button buttom--icon"></button>
            </a>
          </div>
        </div>
        <div className="products__finger" id="finger" ref={fingerRef}>
          <div className="products__image-box">
            <div className="products__image products__finger-image--background"></div>
            <div className="products__image products__finger-image--card"></div>
            <div className="products__image products__finger-image--fingerprint"></div>
          </div>
          <div className="products__content">
            <h3 className="products__header header-secondary">
              {t("product_title_1")}
            </h3>
            <p className="products__description header-secondary">
              {t("product_description_1-1")}
            </p>
            <p className="products__description header-secondary">
              {t("product_description_1-2")}
            </p>
          </div>
        </div>
        <div className="products__line-image products__line-image--1"></div>
        <div className="products__offline" ref={offlineRef}>
          <div className="products__image-box">
            <div className="products__image products__offline-image--cloud"></div>
            <div className="products__image products__offline-image--card"></div>
            <div className="products__image products__offline-image--plus"></div>
          </div>
          <div className="products__content">
            <h3 className="products__header header-secondary">
              {t("product_title_2")}
            </h3>
            <p className="products__description header-secondary">
              {t("product_description_2-1")}
            </p>
            <p className="products__description header-secondary">
              {t("product_description_2-2")}
            </p>
            <p className="products__description header-secondary">
              {t("product_description_2-3")}
            </p>
          </div>
        </div>
        <div className="products__line-image products__line-image--2"></div>
        <div className="products__device" ref={deviceRef}>
          <div className="products__image-box">
            <div className="products__image products__device-image--devices"></div>
            <div className="products__image products__device-image--card"></div>
            <div className="products__image products__device-image--light"></div>
          </div>
          <div className="products__content">
            <h3 className="products__header header-secondary">
              {t("product_title_3")}
            </h3>
            <p className="products__description header-secondary">
              {t("product_description_3-1")}
            </p>
            <p className="products__description header-secondary">
              {t("product_description_3-2")}
            </p>
          </div>
        </div>
        <div className="products__line-image products__line-image--3"></div>
        <div className="products__trace" ref={traceRef}>
          <div className="products__image-box">
            <div className="products__image products__trace-image--spotlight"></div>
            <div className="products__image products__trace-image--card"></div>
            <div className="products__image products__trace-image--keyprint"></div>
          </div>
          <div className="products__content">
            <h3 className="products__header header-secondary">
              {t("product_title_4")}
            </h3>
            <p className="products__description header-secondary">
              {t("product_description_4-1")}
            </p>
            <p className="products__description header-secondary">
              {t("product_description_4-2")}
            </p>
          </div>
        </div>
        <div className="products__buttons">
          <a className="products__button button button--primary" href="/">
            <h4 className="header-primary">{t("get_started")}</h4>
          </a>
          <a className="products__button button button--primary" href="/">
            <h4 className="header-primary">{t("back")}</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
