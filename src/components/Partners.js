import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Slider = ({
  className,
  children,
  childrenLength,
  currentIndex,
  clickRightHandler,
  clickLeftHandler,
}) => {
  return (
    <div className="slider">
      <div
        className={`slider__controllers${
          childrenLength <= 3 ? " disabled" : ""
        }`}
      >
        <button
          className="slider__btn slider__btn--left"
          onClick={clickLeftHandler}
          disabled={childrenLength < 3 || currentIndex === 0}
        >
          <div className="slider__btn-icon"></div>
        </button>
        <button
          className="slider__btn slider__btn--right"
          onClick={clickRightHandler}
          disabled={childrenLength < 3 || currentIndex === childrenLength - 1}
        >
          <div className="slider__btn-icon"></div>
        </button>
      </div>
      <div
        className={`slider__container${
          className ? " slider__container--" + className : ""
        }`}
      >
        <div className="slider__content">{children}</div>
      </div>
    </div>
  );
};

const partners = [
  "Logo01@2x.png",
  "isuncloud_W.png",
  "boltchain_logo_squre_W.png",
  "Logo02@2x.png",
  "Logo03@2x.png",
];

const Partners = (props) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const sliderContent = window.document.querySelector(
    `.partners .slider .slider__content`
  );
  const clickRightHandler = () => {
    setCurrentIndex((prev) => {
      sliderContent.style.transform = `translateX(${
        -35 * (prev + 1 - centerIndex)
      }rem)`;
      return prev + 1;
    });
  };
  const clickLeftHandler = () => {
    setCurrentIndex((prev) => {
      sliderContent.style.transform = `translateX(${
        -35 * (prev - 1 - centerIndex)
      }rem)`;
      return prev - 1;
    });
  };
  useEffect(() => {
    if (partners) {
      setCenterIndex(Math.floor(partners?.length / 2));
      setCurrentIndex(Math.floor(partners?.length / 2));
    }
  }, []);

  return (
    <div className="partners">
      <h2 className="partners__header header-primary header-primary--medium">
        {t("partners_header")}
      </h2>
      <div className="partners__content">
        <Slider
          className="partners"
          childrenLength={partners ? partners?.length : 0}
          currentIndex={currentIndex}
          clickRightHandler={clickRightHandler}
          clickLeftHandler={clickLeftHandler}
        >
          {partners &&
            partners?.map((img) => (
              <div className="partners__image-box" key={`partners${img}`}>
                <img src={require("../assets/images/" + img)} alt={img} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
