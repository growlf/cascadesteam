import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cascade STEAM",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "growlf.github.io/journal",
    ignorePatterns: ["private", "_templates", ".obsidian", "_assets"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Workbench",
        body: "Space Grotesk",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eeeeeeff",
          lightgray: "#dbdbdb",
          gray: "#59d75b",
          darkgray: "#464646ff",
          dark: "#00551a",
          secondary: "#037c29",
          tertiary: "#00bc3b",
          highlight: "#00ff8c26"
        },
        darkMode: {
          light: "#00282b",
          lightgray: "#355f3b",
          gray: "#006015",
          darkgray: "#a9a9a9;",
          dark: "#90ff90ff",
          secondary: "#29cb68",
          tertiary: "#8dffb3",
          highlight: "rgba(169, 143, 143, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
