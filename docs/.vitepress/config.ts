import process from 'node:process'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import { description, docsVersion, github, keywords, name, site } from './meta'
import { genFeed } from './plugins/genFeed'
import { pwa } from './plugins/pwa'
import sidebar from './sidebar'
import socialLinks from './link'
import algolia from './algolia'

export default withPwa(defineConfig({
  pwa,
  outDir: '../dist',
  title: name,
  description,
  appearance: false,
  lastUpdated: true,
  useWebFonts: false,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    logo: './emojump-logo.png',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: '用心去做高质量的心理咨询内容网站',
      copyright: `ICP备案/许可证号: <a target="_blank" href="https://beian.miit.gov.cn">粤ICP备2023097025号</a> | 版权所有 © 2021-${new Date().getFullYear()} | 佛山市青鑫网络科技有限公司`,
    },
    nav: [
      { text: '💭 关于我们', link: '/zsxq' },
      // {
      //   text: '🔥 专栏',
      //   items: [
      //     { text: '🔥 最新专栏', link: '/algorithm/guide/' },
      //     { text: '🔥 专家专栏', link: '/patterns/guide/' },
      //     { text: '🔥 专栏归档', link: '/interview/' },
      //   ],
      // },
      // {
      //   text: 'AI 工具推荐',
      //   items: [
      //     { text: '⭐ 资源', link: '/favorites' },
      //     { text: '🔧 更新日志', link: '/tool/' },
      //     { text: '💻 FAQ', link: '/program/' },
      //   ],
      // },
      // {
      //   text: '心理学资源',
      //   items: [
      //     { text: '🌱 书籍推荐', link: '/essay/' },
      //     { text: '🌱 视频讲座', link: '/essay/' },
      //     { text: '🌱 心理测评工具', link: '/essay/' },
      //     { text: '🌱 学术文章', link: '/green/ch' },
      //     { text: '🌱 活动信息', link: '/green/ch' },
      //   ],
      // },
      // {
      //   text: `v${docsVersion}`,
      //   items: [
      //     { text: '🧱 参与贡献', link: '/contributing' },
      //     { text: '🎉 更新日志', link: `${github}/releases` },
      //   ],
      // },
    ],
    algolia,
    sidebar,
    socialLinks,
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Choi Yang' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/chodocs-logo.svg', color: '#06f' }],
    ['meta', { name: 'theme-color', content: '#06f' }],

    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-icon.png' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    // og
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: site }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // analytics
    ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ],
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://chodocs.cn/' })
    await genFeed(siteConfig)
  },
}))
