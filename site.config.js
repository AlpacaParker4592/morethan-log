const CONFIG = {
  // profile setting (required)
  profile: {
    name: "AlpacaParker",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Would-be Dev./Des. Multiplayer",
    bio: "All-rounder that uses charming technology to implement new solutions",
    email: "lhh-znso4@gm.gist.ac.kr",
    linkedin: "",
    github: "alpacaparker4592",
    instagram: "",
  },
  projects: [
    {
      name: `(KR) Notion Profile(by Oct. 06. '23.)`,
      href: "https://fortune-dryosaurus-055.notion.site/KR-Heonhyo-s-Profile-f103941180ba4eb6bc087e48dfdba6d6?pvs=4",
    },
    {
      name: `(EN) Notion Profile(by Oct. 06. '23.)`,
      href: "https://fortune-dryosaurus-055.notion.site/EN-Heonhyo-s-Profile-a6517593b35e416fa40da538ccba6bc8?pvs=4",
    },
  ],
  // blog setting (required)
  blog: {
    title: "alpacaparker's blog",
    description: "welcome to alpacaparker's blog!",
  },

  // CONFIG configration (required)
  link: "https:/heonhyo-lee.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
