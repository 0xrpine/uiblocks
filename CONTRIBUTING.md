# Contributing to UIblocks

Thanks for wanting to contribute. This guide is being completed alongside the first block batch; the principles below are already binding.

## Principles

- **MIT everything.** Any block you contribute is MIT, no strings.
- **TypeScript strict + Tailwind.** Blocks are plain source code, no runtime dependency.
- **Radix UI primitives** for anything interactive, so accessibility is real and not an afterthought.
- **Every block ships with a live demo and a playground** (controls that tune the block live).
- **The visual QA gate must pass before merge.** The pipeline renders and screenshots every demo against a baseline; changes that alter the output ship with a justified baseline update.
- **Follow the block structure.** One folder per block with the component, its demo and its meta; the registry build generates the manifests from it.

## Repository layout

```
src/registry/blocks/<category>/<block>/   ← the shipped product
  block.json        metadata: name, title, description, dependencies, files, usage
  <block>.tsx       the component (this is what consumers install)
  demo.tsx          rendered in the Examples section
  playground.tsx    interactive playground controls
apps/docs/             documentation site (Next.js)
scripts/build-registry.mjs  generates /r/*.json + /r/registry.json manifests
tests/visual/          Playwright suite: rendering, computed styles, accessibility
```

## Class conventions

We do **not** ship tailwind-merge. When a caller passes `className`, it is appended to the
component's base classes. In practice:

- Sizing/spacing classes (`w-*`, `max-w-*`, `gap-*`) compose safely.
- The base classes are the documented defaults. If you need to override a conflicting
  utility (for example a radius), be aware that CSS order decides: prefer setting only
  non-conflicting utilities, or edit the copied source (you own it).

## First full guide

The complete guide (design tokens, naming, block anatomy, review process) lands with the first public batch. Until then, open an issue before writing code so we can align on the block.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](./LICENSE).
