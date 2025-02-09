import React from 'react'
import ReactIcon from './icon'
import './IconLink.css'

type LinkProps = {
  title: string
  link: string
  icon: string
}
function IconLink({ title, link, icon }: LinkProps) {
  return (
    <a
      className="iconLink"
      href={link}
      target="_blank"
      aria-label={`Go to ${title}`}
    >
      <span className="sr-only">{title}</span>
      <ReactIcon iconName={icon} />
    </a>
  )
}

export default IconLink
