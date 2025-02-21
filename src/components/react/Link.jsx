import React from 'react'
import './Link.css'

export const Link = ({ className, link, ...rest }) => {
  return (
    <a href={link.link} className={`link ${className || ''}`}>
      <rough-hover>
        <span>
          {link.label}
          <img src="/images/rough-arrow-accent.svg" alt="" />
        </span>
      </rough-hover>
    </a>
  )
}
