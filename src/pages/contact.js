import React from "react";
import { useTranslation } from "react-i18next";

const Contact = (props) => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h2 className="contact__header header-primary header-primary--medium">
        {t("contact_us_en")}
      </h2>
    </div>
  );
};

export default Contact;
