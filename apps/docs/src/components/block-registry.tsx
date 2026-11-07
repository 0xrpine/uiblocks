import type { ComponentType } from "react";
import { AlertDemo } from "../../../../src/registry/blocks/elements/alert/demo";
import { AlertPlayground } from "../../../../src/registry/blocks/elements/alert/playground";
import { AvatarDemo } from "../../../../src/registry/blocks/elements/avatar/demo";
import { AvatarPlayground } from "../../../../src/registry/blocks/elements/avatar/playground";
import { BadgeDemo } from "../../../../src/registry/blocks/elements/badge/demo";
import { BadgePlayground } from "../../../../src/registry/blocks/elements/badge/playground";
import { ButtonDemo } from "../../../../src/registry/blocks/elements/button/demo";
import { ButtonPlayground } from "../../../../src/registry/blocks/elements/button/playground";
import { CardDemo } from "../../../../src/registry/blocks/elements/card/demo";
import { CardPlayground } from "../../../../src/registry/blocks/elements/card/playground";
import { InputDemo } from "../../../../src/registry/blocks/elements/input/demo";
import { InputPlayground } from "../../../../src/registry/blocks/elements/input/playground";
import { ProgressDemo } from "../../../../src/registry/blocks/elements/progress/demo";
import { ProgressPlayground } from "../../../../src/registry/blocks/elements/progress/playground";
import { SkeletonDemo } from "../../../../src/registry/blocks/elements/skeleton/demo";
import { SkeletonPlayground } from "../../../../src/registry/blocks/elements/skeleton/playground";
import { TextareaDemo } from "../../../../src/registry/blocks/elements/textarea/demo";
import { TextareaPlayground } from "../../../../src/registry/blocks/elements/textarea/playground";

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
  badge: { Demo: BadgeDemo, Playground: BadgePlayground },
  card: { Demo: CardDemo, Playground: CardPlayground },
  skeleton: { Demo: SkeletonDemo, Playground: SkeletonPlayground },
  avatar: { Demo: AvatarDemo, Playground: AvatarPlayground },
  alert: { Demo: AlertDemo, Playground: AlertPlayground },
  input: { Demo: InputDemo, Playground: InputPlayground },
  textarea: { Demo: TextareaDemo, Playground: TextareaPlayground },
  progress: { Demo: ProgressDemo, Playground: ProgressPlayground },
};
