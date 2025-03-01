import React from "react";
import { tinaField } from "tinacms/dist/react";
import { getBlockName } from "../utils";

// Blocks
import { VideoHeroBlock01 } from "./VideoHeroBlock01";
import { HcHeroBlock } from "./HcHeroBlock";
import { HcThreeColCardsBlock } from "./HcThreeColCardsBlock";
import { LogoGridBlock01 } from "./LogoGridBlock01";
import { PortfolioListBlock } from "./PortfolioListBlock";
import { MediaBlock } from "./MediaBlock";
import { TextBlock } from "./TextBlock";

// Block Components
const blockComponents = {
  // VideoHeroBlock01: VideoHeroBlock01,
  TextBlock,
  MediaBlock,
  HcHeroBlock,
  HcThreeColCardsBlock,
  LogoGridBlock01,
  PortfolioListBlock,
};

export const Blocks = (props) => {
  const blocks = props.blocks ? props.blocks : props.data;

  return (
    <section className="blocks">
      {blocks
        ? blocks.map(function (block, i) {
            return (
              <div
                key={i}
                data-tina-field={tinaField(block)}
                class="block"
              >
                <Block {...block} />
              </div>
            );
          })
        : (
          <section className="tina-warning blocks">
            <p>No blocks found</p>
          </section>
        )}
    </section>
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