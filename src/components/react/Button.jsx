import React from "react";
import "./Button.css";
import { tinaField } from "tinacms/dist/react";

export const Button = ({ className, button, ...rest }) => {
  return (
    <rough-hover data-type="box" data-on-scroll="true">
      <a {...rest} href={button.link} className={`button ${className || ''}`} data-tina-field={tinaField(button)}>
        <span>{button.label}</span>
      </a>
    </rough-hover>
  )
};