import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";

export default hopeTheme({
  // 部署到的网址
  hostname: "https://firstheart01.github.io/zq-homepage",

  // 默认作者
  // author: {
  //   name: "Mr.Hope",
  //   url: "https://mrhope.site",
  // },

  // breadcrumb: true,

  iconAssets: "iconfont",

  // logo: "/logo.svg",
  // logo: "/rpg.png",

  // 该主页的 GitHub 网址
  repo: "https://github.com/FirstHeart01/zq-homepage",

  // docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // 布局配置
  sidebar: false,
  navbarLayout: {
    left: ["Brand", "Links"],
    center: [],
    right: ["Language", "Repo", "Outlook"]
  },

  // blog 中用到的共通配置
  blog: {
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/FirstHeart01",
      Email: "mailto:zengqi@ia.ac.cn",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },  // 展示个人的社交媒体图标，并且提供超链接
    sidebarDisplay: "none",
    avatar: "/logo.png",
    roundAvatar: true
  },

  locales: {
    "/": {
      // 导航栏
      navbar: navbar.en,
      navbarAutoHide: "none",

      // sidebar
      // sidebar: sidebar.en,

      // footer: "Default footer",

      displayFooter: true,

      blog: {
        name: "Zeng Qi",
        description: "<p>M.S Student in <a href=\"http://ia.cas.cn/\">CASIA</a>.<br>Focusing on 3D Computer Vision and Deep Learning.</p> <p><em><strong>这是一句有哲理的话</strong></em></p>",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,
      navbarAutoHide: "none",

      // sidebar
      // sidebar: sidebar.zh,

      // footer: "默认页脚",

      displayFooter: true,

      blog: {
        name: "曾琪",
        description:"<p>中科院自动化研究所硕士在读<br>研究方向为3D计算机视觉</p><em><strong>这是一句有哲理的话</strong></em></p>",
      },
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
