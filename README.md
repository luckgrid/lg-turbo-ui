# Luckgrid Turborepo UI Workspace Template

Use this template to start a turborepo workspace with a ready to go Next v15, React v19, and TailwindCSS v4 UI library.

## Roadmap

- App registry (and/or package) for common configs, utils, and assets shared between apps.

## Docs

### Adding components

To add components to the ui, run the following command:

```bash
pnpm dlx shadcn@canary add button -c packages/ui
```

This will place the ui components in the `packages/ui/src/components` directory.

### Tailwind

Your `main.css` are already set up to use the components from the `ui` package.

### Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```

## Kudos

> Template was initialized from [Shadcn/ui Monorepo Template](https://github.com/shadcn-ui/ui/tree/canary/templates/monorepo-next)
