import { getBaseUrl } from "@/lib/helpers";

export const baseUrl = `${getBaseUrl()}/`;

export const metadata = {
  name: "LG Turbo UI Docs",
  title:
    "Documentation for Luckgrid's Turborepo Workspace with Next/React TailwindCSS UI",
  description:
    "Documentation for a turborepo workspace template, with a React and TailwindCSS UI for building Next.js Apps.",
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
