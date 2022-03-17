import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Data = (props) => {
  const { t } = useTranslation();
  return (
    <div className="data">
      <h2 className="data__header header-primary header-primary--medium">
        {t("data_header")}
      </h2>
      <div className="data__container">
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">
              {t("data_title_1")}
            </p>
          </div>
          <div className="data__image-box"></div>
          {/* ++TODO*/}
          {/* https://react.i18next.com/latest/trans-component */}
          <div className="data__text">
            <p className="header-secondary">
              {t("data_text_1_1")}
            </p>
            <p className="emphasize--primary">70</p>
            <p className="header-secondary">
              {t("data_text_1_2")}
            </p>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">
              {t("data_title_2")}
            </p>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p className="emphasize--primary">58.4</p>
            <p className="header-secondary">
              {t("data_text_2")}
            </p>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <p className="header-secondary">
              {t("data_title_3")}
            </p>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p className="emphasize--primary">6300</p>
            <p className="header-secondary">
              {t("data_text_3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
