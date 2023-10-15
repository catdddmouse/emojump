---
layout: home

title: emoJump
titleTemplate: 一站式心理咨询内容网站，包括心理AI工具、学习路线、知识体系

hero:
  name: emoJump
  text: "智能心理AI SaaS服务供应商"
  tagline: |
    为心理咨询师个人、企业、机构打造AI全链路服务
#  image:
#    src: /love.svg
#    alt: EmoJump
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide
    - theme: alt
      text: 学习圈子
      link: /zsxq
    - theme: alt
      text: 心理周边
      link: /interview/
features:
  - icon: 📋
    title: AI共听
    details: 逐字文稿生成, 来访话题总结
#    link: /interview/
#    linkText: 立即体验
  - icon: 💬
    title: AI陪练
    details: AI扮演不同情况的来访者，深度模拟来访场景。
#    link: /program/npm-package/
#    linkText: 立即体验
  - icon: 🌱
    title: AI督导
    details: 资深督导与你随时探讨案例，让你快速成长。
#    link: /algorithm/guide/
#    linkText: 立即体验
  - icon: 🔧
    title: AI测评
    details: 多套AI测评题目，让你快速了解来访者个人背景信息。
#    link: /memo/git-command/
#    linkText: 开始查阅
#  - icon: 💭
#    title: 学习圈子
#    details: 打造专业的前端技术氛围社群，低调务实。
#    link: /zsxq
#    linkText: 加入圈子
#  - icon: 🚚
#    title: 编程工具
#    details: 归纳一些编程相关工具与网站，提高效率。
#    link: /tool/
#    linkText: 提高效率
#  - icon: 📓
#    title: 青葱岁月
#    details: 程序人生时光机，记录所有美好的时光。
#    link: /green/ch
#    linkText: 记录当下
#  - icon: 🎉
#    title: 技术视野
#    details: 跟随前沿技术，深度和广度学习。
#    link: https://github.com/Chocolate1999
#    linkText: 欢迎 Follow
#  - icon: 🚩
#    title: 拥抱开源
#    details: 文档开源，版权 ChoDocs 所有，禁商业行为。
#    link: https://github.com/chodocs/chodocs
#    linkText: 欢迎 ⭐
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://www.github.com/Chocolate1999.png',
    name: 'Choi Yang',
    title: '逆水行舟，不进则退',
    desc: 'FE Developer<br/>Creator @ <a href="https://github.com/chodocs/chodocs" target="_blank">ChoDocs</a>',
    links: [
      { icon: 'github', link: 'https://github.com/Chocolate1999' },
      {
       icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/351534170",
      },
      { icon: 'youtube', link: 'https://www.youtube.com/@chocolate1999'},
      { icon: 'twitter', link: 'https://twitter.com/ycyChocolate' },
    ]
  },
  {
    avatar: 'https://www.github.com/HearLing.png',
    name: 'HearLing',
    title: '热爱学习，不秃头',
    desc: 'FE Developer',
    links: [
      { icon: 'github', link: 'https://github.com/HearLing' },
      {
       icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/201738571",
      },
    ]
  },
]
</script>

[//]: # (<DataPanel/>)

[//]: # (<VPTeamPage>)

[//]: # (  <VPTeamPageTitle>)

[//]: # (    <template #title>)

[//]: # (      核心成员介绍)

[//]: # (    </template>)

[//]: # (  </VPTeamPageTitle>)

[//]: # (  <VPTeamMembers)

[//]: # (    :members="members")

[//]: # (  />)

[//]: # (</VPTeamPage>)

[//]: # (<HomeContributors/>)
