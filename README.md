# Luckgrid Turborepo UI Workspace Template

Use this template to start a turborepo workspace with a ready to go Next v15, React v19, and TailwindCSS v4 UI library.

## Roadmap

- App registry (and/or package) for common configs, utils, and assets to share between apps.
- Stories for UI components and primitives using storybook.
- Unit tests for UI components and primitives using vitest.
- Integration tests for apps and ui using playwright.

## Setup

### Knowledge Requirements

#### Package Management

Use corepack (recommended, but not required) to manage different pnpm versions. Follow the [installation instructions](https://pnpm.io/installation#using-corepack) in the pnpm docs to install the pnpm version that's set inside the root package.json file.

#### UI Dependencies

The ui package components are dependant on React and TailwindCSS, which were initially generated using Shadcn/UI. For more information, please reference the following docs:

- [Shadcn/UI Docs](https://ui.shadcn.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [React Docs](https://react.dev/learn)
- [React API](https://react.dev/reference/react)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation/using-postcss)
- [CVA Docs](https://cva.style/docs)

#### UI Animation Dependencies

The ui package includes additional tailwindcss plugins to enhance ux with motion animations and scroll intersection observers to control when animations should run.

- [TailwindCSS Animate Docs](https://github.com/Wombosvideo/tw-animate-css?tab=readme-ov-file#usage)
- [TailwindCSS Motion Animation Docs](https://docs.rombo.co/tailwind)
- [TailwindCSS Scroll Animation Docs](https://docs.rombo.co/tailwind/scroll-animations)

#### App Dependencies

All of the apps in this template are built with NextJS, which integrates well with the ui package. For more information, please refer to the [NextJS docs here](https://nextjs.org/docs).

## Docs

### Private Workspace

To create a private workspace from this template, follow the instructions below:

#### Cloning Repository

Clone the repository using SSH:

```bash
git clone git@github.com:luckgrid/lg-turbo-ui.git my-private-repo
cd my-private-repo
```

> Replace `my-private-repo` with the name of your workspace.

If you don't plan to ever sync your code with future changes, that's it. You may delete the `.git` folder to start with a fresh git history if you want.

If you do want to keep your code in sync with any future changes made to `lg-turbo-ui`, make sure you don't delete the `.git` folder. Don't make any changes to your cloned files just yet and follow these steps to setup an upstream workflow:

#### Adding Remotes

Add an upstream remote that's pointed to `lg-turbo-ui` using SSH:

```bash
git remote add upstream git@github.com:luckgrid/lg-turbo-ui.git
```

As long as you created your private git repo, you should be able to add an origin remote to it using SSH:

```bash
git remote add origin git@github.com:my-username/my-private-repo.git
```

#### Verifying Remotes

Check your remotes to ensure they're set correctly:

```bash
git remote -v
```

You should see something like:

```bash
origin    git@github.com:gh-username/my-private-repo.git (fetch)
origin    git@github.com:gh-username/my-private-repo.git (push)
upstream  git@github.com:luckgrid/lg-turbo-ui.git (fetch)
upstream  git@github.com:luckgrid/lg-turbo-ui.git (push)
```

> Your github username will show up instead of `gh-username` and `my-private-repo` will be replaced by whatever you named your github repository when you created it.

#### Upstream Workflow

- `main` - This will be your main branch where approved features and fixes should be merged from feature branches using pull requests.
- `origin` - This branch will be a mirror of the upstream `lg-turbo-ui`'s `main` branch. Use it to pull and review updates from the `main` branch of `lg-turbo-ui` before merging them into your own branches.

##### Adding Mirror Branch

You can create an `origin` branch by running the following command from your `main` branch:

```bash
git branch origin
```

##### Updating Mirror Branch

To keep the `origin` branch up-to-date with `lg-turbo-ui`, follow these steps:

###### Fetching Latest Changes from Upstream Remote

```bash
git fetch upstream
```

##### Updating Mirror Branch with Upstream Remote

Switch to the `origin` branch and merge the changes from `upstream/main`:

```bash
git checkout origin
git merge upstream/main
```

Resolve any merge conflicts as needed. This branch now reflects the latest state of the public repository.

#### Merging Updates into `main` or Feature Branches

After updating the `origin` branch, you can integrate the desired changes into your `main` branch (or any feature branches).

To prevent introducing breaking changes into your `main` branch, following a standard git feature branch workflow is recommended. Reference [this tutorial from Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for more information.

> The steps below will only explain how to merge `origin` into `main`, but this process should also apply to your feature branches.

##### Merging the Entire Update

```bash
git checkout main
git merge origin
```

##### Cherry-Picking Specific Commits

If you only need specific changes, cherry-pick the relevant commits from the `origin` branch:

```bash
git checkout main
git cherry-pick <commit-hash>
```

### Workflow Best Practices

- **Keep the Mirror Branch Clean:** Do not make project-specific changes directly on the `origin` branch. Use it solely to reflect upstream changes.
- **Update Regularly:** Frequently fetch and merge updates from the `lg-turbo-ui` repository into the `origin` branch to minimize large, complex merges later on.
- **Review Before Merging:** Always test and review the changes from the `origin` branch in a staging environment or feature branch before you merge them into the `main` branch.
- **Communication:** If you encounter any conflicts or have questions about merging upstream changes, please [start a discussion](https://github.com/luckgrid/lg-turbo-ui/discussions) or [post an issue](https://github.com/luckgrid/lg-turbo-ui/issues) on the `lg-turbo-ui` github.

---

### Adding UI Components

To add components to the ui, run the following command:

```bash
pnpm dlx shadcn@latest add button -c packages/ui
```

This will place the ui components in the `packages/ui/src/components` directory.

### Tailwind Styles

Your `main.css` is already set up to use the components from the `ui` package.

### Using Components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```

## Kudos

> Template was initialized from [Shadcn/UI Monorepo Template](https://github.com/shadcn-ui/ui/tree/main/templates/monorepo-next)
