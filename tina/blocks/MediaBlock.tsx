import React from 'react'
import './MediaBlock.css'
import { getBlockName } from '../utils'
import type { Template } from 'tinacms'

/* -------------------------------------------------------------------------- /
  TODO:
  - Finish video implementation
  - Fix validation
  - add option for content width / to be inset
  - style tina-warning
/ -------------------------------------------------------------------------- */



export const MediaBlock = ({ data }) => {
  const blockName = getBlockName(data.__typename)

  return (
    <div
      className={`section block ${blockName}`}
      data-accent-color="accent"
      data-background-color="neutral-soft"
    >
      {data.type === 'image' ? (
        data.image ? (
          <img src={data.image} alt={data.alt} />
        ) : (
          <div className="tina-warning missing-image-warning">Please add an image in the CMS</div>
        )
      ) : (
          data.video ? (
            <video src={data.video} autoPlay loop muted />
          ) : (
            <div className="tina-warning missing-video-warning">Please add a video in the CMS</div>
        )
      )}
    </div>
  )
}

export const mediaBlockSchema: Template = {
  name: 'mediaBlock',
  label: 'Image / video',
  ui: {
    defaultItem: {
      type: 'image',
      image: '',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'type',
      label: 'Type',
      options: [{ value: 'image', label: 'Image'}, { value: 'video', label: 'Video' }],
      ui: {
        component: 'button-toggle',
      },
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
      ui: {
        validate: (value, data) => {
          if (data?.type == 'image' && !value) {
            return 'Please upload an image'
          }
        },
      },
    },
    {
      type: 'string',
      name: 'alt',
      label: 'Alt text',
      ui: {
        validate: (value, data) => {
          if (data?.type == 'image' && !value) {
            return 'Please enter alt text'
          }
        }
      },
    },
    {
      type: 'string',
      name: 'videoUrl',
      label: 'YouTube URL',
      ui: {
        validate: (value, data) => {
          if (data?.type == 'video' && !value) {
            return 'Please enter a YouTube URL'
          }
        },
      },
    },
  ],
}
