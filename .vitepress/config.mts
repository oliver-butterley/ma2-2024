import { defineConfig } from "vitepress";
import mdImplicitFigures from "markdown-it-implicit-figures";
import mdSuperscript from "markdown-it-sup";
import MarkdownIt from "markdown-it";
import md from "markdown-it";
import mdContainer from "markdown-it-container";
import type { RenderRule } from "markdown-it/lib/renderer";

const courseParts = [
  "Mathematical reasoning",
  "Higher dimension",
  "Extrema",
  "Line integrals",
  "Multiple integrals",
  "Surface integrals",
];

const figuresSetup = {
  figcaption: "title",
};

const theoremSetup = function (md: MarkdownIt) {
  return {
    render: function (tokens, idx, _options, env) {
      const token = tokens[idx];
      const info = token.info.trim().slice("theorem".length).trim();
      const attrs = md.renderer.renderAttrs(token);
      const thmString = `Theorem ${info ? `(${info})` : ""}`;
      if (token.nesting === 1) {
        const title = md.renderInline(thmString, {
          references: env.references,
        });
        return `<div class="tip custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`;
      } else return `</div>\n`;
    },
  };
};

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
      md.use(mdImplicitFigures, figuresSetup)
        .use(mdSuperscript)
        .use(mdContainer, "theorem", theoremSetup(md));
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
