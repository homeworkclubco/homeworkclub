import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const Notation = ({ children }) => {
  return (
    <rough-notation data-type="highlight">
      {children}
    </rough-notation>
  )
}


export const Prose = ({ className = '', content, ...rest }) => { 
  return (
    <div className={`prose ${className}`} data-tina-field={tinaField(content)} {...rest}>
      <TinaMarkdown content={content} components={{Notation}} />
    </div>
  )
}