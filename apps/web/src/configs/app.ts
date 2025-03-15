import { getBaseUrl } from "@/lib/helpers";

export const baseUrl = `${getBaseUrl()}/`;

export const metadata = {
  name: "LG Turbo UI",
  title:
    "A fully-loaded monorepo workspace powered by Turbo, NextJS, React, & TailwindCSS, including a modern UI library integrated with Shadcn/UI & CVA Design System",
  description:
    "LG Turbo UI is a comprehensive monorepo workspace template that combines the power of Turborepo, Next.js, React, and TailwindCSS. It features a modern UI library built with Shadcn/UI components and implements the CVA Design System, providing everything you need to build scalable and beautiful web applications.",
  locale: "en-US",
  url: baseUrl,
  organization: {
    email: "admin@luckgrid.net",
    name: "Luckgrid",
    url: "https://luckgrid.net",
  },
};

export const colors = {
  background: "#ffffff",
  primary: "#000000",
};
