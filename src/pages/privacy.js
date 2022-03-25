import React from "react";
import { useTranslation } from "react-i18next";

const Privacy = (props) => {
  const { t } = useTranslation();
  return (
    <div className="privacy">
      <div className="privacy__header">
        <h3 className="header-primary">{t("privacy_header")}</h3>
      </div>
      <div className="privacy__content">
        <p className="header-secondary">{t("privacy_info")}</p>
        <p className="header-secondary">{t("privacy_title_1")}</p>
        <p className="header-secondary">{t("privacy_content_1")}</p>
        <div className="privacy__paragraph">
          <div className="privacy__title">
            <p className="header-secondary">{t("privacy_title_2")}</p>
          </div>
          <div className="privacy__text">
            <p className="header-secondary">{t("privacy_content_2-1")}</p>
            <p className="header-secondary">{t("privacy_content_2-2")}</p>
          </div>
        </div>
        <p className="header-secondary">{t("privacy_title_3")}</p>
        <p className="header-secondary">{t("privacy_content_3")}</p>
        <p className="header-secondary">{t("privacy_title_4")}</p>
        <p className="header-secondary">{t("privacy_content_4")}</p>
        <p className="header-secondary">{t("privacy_title_5")}</p>
        <p className="header-secondary">{t("privacy_content_5-1")}</p>
        <p className="header-secondary">{t("privacy_content_5-2")}</p>
        <div className="privacy__text">
          <p className="header-secondary">{t("privacy_content_5-3")}</p>
          <p className="header-secondary">{t("privacy_content_5-4")}</p>
          <p className="header-secondary">{t("privacy_content_5-5")}</p>
          <p className="header-secondary">{t("privacy_content_5-6")}</p>
          <p className="header-secondary">{t("privacy_content_5-7")}</p>
          <p className="header-secondary">{t("privacy_content_5-8")}</p>
        </div>

        <p className="header-secondary">{t("privacy_title_6")}</p>
        <p className="header-secondary">{t("privacy_content_6")}</p>
        <p className="header-secondary">{t("privacy_title_7")}</p>
        <p className="header-secondary">{t("privacy_content_7")}</p>
        <p className="header-secondary">{t("privacy_title_8")}</p>
        <p className="header-secondary">{t("privacy_content_8")}</p>
      </div>
      <a className="privacy__button button button--primary" href="/">
        <h4 className="header-primary">{t("back")}</h4>
      </a>
    </div>
  );
};

export default Privacy;
