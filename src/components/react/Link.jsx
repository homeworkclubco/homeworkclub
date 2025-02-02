import React from "react";
import "./Link.css";

export const Link = ({ className, link, ...rest }) => {
  return (
    <a href={link.link} className={`link ${className || ''}`} data-type="scribble-circle">
      <span>{link.label}</span>
    </a>
  );
};