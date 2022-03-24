import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export const Form = (props) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const technicalRef = useRef();
  const cooperationRef = useRef();
  const priceRef = useRef();
  const othersRef = useRef();
  const messageRef = useRef();
  const [isValid, setIsVaild] = useState(false);
  const { t } = useTranslation();

  const handleValidation = () => {
    if (emailRef.current?.value && messageRef.current?.value) {
      setIsVaild(true);
    } else {
      setIsVaild(false);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    let templateParams = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      messageType: `${technicalRef.current.checked ? "technical" : ""}${
        cooperationRef.current.checked ? ", cooperation" : ""
      }${priceRef.current.checked ? ", price" : ""}${
        othersRef.current.checked ? ", others" : ""
      }`,
      message: messageRef.current.value,
    };

    console.log(templateParams);

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     templateParams,
    //     process.env.REACT_APP_EMAILJS_USER_ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <form className="form" onSubmit={sendEmail}>
      <div className="form__input-group">
        <input
          className="form__input"
          type="text"
          placeholder={t("name")}
          ref={nameRef}
        />
        <input
          className="form__input"
          type="text"
          placeholder={t("company")}
          ref={companyRef}
        />
      </div>
      <div className="form__input-group">
        <input
          className="form__input"
          type="email"
          placeholder={t("email")}
          ref={emailRef}
          onInput={handleValidation}
        />
      </div>
      <div className="form__input-group">
        <input
          className="form__input"
          type="text"
          placeholder={t("phone")}
          ref={phoneRef}
        />
      </div>
      <div className="form__checkboxs">
        <div className="form__checkboxs-group">
          <div className="form__checkbox-group">
            <input
              className="form__checkbox-controller"
              type="checkbox"
              id="tech"
              name="technical"
              ref={technicalRef}
            />
            <label className="form__label" htmlFor="tech">
              <div className="form__checkbox">
                <div></div>
              </div>
              <p className="header-secondary">{t("tech_question")}</p>
            </label>
          </div>
          <div className="form__checkbox-group">
            <input
              className="form__checkbox-controller"
              type="checkbox"
              id="cooperate"
              name="cooperation"
              ref={cooperationRef}
            />
            <label className="form__label" htmlFor="cooperate">
              <div className="form__checkbox">
                <div></div>
              </div>
              <p className="header-secondary">{t("cooperate_question")}</p>
            </label>
          </div>
        </div>
        <div className="form__checkboxs-group">
          <div className="form__checkbox-group">
            <input
              className="form__checkbox-controller"
              type="checkbox"
              id="price"
              name="price"
              ref={priceRef}
            />
            <label className="form__label" htmlFor="price">
              <div className="form__checkbox">
                <div></div>
              </div>
              <p className="header-secondary">{t("price_question")}</p>
            </label>
          </div>
          <div className="form__checkbox-group">
            <input
              className="form__checkbox-controller"
              type="checkbox"
              id="other"
              name="others"
              ref={othersRef}
            />
            <label className="form__label" htmlFor="other">
              <div className="form__checkbox">
                <div></div>
              </div>
              <p className="header-secondary">{t("others_question")}</p>
            </label>
          </div>
        </div>
      </div>
      <div className="form__input-group">
        <textarea
          className="form__textarea"
          rows="5"
          placeholder={t("what_else")}
          ref={messageRef}
          onInput={handleValidation}
        ></textarea>
      </div>
      <button
        className="form__button button button--primary"
        disabled={!isValid}
      >
        <h4 className="header-primary">{t("send")}</h4>
      </button>
    </form>
  );
};

const ContactForm = (props) => {
  const { t } = useTranslation();
  const [triggered, setTriggered] = React.useState(false);
  const containerRef = useRef();

  const handleWindowScroll = useCallback(() => {
    var windowHeight = window.innerHeight;
    var elementTop = containerRef.current.getBoundingClientRect().top;
    // var elementVisible = containerRef.current.clientHeight;
    var elementVisible = 600;
    if (elementTop < windowHeight - elementVisible) {
      setTriggered(true);
    } else {
      setTriggered(false);
    }
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [handleWindowScroll]);

  return (
    <div
      className={`contact-form${triggered ? " active" : ""}`}
      id="contact-us"
      ref={containerRef}
    >
      <div className="contact-form__background contact-form__background--1"></div>
      <div className="contact-form__background contact-form__background--2"></div>
      <div className="contact-form__background contact-form__background--3"></div>
      <div className="contact-form__bg-img layout__bg-img--star"></div>
      <h2 className="contact-form__header header-primary header-primary--medium">
        {t("contact_us_en")}
      </h2>
      <div className="contact-form__container">
        <div className="contact-form__content">
          <div className="contact-form__image-box">
            {/* <div className="contact-form__image">
              <img src={require("../assets/images/CAFECA@2x.png")} alt="card" />
            </div> */}
            <div className="contact-form__image">
              <div className="contact-form__image--inner">
                <div className="contact-form__image--front"></div>
                <div className="contact-form__image--back"></div>
              </div>
            </div>
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
