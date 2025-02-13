import React from "react";
import "./Button.css";

export const Button = ({ className, button, ...rest }) => {
  return (
    <rough-hover data-type="box" data-on-scroll="true">
      <a {...rest} href={button.link} className={`button ${className || ''}`}>
        <span>{button.label}</span>
      </a>
    </rough-hover>
  )
};