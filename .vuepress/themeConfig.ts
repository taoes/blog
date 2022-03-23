import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from './sidebar'

export default defineThemeConfig({

  hostname: "https://www.zhoutao123.com",

  author: {
    name: "燕归来兮",
    url: "https://www.zhoutao123.com",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/taoes/blog",

  docsDir: "",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: {
    "/book/java/": [
      {
        text: "Java8新特性",
        icon: "creative",
        collapsable: true,
        children: [
          "java_method_type",
          "java_io_connect",
          "know_java_from_bytecode"
        ],
      },
    ],
    "/book/store/": [
      {
        text: "数据存储",
        icon: "creative",
        collapsable: true,
        children: ["test", "test2"],
      },
      {
        text: "弹性搜索",
        icon: "palette",
        children: [ "es"],
      },
    ]
    ,
    "/book/db/": [
      {
        text: "MySQL",
        icon: "creative",
        collapsable: true,
        children: [ "innodb_transaction"],
      },
      {
        text: "Oracle",
        icon: "palette",
        collapsable: true,
        children: []
      },
    ],
  },

  footer: "Copyright © 2022 All rights reserved. | 皖ICP备17025334号",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "哈哈哈~",
    intro: "/about.html",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:zhoutao825638@vip.qq.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/taoes_admin",
      GitHub: "https://github.com/taoes",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      Qzone: "https://user.qzone.qq.com/1472329579",
      // Reddit: "https://example.com",
      Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/yan-gui-lai-xi-21",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 你也可以使用 Waline
    comment: {
      type: "giscus",
      repo: "taoes/blog-comment",
      repoId: "R_kgDOHC8TUQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHC8TUc4COOAH",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
