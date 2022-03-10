import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Dropdown = ({ feature, setFeature, features }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__label-box">
        <div className="dropdown__label">
          <h4 className="header-secondary">{t(feature)}</h4>
        </div>
        <label
          className="dropdown__button"
          htmlFor="feature-dropdown"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="dropdown__button-icon"></div>
        </label>
      </div>
      <input
        className="dropdown__controller"
        type="checkbox"
        id="feature-dropdown"
        checked={open}
      />
      <div className="dropdown__container">
        {features
          .filter((key) => key !== feature)
          .map((key) => (
            <div
              className="dropdown__option"
              key={`dropdown--${key}`}
              onClick={() => {
                setFeature(key);
                setOpen(false);
              }}
            >
              <h4 className="header-secondary">{t(key)}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
