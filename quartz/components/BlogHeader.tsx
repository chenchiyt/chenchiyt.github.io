import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const BlogHeader: QuartzComponent = ({ fileData, cfg }) => {
  const root = pathToRoot(fileData.slug!)
  const slug = fileData.slug ?? ""
  return (
    <div class="blog-masthead">
      <a class="blog-brand" href={root}>
        {cfg.pageTitle}
      </a>
      <nav aria-label="主导航">
        <a href={root} aria-current={slug === "index" ? "page" : undefined}>
          文章
        </a>
        <a href={`${root}/tags/`} aria-current={slug.startsWith("tags/") ? "page" : undefined}>
          标签
        </a>
        <a href={`${root}/about`} aria-current={slug === "about" ? "page" : undefined}>
          关于
        </a>
      </nav>
    </div>
  )
}
export default (() => BlogHeader) satisfies QuartzComponentConstructor
