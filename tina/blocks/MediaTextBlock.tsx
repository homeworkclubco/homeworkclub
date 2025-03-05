import React from 'react'
import './MediaTextBlock.css'
import { getBlockName } from '../utils'
import type { Template } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import { Image } from '@unpic/react'
import { Prose } from '@components/react/Prose'
import { Blocks } from '.'

/* -------------------------------------------------------------------------- /
  TODO:
  
/ -------------------------------------------------------------------------- */

export const MediaTextBlock = ({ data }) => {
  const blockName = getBlockName(data.__typename)

  return (
    <div
      className={`section block ${blockName}`}
      data-accent-color="accent"
      data-background-color="neutral-soft"
    >
      <div className="container">
        {data.image && (
          <div>
            <div className="polaroid has-no-text">
              <div className="polaroid__inner">
                <div className="polaroid__imageWrapper">
                  <img
                    width={690}
                    height={690}
                    src={data.image}
                    alt={data.imageAlt}
                    className="polaroid__image"
                    data-tina-field={tinaField(data.image)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {data.content && (
          <div>
            <Blocks blocks={data.content} />
          </div>
        )}
      </div>
    </div>
  )
}

export const MediaTextBlockContentHeading = ({ data }) => {
  return (
    <rough-notation
      data-type="highlight"
      data-color="var(--color-highlighter)"
      data-iterations="3"
      class="MediaTextBlockContentHeading"
    >
      <h2>{data.heading}</h2>
    </rough-notation>
  )
}

export const MediaTextBlockContentParagraphs = ({ data }) => {
  return <Prose content={data.paragraphs} className="MediaTextBlockContentParagraphs" />
}


export const mediaTextBlockSchema: Template = {
  name: 'mediaTextBlock',
  label: 'Media + Text content',
  ui: {},
  fields: [
    // {
    //   name: 'blockTitle', // Name so it doesn't conflict with the required title field
    //   label: 'Block title',
    //   type: 'string',
    // },
    {
      name: 'image',
      label: 'Image',
      type: 'image',
    },
    {
      name: 'imageAlt',
      label: 'Image Alt',
      type: 'string',
    },
    {
      name: "content",
      label: "Content",
      type: "object",
      list: true,
      templates: [{
        name: "Heading",
        label: "Heading",
        fields: [
          {
            name: "heading",
            label: "Heading",
            type: "string",
          },
        ]
      },
        {
          name: "Paragraphs",
          label: "Paragraphs",
          fields: [
            {
              name: "paragraphs",
              label: "Paragraphs",
              type: "rich-text",
            },
          ]
        }
      ]
    },
    {
      name: 'body',
      label: 'Body',
      type: 'rich-text',
      // overrides: {
      //   toolbar: ['heading', 'bold', 'italic', 'link', 'ul', 'ol', 'image'],
      // },
      templates: [
        {
          name: 'Notation',
          label: 'Notation',
          fields: [
            {
              name: 'element',
              label: 'Element',
              type: 'string',
              options: [
                { value: 'span', label: 'Span' },
                { value: 'p', label: 'Paragraph' },
                { value: 'h2', label: 'H2' },
                { value: 'h3', label: 'H3' },
                { value: 'h4', label: 'H4' },
                { value: 'h5', label: 'H5' },
                { value: 'h6', label: 'H6' },
              ]
            },
            {
              name: 'content',
              label: 'Content',
              type: 'string',
            },
          ],
        }
      ] 
    },
  ],
}
