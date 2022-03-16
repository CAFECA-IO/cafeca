import React from "react";
import { useTranslation } from "react-i18next";

const Products = (props) => {
  const { t } = useTranslation();
  return (
    <div className="products">
      <div className="products__container">
        <div className="products__intro">
          <div className="products__intro-image">
            <div className="products__intro-image products__intro-image--circle"></div>
            <div className="products__intro-image products__intro-image--card"></div>
          </div>
          <div className="products__intro-content">
            <h1 className="products__intro-header header-primary">CAFECA</h1>
            <h5 className="products__intro-description header-secondary">
              {t("product_introducion")}
            </h5>
            <button className="products__intro-button button buttom--icon"></button>
          </div>
        </div>
        <div className="products__finger">
          <div className="products__finger-image">
            <div className="products__finger-image products__finger-image--background"></div>
            <div className="products__finger-image products__finger-image--card"></div>
            <div className="products__finger-image products__finger-image--fingerprint"></div>
          </div>
          <div className="products__finger-content">
            <h3 className="products__finger-header header-secondary">
              {t("product_title_1")}
            </h3>
            <h5 className="products__finger-description header-secondary">
              {t("product_description_1-1")}
            </h5>
            <h5 className="products__finger-description header-secondary">
              {t("product_description_1-2")}
            </h5>
          </div>
        </div>
        <div className="products__offline">
          <div className="products__offline-image">
            <div className="products__offline-image products__offline-image--cloud"></div>
            <div className="products__offline-image products__offline-image--card"></div>
            <div className="products__offline-image products__offline-image--plus"></div>
          </div>
          <div className="products__offline-content">
            <h3 className="products__offline-header header-secondary">
              {t("product_title_2")}
            </h3>
            <h5 className="products__offline-description header-secondary">
              {t("product_description_2-1")}
            </h5>
            <h5 className="products__offline-description header-secondary">
              {t("product_description_2-2")}
            </h5>
          </div>
          <div className="products__device">
            <div className="products__device-image">
              <div className="products__device-image products__device-image--cloud"></div>
              <div className="products__device-image products__device-image--card"></div>
              <div className="products__device-image products__device-image--plus"></div>
            </div>
            <div className="products__device-content">
              <h3 className="products__device-header header-secondary">
                {t("product_title_3")}
              </h3>
              <h5 className="products__device-description header-secondary">
                {t("product_description_3-1")}
              </h5>
              <h5 className="products__device-description header-secondary">
                {t("product_description_3-2")}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
