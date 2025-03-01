import React from "react";
import "./PortfolioListBlock.css";
import "@styles/components/polaroidList.css";
import { getBlockName } from "../utils";
import { Actions, actionsSchema } from "./parts/Actions";
import { tinaField } from "tinacms/dist/react";


export const PortfolioListBlock = ({ data }) => {
  const blockName = getBlockName(data.__typename);

  return (
    <div
      className={`section block ${blockName}`}
      data-accent-color="accent"
      data-background-color="neutral-soft"
    >
      <div className="container" data-center-content>
        {data.title && (
          <rough-notation data-color="var(--accent-600)">
            <h2 className="blockTitle" data-tina-field={tinaField(data.title)}>{data.title}</h2>
          </rough-notation>
        )}

        {data.projects && (
          <ul className="polaroidList">
            {data.projects.map((project) => (
              <li className="polaroidList__item" data-tina-field={tinaField(project)} key={project.project.id}>
                <a href={`/work/${project.project._sys.filename}/`} className="polaroid">
                  <div className="polaroid__inner">
                    <div className="polaroid__imageWrapper">
                      <img
                        width={690}
                        height={690}
                        src={
                          project.project.mainImage ? project.project.mainImage : 'https://via.placeholder.com/690'
                        }
                        alt={project.project.mainImageAlt ? project.project.mainImageAlt : ''}
                        className="polaroid__image"
                      />
                    </div>
                    <div className="polaroid__body">
                      <h3 className="polaroid__title">{project.project.title}</h3>
                      <p className="polaroid__subtitle">{project.project.subtitle}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        <Actions actions={data.actions} />
      </div>
    </div>
  )
};

const projectReferenceField = {
  type: 'object',
  name: 'projects',
  label: 'Projects',
  list: true,
  ui: {
    itemProps: (item) => ({ label: item.project.replace("src/content/work/", "").replace(".mdx","") }),
  },
  fields: [
    {
      label: 'Project',
      name: 'project',
      type: 'reference',
      ui: {
        
        optionComponent: (props, _internalSys) => {
          return (
            <div>
              <p className="font-bold">{props.title}</p>
              <p>{props.subtitle}</p>
            </div>
          )
        },
      },
      collections: ['project'],
    },
  ],
}

export const portfolioListBlockSchema = {
  name: 'portfolioListBlock',
  label: 'Portfolio List',
  ui: {},
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true,
    },
    projectReferenceField,
    
    actionsSchema,
  ],
}
