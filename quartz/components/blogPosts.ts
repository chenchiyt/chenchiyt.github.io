import { QuartzPluginData } from "../plugins/vfile"

export function publicationDate(file: QuartzPluginData): string | undefined {
  const raw = file.frontmatter?.date
  if (raw) {
    const date = new Date(raw as string | number | Date)
    if (Number.isFinite(date.getTime())) return date.toISOString().slice(0, 10)
  }
  const filenameDate = file.slug
    ?.split("/")
    .pop()
    ?.match(/^(\d{4}-\d{2}-\d{2})(?:_|$)/)?.[1]
  if (filenameDate && Number.isFinite(new Date(filenameDate).getTime())) return filenameDate
  const date = file.dates?.created
  return date && Number.isFinite(date.getTime()) ? date.toISOString().slice(0, 10) : undefined
}

export function blogPosts(files: QuartzPluginData[]) {
  return files
    .filter(
      (file) =>
        file.slug &&
        !["index", "about"].includes(file.slug) &&
        !file.slug.endsWith("/index") &&
        !file.slug.startsWith("tags/") &&
        !file.frontmatter?.draft,
    )
    .map((file) => ({ file, date: publicationDate(file) }))
    .sort(
      (a, b) =>
        (b.date ?? "").localeCompare(a.date ?? "") ||
        (a.file.frontmatter?.title ?? "").localeCompare(b.file.frontmatter?.title ?? "", "zh-CN"),
    )
}

export function groupPosts(posts: ReturnType<typeof blogPosts>) {
  const groups = new Map<string, typeof posts>()
  for (const post of posts) {
    const year = post.date?.slice(0, 4) ?? "未标日期"
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year)!.push(post)
  }
  return [...groups.entries()]
}
