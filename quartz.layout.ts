import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import BlogHeader from "./quartz/components/BlogHeader"
import BlogIndex from "./quartz/components/BlogIndex"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [BlogHeader(), Component.Search({ enablePreview: false }), Component.Darkmode()],
  afterBody: [BlogIndex()],
  footer: Component.Footer({ links: { RSS: "/index.xml" } }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !["index", "about"].includes(page.fileData.slug ?? ""),
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [],
  right: [
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: (page) => !["index", "about"].includes(page.fileData.slug ?? ""),
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [],
  right: [],
}
