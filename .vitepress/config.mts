import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

export default defineConfig({
  title: "技术文档",
  description: "学习技术",
  // header标签里面插入的内容
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // 网站的logo
    logo: "/logo.svg",
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: "目录",
    },
    //自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 主题
    darkModeSwitchLabel: "深浅模式",
    // 返回顶部label
    returnToTopLabel: "返回顶部",
    // 搜索
    search: {
      provider: "local",
    },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present LiuFanSiZhe",
    },
    // 文档的最后更新时间
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [{ text: "首页", link: "/" }],

    sidebar: {
      "/gwy/": [
        {
          text: "考公",
          items: [
            { text: "行测", link: "/gwy/xc.md" },
            { text: "申论", link: "/gwy/sl.md" },
          ],
        },
      ],
      "/hls/": [
        {
          text: "hls源码解析",
          items: [{ text: "入口文件", link: "/hls/index.md" }],
        },
      ],
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/FFSZ-5/doc" }],
    // 部署的时候需要注意该参数避免样式丢失
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
