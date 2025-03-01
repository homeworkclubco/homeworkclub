import React from 'react'
import './TextBlock.css'
import { getBlockName } from '../utils'
import type { Template } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { tinaField } from 'tinacms/dist/react'
import { d } from 'public/admin/assets/dialog.es-dffe62e7'

/* -------------------------------------------------------------------------- /
  TODO:
  
/ -------------------------------------------------------------------------- */



export const TextBlock = ({ data }) => {
  const blockName = getBlockName(data.__typename)

  return (
    <div
      className={`section block ${blockName}`}
      data-accent-color="accent"
      data-background-color="neutral-soft"
    >
      <div className="container">
        {data.blockTitle && (
          <header className={`${blockName}__header`}>
            {data.blockTitle && <h2 data-tina-field={tinaField(data.titleBlock)}>{data.blockTitle}</h2>}
          </header>
        )}
        {data.body && (
          <div className={`${blockName}__body prose`} data-tina-field={tinaField(data.body)}>
            <TinaMarkdown content={data.body} />
          </div>
        )}
      </div>
    </div>
  )
}

export const textBlockSchema: Template = {
  name: 'textBlock',
  label: 'Text content',
  ui: {
  },
  fields: [
    {
      name: 'blockTitle', // Name so it doesn't conflict with the required title field
      label: 'Block title',
      type: 'string',
    },
    {
      name: 'body',
      label: 'Body',
      type: 'rich-text',
      overrides: {
        toolbar: ['heading', 'bold', 'italic', 'link', 'ul', 'ol', 'image'],
      },
    },
  ],
}
