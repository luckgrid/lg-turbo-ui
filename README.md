# Luckgrid Turborepo UI Workspace Template

Use this template to start a turborepo workspace with a ready to go Next v15, React v19, and TailwindCSS v4 UI library.

## Dev Backlog

### Setup Additional Workspaces

- Add configs workspace to contain eslint, typescript, prettier, etc
- Add services workspace to contain shared backend services and actions

### Improved Configs and Tasks

- Update incremental build processes to include next apps and config packages to output cache for types
- Separate eslint configs so they can be merged together (i.e. Next should not have React rules by default)
- Create package for turbo configs so apps and packages can reuse shared configs (i.e. some apps that use the same env variables would have the same tasks in their extended config)

### Setup CI/CD

- Add github configs for workflow and actions
- Setup lint, typecheck, format tasks to run in github, before merge to main (so server can avoid running them during build)

## Dev Roadmap

- App registry (and/or package) for common configs, utils, and assets to share between apps.
- Stories for UI components and primitives using storybook.
- Unit tests for UI components and primitives using vitest.
- Integration tests for apps and packages using playwright.

## Dev Setup

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

## Dev Workflow

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

To add a component to the ui, simply run this command:

```bash
pnpm ui:add
```

This calls a turborepo task which will run a script to add a component inside the ui package.

#### Specifying the app or package

To add components for a specific package or app, run the following command:

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

---

### Adding Environments

Manage your environment variables with `dotenvx`, the way you do this should be based on your specific use cases and preferred workflow. However, there are some recommendations when working with environments in turborepo.

The gist of it each app will contain it's own environments and turborepo will reference them as configured in the config's tasks. Make sure to set your variables in the `turbo.json` config as well as your app's `.env*` file.

If you prefer to have your environment files uncommited, make sure to update `.gitignore` to suit your preferences.

For details about managing environment variables inside a turborepo workspace, you can read the following resources:

- [Turborepo Environment Variables Best Practices](https://turbo.build/docs/crafting-your-repository/using-environment-variables#best-practices)
- [Turborepo Environment Variables Discussion](https://github.com/vercel/turborepo/discussions/9458)
- [Validating Environments in Apps](https://github.com/t3-oss/create-t3-turbo/issues/397#issuecomment-1630028405)
- [Shared Environment Variables/Keys and Namespaces](https://github.com/dotenvx/dotenvx/issues/557)

#### Setup for Rapid Prototyping

Setting up environments for rapid prototyping using shared environment variables (namespaces and/or values) can be done following these guidelines.

##### Apps control their own environments

Your apps should have their own env files, which will be set and referenced during it's build step. Environment variables may be shared between apps to reduce config overhead, but each app should still control it's own environment. This is not only recommended by turborepo, it also helps with scaling apps when their environments change during development of features and models.

For example, if you have two apps that both use airtable for storing newsletter subscriptions data, then it makes sense to configure the same environment variable for both apps. Since both apps are using the same variable properties, your airtable services can be contained inside a shared package that both apps can now call, each using their own environment variables. As long as the name of the airtable environment variables are the same, you can use the same private an public dotenvx keys to encrypt and decrypt the airtable api key for each app.

You can also reuse the same tokens and ids for both apps, they don't always have to have their own api keys. This can often reduce complexity and overhead and is specifically useful for protyping POCs and MVPs. Since ideas have not been market tested, it doesn't make sense for them to have unique keys for every service they use. Using the same table with a category field or a field to identify the app source by url or id might make more sense in this context.

Either way, since your apps have their own environment files, it's possible to scale them when needed.

##### Workflow for shared environment variables

1. Navigate inside `web` app's root dir `cd apps/web`
2. Run `pnpm env:encrypt` to encrypt secret keys inside `web` app's `.env` file
3. Copy `.env.keys` file generated in `web` app, and paste it inside `docs` app
4. Copy `DOTENV_PUBLIC_KEY` from `web` app's `.env` file, and paste it inside of `docs` app's `.env` file
5. Navigate inside `docs` app's roo dir `cd ../docs`
6. Run `pnpm env:encrypt` to encrypt secret keys inside `docs` app's `.env` file.

This is just a simple example of one workflow you can use. The way you manage your environment variables will differ based on your use cases.

> NOTE: Environment variables management workflow will be improved with scripts to automate manual copying of files and keys, including options to handle different use cases.

## Kudos

- [Shadcn/UI Monorepo Template](https://github.com/shadcn-ui/ui/tree/main/templates/monorepo-next) - Initialized from this template
- [Dotenvx Turborepo Example](https://github.com/dotenvx/examples/tree/main/monorepos/turborepo) - Environment tooling
- [Create t3 Turbo](https://github.com/t3-oss/create-t3-turbo) - Reference setup and configs for next apps, eslint, and tsconfig.
- [RT Stack](https://github.com/nktnet1/rt-stack) - Reference setup and configs for ui, eslint, and tsconfig.
- [ZT Stack](https://github.com/CarlosZiegler/zt-stack) - Reference setup and configs for auth and email providers.
