import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { readmorePlugin } from "vuepress-plugin-readmore-popular-next";
export default defineConfig({
  ignoreDeadLinks: true,
  title: "留饭同学的博客",
  description: "学习",
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
    nav: [
      { text: "首页", link: "/" },
      {
        text: "导航",
        items: [{ text: "软考", link: "/doc/rk/profile.md" }],
      },
    ],

    sidebar: {
      "/doc/rk/": [
        {
          text: "软考",
          items: [{ text: "简介", link: "/doc/rk/profile.md" }],
        },
      ],
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
    plugins: [
      groupIconVitePlugin(),
      readmorePlugin({
        // 已申请的博客 ID
        blogId: "38102-9886416095550-132",
        // 已申请的微信公众号名称
        name: "留饭同学",
        // 已申请的微信公众号回复关键词
        keyword: "yzm",
        // 已申请的微信公众号二维码图片
        qrcode:
          "https://mp.weixin.qq.com/misc/getqrcode?fakeid=3964140163&token=1543321666",
        // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
        selector: "div.theme-default-content",
        // 自定义的 JS 资源链接，可用于 CDN 加速
        libUrl: "https://qiniu.techgrow.cn/readmore/dist/readmore.js",
        // 自定义的 CSS 资源链接，可用于适配不同风格的博客
        cssUrl: "https://qiniu.techgrow.cn/readmore/dist/vuepress2.css",
        // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
        excludes: { strExp: [], regExp: [] },
        // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
        reverse: false,
        // 文章内容的预览高度(例如 300)，设置值为 auto 则表示预览高度自适应
        height: "auto",
        // 是否添加微信公众号引流工具到移动端页面
        allowMobile: false,
        // 文章解锁后凭证的有效天数
        expires: 365,
        // 定时校验凭证有效性的时间间隔（秒）
        interval: 60,
        // 等待 DOM 节点加载完成的时间（毫秒），如果部分页面的引流功能无法生效，可适当增大此参数的值
        waitDomMills: 1000,
        // 每篇文章随机添加引流工具的概率，范围在 0.1 ~ 1.0 之间，代表 10% ~ 100%，其中 1.0 表示所有文章默认都添加引流工具
        random: 1.0,
      })(),
    ],
  },
});
