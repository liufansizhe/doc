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
      "/doc/vscode/": [
        {
          text: "vscode开发文档",
          items: [
            { text: "概述", link: "/doc/vscode/overview.md" },
            {
              text: "开始",
              link: "/doc/vscode/start/firstExtension.md",
              collapsed: true,
              items: [
                {
                  text: "您的第一个扩展",
                  link: "/doc/vscode/start/firstExtension.md",
                },
                { text: "扩展刨析", link: "/doc/vscode/start/Anatomy.md" },
                { text: "结束语", link: "/doc/vscode/start/wrappingUp.md" },
              ],
            },
            {
              text: "功能扩展",
              link: "/doc/vscode/capabilities/overview.md",
              collapsed: true,
              items: [
                {
                  text: "概述",
                  link: "/doc/vscode/capabilities/overview.md",
                },
                {
                  text: "常见功能",
                  link: "/doc/vscode/capabilities/common.md",
                },
                { text: "主题", link: "/doc/vscode/capabilities/theme.md" },
                { text: "扩展", link: "/doc/vscode/capabilities/extend.md" },
              ],
            },
          ],
        },
      ],
      "/doc/gwy/": [
        {
          text: "考公",
          items: [
            { text: "行测", link: "/doc/gwy/xc.md" },
            { text: "申论", link: "/doc/gwy/sl.md" },
          ],
        },
      ],
      "/doc/hls/": [
        {
          text: "hls源码解析",
          items: [{ text: "入口文件", link: "/doc/hls/index.md" }],
        },
      ],
      "/doc/docker/": [
        {
          text: "Docker",
          items: [
            { text: "简介", link: "/doc/docker/index.md" },
            { text: "开始", link: "/doc/docker/start.md" },
            {
              text: "概念",
              items: [
                {
                  text: "容器",
                  link: "/doc/docker/container.md",
                },
                {
                  text: "镜像",
                  link: "/doc/docker/image.md",
                },
              ],
            },
          ],
        },
      ],
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/FFSZ-5/doc" }],
    // 部署的时候需要注意该参数避免样式丢失
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
