import hope from "vuepress-theme-hope";
import sidebar from "./sidebar/sidebar";

export default hope.config({
  title: "燕归来兮",
  description: "凡心之所向,素履以往 生如逆旅,一苇以航!",
  dest: "./dist",
  locales: {
    "/": {
      lang: "zh-CN",
    },
    "/zh/": {
      title: "燕归来兮",
      description: "凡心之所向,素履以往 生如逆旅,一苇以航!",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",
    author: "归燕",
    repo: "https://github.com/taoes",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      { text: "读书笔记", link: "/home/", icon: "home" },
      { text: "岁月失语", icon: "creative", link: "/guide/" },
      { text: "关于我", link: "/about.html", icon: "note", },
    ],

    sidebar: sidebar,
    locales: {
      "/zh/": {
        nav: [
          { text: "主页", link: "/", icon: "home" },
          { text: "读书笔记", icon: "home", link: "/books/" },
          { text: "岁月失语", icon: "creative", link: "/guide/" },
          { text: "关于我", link: "/about.html", icon: "note", },
        ],
      },
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://zhihu.com/zhoutao825638",
        Baidu: "https://baidu.com",
        Github: "https://github.com/taoes",
      },
    },

    footer: {
      display: true,
      content: "Copyright © 2022 All rights reserved. | <a href='https://beian.miit.gov.cn/'> 皖ICP备17025334号</a>",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    cleanUrl: false,

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
