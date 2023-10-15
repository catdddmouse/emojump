import { version } from '../../package.json'

// base info
export const name = ' '
export const site = 'https://chodocs.cn/'
export const logo = 'https://chodocs.cn/chodocs-logo.svg'
export const keywords = '心理专栏、学习路线、面试手册、知识体系、心理面试、心理算法、心理学习'
export const description = '一站式心理内容网站，包括学习路线、知识体系，海量心理面试问题解答，一站式阅读体验'

// social link
export const bilibili = 'https://space.bilibili.com/351534170'
export const github = 'https://github.com/chodocs/chodocs'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
