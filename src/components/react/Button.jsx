import React from 'react'
// import "./Button.css";
import { tinaField } from 'tinacms/dist/react'

export const Button = ({ className = '', button, ...rest }) => {
  return (
    <rough-notation data-type="box" data-on-scroll="true" class="button-wrapper">
      <a
        {...rest}
        href={button.link}
        className={`button ${className || ''}`}
        data-tina-field={tinaField(button)}
      >
        <span>{button.label}</span>
        {button.icon ? <ButtonIcon /> : null}
      </a>
    </rough-notation>
  )
}

const ButtonIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        d="M20.006 12.426c-5.56-.385-11.792-.156-16.828-.418m13.275-4.186c.928 1.089 1.867 1.952 4.299 4.039l-4.299-4.04zm.16.112c1.067 1.055 2.312 2.191 4.037 4.013l-4.037-4.013zm3.94 3.774c-1.33 1.215-2.329 2.295-4.122 3.986l4.122-3.986zm-.119.003c-.92.985-1.86 1.966-4.018 3.991l4.018-3.991zm.161.116c-6.417-.149-13.022.324-17.106.646l17.106-.646z"
        stroke="currentColor"
        // stroke-linejoin="round"
      ></path>
    </svg>
  )
}