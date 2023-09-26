import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-GB",
  title: "Mathematical Analysis 2",
  description: "Course material for Mathematical Analysis 2 (2023-24)",
  base: '/butterley/ma2/',

  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.png", type: "image/png" }],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: true,
  },

  themeConfig: {
    nav: [
      { text: "Overview", link: "/" },
      { text: "Lecture notes", link: "/pages/part1" },
    ],

    sidebar: [
      { text: "Overview", link: "/" },
      { text: "Evaluation", link: "/pages/evaluation" },
      {
        text: "Lecture notes",
        items: Array.from(Array(6), (_,n) => ({text: `Part ${n+1}`, link: `pages/part${n+1}`})),
        collapsed: false
      },
      { text: "Mini-projects", link: "pages/project"},
    ],

    editLink: {
      pattern: 'https://github.com/oliver-butterley/ma2-web/edit/main/docs/:path',
      text: "Edit this page on GitHub"
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/oliver-butterley/ma2-web/" },
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }

  },
});

// items: [
//   { text: "1. Mathematical reasoning", link: "/pages/part1" },
//   {
//     text: "2. Differential calculus in higher dimension",
//     link: "/pages/part2",
//   },
//   { text: "3. Extrema and other applications", link: "/pages/part3" },
//   { text: "4. Curves and line integrals", link: "/pages/part4" },
//   { text: "5. Multiple integrals", link: "/pages/part5" },
//   { text: "6. Surfaces and surface integrals", link: "/pages/part6" },
// ],