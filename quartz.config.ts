import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "生活的流水账",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "zh-CN",
    baseUrl: "chenchiyt.github.io",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "copilot", // 排除 Copilot 插件生成的文件夹
      "attachments", // 如果你不想发布附件文件夹也可以加上
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "SFMono-Regular",
      },
      colors: {
        lightMode: {
          light: "#fcfcfa",
          lightgray: "#e6e6e1",
          gray: "#72726b",
          darkgray: "#393a36",
          dark: "#20211e",
          secondary: "#42645a",
          tertiary: "#294c41",
          highlight: "rgba(66, 100, 90, 0.07)",
          textHighlight: "#e5ecdb",
        },
        darkMode: {
          light: "#191b19",
          lightgray: "#343832",
          gray: "#a3a89f",
          darkgray: "#d0d4cc",
          dark: "#f0f1eb",
          secondary: "#a2c5b5",
          tertiary: "#c6dfd2",
          highlight: "rgba(162, 197, 181, 0.09)",
          textHighlight: "#3c5041",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
