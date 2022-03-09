import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Data = (props) => {
  const { t } = useTranslation();
  return (
    <div className="data">
      <h2 className="specialize__header header-primary header-primary--medium">
        {t("specialize_header")}
      </h2>
      <div className="data__container">
        <div className="data__content">
          <div className="data__title">
            <h5 className="header-secondary header-secondary--white">
              {t("data_title_1")}
            </h5>
          </div>
          <div className="data__image-box"></div>
          {/* ++TODO*/}
          {/* https://react.i18next.com/latest/trans-component */}
          <div className="data__text">
            <h5 className="header-secondary header-secondary--white">
              {t("data_text_v1_1")}
            </h5>
            <p className="emphasize--primary">70</p>
            <h5 className="header-secondary header-secondary--white">
              {t("data_text_v1_2")}
            </h5>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <h5 className="header-secondary header-secondary--white">
              {t("data_title_2")}
            </h5>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p className="emphasize--primary">58.4</p>
            <h5 className="header-secondary header-secondary--white">
              {t("data_text_v2_1")}
            </h5>
          </div>
        </div>
        <div className="data__content">
          <div className="data__title">
            <h5 className="header-secondary header-secondary--white">
              {t("data_title_3")}
            </h5>
          </div>
          <div className="data__image-box"></div>
          <div className="data__text">
            <p className="emphasize--primary">6300</p>
            <h5 className="header-secondary header-secondary--white">
              {t("data_text_v3_1")}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
