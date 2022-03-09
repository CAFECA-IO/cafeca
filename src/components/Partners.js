import React from "react";
import { useTranslation } from "react-i18next";

const Partners = (props) => {
  const { t } = useTranslation();

  return (
    <div className="partners">
      <h2 className="partners__header header-primary header-primary--medium">
        {t("partners_header")}
      </h2>
    </div>
  );
};

export default Partners;
