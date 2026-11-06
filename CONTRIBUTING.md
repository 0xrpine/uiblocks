# Contributing to UIblocks

Thanks for wanting to contribute. This guide is being completed alongside the first block batch; the principles below are already binding.

## Principles

- **MIT everything.** Any block you contribute is MIT, no strings.
- **TypeScript strict + Tailwind.** Blocks are plain source code, no runtime dependency.
- **Radix UI primitives** for anything interactive, so accessibility is real and not an afterthought.
- **Every block ships with a live demo and a playground** (controls that tune the block live).
- **The visual QA gate must pass before merge.** The pipeline renders and screenshots every demo against a baseline; changes that alter the output ship with a justified baseline update.
- **Follow the block structure.** One folder per block with the component, its demo and its meta; the registry build generates the manifests from it.

## First full guide

The complete guide (design tokens, naming, block anatomy, review process) lands with the first public batch. Until then, open an issue before writing code so we can align on the block.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](./LICENSE).
