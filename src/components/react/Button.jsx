import React from "react";
import "./Button.css";

export const Button = ({ className, button, ...rest }) => {
  return (
    <a {...rest} href={button.link} className={`button ${className || ""}`}>
      <span>{button.label}</span>
    </a>
  )
};