import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deeper",
        href: "/deeper",
        items : [
          {
            title: "Even deeper",
            href: "/even-deeper",
          },
        ]
      },
    ],
  },
  {
    spacer: true,
  },
];