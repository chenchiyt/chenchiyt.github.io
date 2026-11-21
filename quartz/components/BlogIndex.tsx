import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { resolveRelative } from "../util/path"
import { blogPosts, groupPosts } from "./blogPosts"

const BlogIndex: QuartzComponent = ({ allFiles, fileData }) => {
  if (fileData.slug !== "index") return null
  const posts = blogPosts(allFiles)
  return (
    <section class="blog-index" aria-labelledby="archive-title">
      <div class="archive-heading">
        <h2 id="archive-title">文章</h2>
        <span>{posts.length} 篇记录</span>
      </div>
      {posts.length === 0 && <p class="archive-empty">还没有可展示的文章。</p>}
      {groupPosts(posts).map(([year, entries]) => (
        <section class="archive-year" key={year} aria-label={`${year} 年文章`}>
          <h3>{year}</h3>
          <ul>
            {entries.map(({ file, date }) => (
              <li key={file.slug}>
                {date ? (
                  <time datetime={date}>{date.slice(5).replace("-", ".")}</time>
                ) : (
                  <span class="undated">—</span>
                )}
                <a class="internal" href={resolveRelative(fileData.slug!, file.slug!)}>
                  {(file.frontmatter?.title ?? file.slug)?.replace(/^\d{4}-\d{2}-\d{2}[_\s]+/, "")}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}
export default (() => BlogIndex) satisfies QuartzComponentConstructor
