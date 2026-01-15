import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    // --- 修改开始：自定义 Explorer ---
    Component.Explorer({
      title: "文章列表", // 这里改左侧标题
      folderDefaultState: "open", // 默认展开文件夹
      sortFn: (a, b) => {
        // 尝试获取日期，如果没有日期则作为很久以前
        const dateA = a.file?.frontmatter?.date ? new Date(a.file.frontmatter.date) : new Date(0)
        const dateB = b.file?.frontmatter?.date ? new Date(b.file.frontmatter.date) : new Date(0)
        
        // 倒序排列：日期大的（新的）排在前面
        return dateB.getTime() - dateA.getTime()
      },
    }),
    // --- 修改结束 ---
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    // --- 修改开始：列表页也要保持一致 ---
    Component.Explorer({
      title: "文章列表",
      folderDefaultState: "open",
      sortFn: (a, b) => {
        const dateA = a.file?.frontmatter?.date ? new Date(a.file.frontmatter.date) : new Date(0)
        const dateB = b.file?.frontmatter?.date ? new Date(b.file.frontmatter.date) : new Date(0)
        return dateB.getTime() - dateA.getTime()
      },
    }),
    // --- 修改结束 ---
  ],
  right: [],
}