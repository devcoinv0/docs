// @ts-nocheck
import { PageRoutes } from "@/lib/pageroutes";

export const Navigations = [
  {
    title: "Home",
    href: "https://start-near.vercel.app/",
    external: true,
  },
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
];

export const GitHubLink = {
  href: "https://github.com/simonbeirouti/red-near-fin",
};