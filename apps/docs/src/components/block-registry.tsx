import type { ComponentType } from "react";
import { ButtonDemo } from "../../../../src/registry/blocks/elements/button/demo";
import { ButtonPlayground } from "../../../../src/registry/blocks/elements/button/playground";

export interface BlockUi {
  Demo: ComponentType;
  Playground: ComponentType;
}

/**
 * Explicit map from block name to its demo and playground components.
 * New blocks add one line here; the docs page and home index pick up the meta
 * automatically from block.json.
 */
export const BLOCK_UI: Record<string, BlockUi> = {
  button: { Demo: ButtonDemo, Playground: ButtonPlayground },
};
