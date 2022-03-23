import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: "主页", icon: "home", link: "/" },
  { text: "文章归档", icon: "snow", link: "/timeline/" },
  { text: "时光流影", icon: "pic", link: "/picture" },
  { text: "知识图谱", icon: "date", link: "/books.html" },
  { text: "关于我", icon: "people", link: "/about.html" },
]);
