import { defineConfig } from "vitepress";
import implicitFigures from "markdown-it-implicit-figures";
import superscript from "markdown-it-sup";

const courseParts = [
  "Mathematical reasoning",
  "Higher dimension",
  "Extrema",
  "Line integrals",
  "Multiple integrals",
  "Surface integrals",
];

export default defineConfig({
  lang: "en-GB",
  title: "Mathematical Analysis 2",
  description: "Course material for Mathematical Analysis 2 (2023-24)",
  base: "/butterley/MA2/",

  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.png", type: "image/png" }],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: true,
    config: (md) => {
      md.use(implicitFigures, {
        figcaption: "title",
      }).use(superscript);
    },
  },

  themeConfig: {
    nav: [
      { text: "Overview", link: "/" },
      { text: "Lecture notes", link: "/pages/part1" },
    ],

    sidebar: [
      { text: "Overview", link: "/" },
      { text: "Evaluation", link: "/pages/evaluation" },
      { text: "Lecture diary", link: "/pages/diary" },
      {
        text: "Lecture notes",
        items: Array.from(Array(6), (_, n) => ({
          text: `${n + 1}. ${courseParts[n]}`,
          link: `/pages/part${n + 1}`,
        })),
        collapsed: false,
      },
      { text: "Mini-projects", link: "pages/project" },
    ],

    editLink: {
      pattern: "https://github.com/oliver-butterley/ma2-2023/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/oliver-butterley/ma2-2023/" },
    ],

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    footer: {
      message:
        'Released under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 License</a>',
      copyright:
        'Copyright © 2023 <a href="https://www.mat.uniroma2.it/butterley/">Oliver Butterley</a>',
    },
  },
});
