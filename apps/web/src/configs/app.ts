import { getBaseUrl } from "@/lib/helpers";

export const baseUrl = `${getBaseUrl()}/`;

export const metadata = {
  name: "LG Turbo UI",
  title: "Luckgrid's Turborepo Workspace with Next/React TailwindCSS UI",
  description:
    "A template for turborepo workspaces with a React and TailwindCSS UI for building Next.js Apps.",
  locale: "en-US",
  url: baseUrl,
};

export const colors = {
  background: "#ffffff",
  primary: "#000000",
};
