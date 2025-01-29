import React from "react";
import { tinaField } from "tinacms/dist/react";

// Blocks
import { VideoHeroBlock01 } from "./VideoHeroBlock01";

// @todo: do we even want the map? Could just pass the block directly
const blockComponents = {
  VideoHeroBlock01: VideoHeroBlock01,
};

/**
 * Extracts the block class name from the typename.
 * Splits the typename string at "Blocks" and returns the part after it.
 *
 * @param {string} typename - The typename string to be processed.
 * @returns {string} - The extracted block class name.
 */
const getBlockComponent = (typename) => {
  const parts = typename.split("Blocks");
  return parts.length > 1 ? parts[1] : "";
};

export const Blocks = (props) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <section
                key={i}
                data-tina-field={tinaField(block)}
                className={`block ${getBlockComponent(block.__typename)}`}
              >
                <Block {...block} />
              </section>
            );
          })
        : null}
    </>
  );
};

const Block = (block) => {
  const blockClass = getBlockComponent(block.__typename);
  const Component = blockComponents[blockClass];
  if (Component) {
    return <Component data={block} />;
  }
  console.error("No matching component for:", block.__typename);
  return null;
};