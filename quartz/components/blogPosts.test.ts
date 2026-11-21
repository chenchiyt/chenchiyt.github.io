import test from "node:test"
import assert from "node:assert/strict"
import { blogPosts, groupPosts, publicationDate } from "./blogPosts"
import { QuartzPluginData } from "../plugins/vfile"

const file = (slug: string, date?: string) =>
  ({ slug, frontmatter: { title: slug, tags: [], date } }) as unknown as QuartzPluginData

test("publication date prioritizes metadata then dated filename", () => {
  assert.equal(publicationDate(file("2020-01-02_post", "2021-03-04")), "2021-03-04")
  assert.equal(publicationDate(file("2020-01-02_post", "invalid")), "2020-01-02")
  assert.equal(publicationDate(file("undated")), undefined)
})
test("archive excludes utility pages and drafts, sorts newest first without mutating input", () => {
  const files = [
    file("index"),
    file("about"),
    file("folder/index"),
    file("tags/tag"),
    file("2020-01-02_old"),
    file("2024-03-01_new"),
    file("undated"),
    {
      ...file("draft"),
      frontmatter: { title: "draft", tags: [], draft: true },
    } as QuartzPluginData,
  ]
  assert.deepEqual(
    blogPosts(files).map((p) => p.file.slug),
    ["2024-03-01_new", "2020-01-02_old", "undated"],
  )
  assert.equal(files.length, 8)
  assert.deepEqual(
    groupPosts(blogPosts(files)).map(([year]) => year),
    ["2024", "2020", "未标日期"],
  )
  assert.deepEqual(groupPosts(blogPosts([])), [])
})
