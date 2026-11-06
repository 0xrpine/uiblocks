# UIblocks

Open source UI blocks for React. Copy, paste, ship.

Every block is free under MIT and ships as real source code you own: plain React and Tailwind you drop into your project and edit like any other file. No runtime dependency, no account, no paywall.

## Status

In active development. See the [roadmap](#roadmap) below and the site at [uiblocks.cloud](https://uiblocks.cloud).

## What you get

- **Interface elements**: buttons, inputs, cards, toggles, tabs, dialogs, sliders, toasts, tooltips, badges, avatars, dropdowns, accordions, tables
- **A live demo with controls for every block**, tunable before you copy
- **Real accessibility**: interactive primitives built on [Radix UI](https://www.radix-ui.com/), TypeScript strict
- **Install any of three ways**: shadcn CLI, jsrepo, or copy and paste from the docs

## How it works

Blocks are plain TypeScript + Tailwind source. A build step generates a registry of JSON manifests from that source, served from the docs site, so installation works with the tools you already use:

```sh
npx shadcn@latest add "https://uiblocks.cloud/r/<block>.json"
```

or with jsrepo:

```sh
npx jsrepo@latest add https://uiblocks.cloud/r/<block>
```

The code lands in your repo as files you own. There is no runtime package to version-lock and no breaking-change anxiety.

## Repository structure

```
apps/docs/            documentation site (Next.js): demos, playground, registry endpoint
src/registry/blocks/  block source of truth (TypeScript + Tailwind, one folder per block)
registry/             generated JSON manifests (build output, deployed with the site)
skill/                agent skill: teaches AI coding agents to find and install blocks
tests/visual/         visual QA: renders and screenshots every demo against a baseline
scripts/              registry build, filming and CI helpers
```

## Roadmap

1. **Foundation**: repo, CI, docs site online at uiblocks.cloud
2. **System**: design tokens, standard block structure with demo and playground
3. **First batch**: 20 interface elements, registry build, CLI installs verified
4. **Agents and community**: agent skill, visual QA gate on CI, contribution guide
5. **Launch**: landing page, v1.0 tag, announcement

## Contributing

Early and welcome. Principles while the full guide lands: MIT everything, Radix UI primitives under the hood, TypeScript strict + Tailwind, every block needs a live demo with controls, accessibility first, and the visual QA gate must pass before merge.

## License

[MIT](./LICENSE)
