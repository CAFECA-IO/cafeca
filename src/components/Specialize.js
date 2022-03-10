import React from "react";
import { useTranslation } from "react-i18next";

const Specialize = (props) => {
  const { t } = useTranslation();

  return (
    <div className="specialize">
      <h2 className="specialize__header header-primary header-primary--medium">
        {t("specialize_header")}
      </h2>
      <div className="specialize__content">
        <div className="specialize__container">
          <div className="specialize__card">
            <div className="specialize__card--title">
              <h2 className="header-secondary header-secondary--bold">
                {t("specialize_title_1")}
              </h2>
            </div>
            <ul className="specialize__card--content">
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_1")}
                </h5>
              </li>
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_2")}
                </h5>
              </li>
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_3")}
                </h5>
              </li>
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_4")}
                </h5>
              </li>
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_5")}
                </h5>
              </li>
            </ul>
          </div>
          <div className="specialize__card active">
            <div className="specialize__card--title">
              <h2 className="header-secondary header-secondary--bold">
                {t("specialize_title_2")}
              </h2>
            </div>
            <ul className="specialize__card--content">
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_1")}
                </h5>
              </li>
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_2")}
                </h5>
              </li>
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_3")}
                </h5>
              </li>
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_4")}
                </h5>
              </li>
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_5")}
                </h5>
              </li>
            </ul>
          </div>
          <div className="specialize__card">
            <div className="specialize__card--title">
              <h2 className="header-secondary header-secondary--bold">
                {t("specialize_title_3")}
              </h2>
            </div>
            <ul className="specialize__card--content">
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_1")}
                </h5>
              </li>
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_2")}
                </h5>
              </li>
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_3")}
                </h5>
              </li>
              <li className="specialize__item">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary header-secondary--grey">
                  {t("specialize_4")}
                </h5>
              </li>
              <li className="specialize__item checked">
                <div className="specialize__item--decoration"><div></div></div>
                <h5 className="header-secondary">
                  {t("specialize_5")}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
