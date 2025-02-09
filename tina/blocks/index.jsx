import React from "react";
import { tinaField } from "tinacms/dist/react";
import { getBlockName } from "../utils";

// Blocks
import { VideoHeroBlock01 } from "./VideoHeroBlock01";
import { HcHeroBlock } from "./HcHeroBlock";
import { HcThreeColCardsBlock } from "./HcThreeColCardsBlock";
import { LogoGridBlock01 } from "./LogoGridBlock01";

// @todo: do we even want the map? Could just pass the block directly
const blockComponents = {
  // VideoHeroBlock01: VideoHeroBlock01,
  HcHeroBlock: HcHeroBlock,
  HcThreeColCardsBlock: HcThreeColCardsBlock,
  LogoGridBlock01: LogoGridBlock01,
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
  const blockClass = getBlockName(block.__typename);
  const Component = blockComponents[blockClass];
  if (Component) {
    return <Component data={block} />;
  }
  console.error("No matching component for:", block.__typename);
  return null;
};