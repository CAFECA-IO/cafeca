import React from "react";
import { useTranslation } from "react-i18next";

export const Form = (props) => {
  const { t } = useTranslation();
  return (
    <form className="form">
      <div className="form__input-group">
        <input className="form__input" type="text" placeholder={t("name")} />
        <input className="form__input" type="text" placeholder={t("company")} />
      </div>
      <div className="form__input-group">
        <input className="form__input" type="email" placeholder={t("email")} />
      </div>
      <div className="form__input-group">
        <input className="form__input" type="number" placeholder={t("phone")} />
      </div>
      <div className="form__input-group form__checkboxs">
        <div className="form__checkbox-group">
          <input
            className="form__checkbox-controller"
            type="checkbox"
            id="tech"
          />
          <label className="form__label" for="tech">
            <div className="form__checkbox">
              <div></div>
            </div>
            <h5 className="header-secondary">{t("tech_question")}</h5>
          </label>
        </div>
        <div className="form__checkbox-group">
          <input
            className="form__checkbox-controller"
            type="checkbox"
            id="cooperate"
          />
          <label className="form__label" for="cooperate">
            <div className="form__checkbox">
              <div></div>
            </div>
            <h5 className="header-secondary">{t("cooperate_question")}</h5>
          </label>
        </div>
        <div className="form__checkbox-group">
          <input
            className="form__checkbox-controller"
            type="checkbox"
            id="price"
          />
          <label className="form__label" for="price">
            <div className="form__checkbox">
              <div></div>
            </div>
            <h5 className="header-secondary">{t("price_question")}</h5>
          </label>
        </div>
        <div className="form__checkbox-group">
          <input
            className="form__checkbox-controller"
            type="checkbox"
            id="other"
          />
          <label className="form__label" for="other">
            <div className="form__checkbox">
              <div></div>
            </div>
            <h5 className="header-secondary">{t("others_question")}</h5>
          </label>
        </div>
      </div>
      <div className="form__input-group">
        <textarea
          className="form__textarea"
          rows="5"
          placeholder={t("what_else")}
        ></textarea>
      </div>
      <button className="form__button button button--primary" href="/products">
        <h4 className="header-primary">{t("send")}</h4>
      </button>
    </form>
  );
};

const ContactForm = (props) => {
  const { t } = useTranslation();

  return (
    <div className="contact-form">
      <h2 className="contact-form__header header-primary header-primary--medium">
        {t("contact_us_en")}
      </h2>
      <div className="contact-form__container">
        <div className="contact-form__content">
          <div className="contact-form__image-box">
            {/* <img src={require("../assets/images/CAFECA.png")} alt="card" /> */}
          </div>
          <div className="contact-form__form-box">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
