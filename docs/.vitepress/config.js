import { defineConfig } from "vitepress";
export default defineConfig({
  title: "HapticUI",
  description: "HapticX UI library for vue.js",

  base: "/hapticui/",

  appearance: "dark",

  themeConfig: {
    logo: "/icon.svg",

    socialLinks: [
      { icon: "github", link: "https://github.com/HapticX/HapticUI" },
    ],

    nav: [
      { text: "Getting Started", link: "/guide/getting_started" },
      { text: "Roadmap", link: "/about/Roadmap" },
      { text: "Team", link: "/about/Team" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting_started" },
          { text: "Usage", link: "/guide/usage" },
        ],
      },
      {
        text: "About",
        items: [
          { text: "Roadmap", link: "/about/Roadmap" },
          { text: "Team", link: "/about/Team" },
        ],
      },
      {
        text: "Components",
        collapsed: false,
        items: [
          {text: "Avatar", link: "/guide/pages/Avatar"},
          { text: "Button", link: "/guide/pages/Button" },
          { text: "Tag", link: "/guide/pages/Tag" },
          { text: "Input", link: "/guide/pages/Input" },
          { text: "Select", link: "/guide/pages/Select" },
          { text: "Popup", link: "/guide/pages/Popup" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023, HapticX",
    },
  },
});
