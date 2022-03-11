import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const special = {
  specialize_title_1: {
    specialize_1: true,
    specialize_2: true,
    specialize_3: false,
    specialize_4: false,
    specialize_5: false,
  },
  specialize_title_2: {
    specialize_1: true,
    specialize_2: true,
    specialize_3: true,
    specialize_4: true,
    specialize_5: true,
  },
  specialize_title_3: {
    specialize_1: false,
    specialize_2: false,
    specialize_3: false,
    specialize_4: false,
    specialize_5: true,
  },
};

const SpecializeItem = ({ title, des }) => {
  const { t } = useTranslation();
  return (
    <li className={`specialize__item${special[title][des] ? "  checked" : ""}`}>
      <div className="specialize__item--decoration">
        <div></div>
      </div>
      <h5
        className={`header-secondary${
          special[title][des] ? " " : " header-secondary--grey"
        }`}
      >
        {t(des)}
      </h5>
    </li>
  );
};

const SpecializeCard = ({ title, index, currentIndex }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`specialize__card${currentIndex === index ? " active" : ""}`}
    >
      <div className="specialize__card--title">
        <h2 className="header-secondary header-secondary--bold">{t(title)}</h2>
      </div>
      <ul className="specialize__card--content">
        {Object.keys(special[title]).map((des) => (
          <SpecializeItem title={title} des={des} />
        ))}
      </ul>
    </div>
  );
};

const Specialize = (props) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);
  const clickRightHandler = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const clickLeftHandler = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  return (
    <div className="specialize">
      <h2 className="specialize__header header-primary header-primary--medium">
        {t("specialize_header")}
      </h2>
      <div className="specialize__content">
        <div className={`specialize__container specialize__container--${currentIndex}`}>
          {Object.keys(special).map((title, index) => (
            <SpecializeCard
              title={title}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>
        <div className="specialize__controllers">
          <button
            className="specialize__control-btn specialize__control-btn--left"
            onClick={clickLeftHandler}
            disabled={currentIndex === 0}
          >
            <div className="specialize__control-icon">
              <div className="specialize__icon specialize__icon--short"></div>
              <div className="specialize__icon specialize__icon--long"></div>
            </div>
            <div className="specialize__control-label">
              <h6 className="header-secondary">{t("specialize_title_1")}</h6>
            </div>
          </button>
          <button
            className="specialize__control-btn specialize__control-btn--right"
            onClick={clickRightHandler}
            disabled={currentIndex === 2}
          >
            <div className="specialize__control-label">
              <h6 className="header-secondary">{t("specialize_title_3")}</h6>
            </div>
            <div className="specialize__control-icon">
              <div className="specialize__icon specialize__icon--short"></div>
              <div className="specialize__icon specialize__icon--long"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
