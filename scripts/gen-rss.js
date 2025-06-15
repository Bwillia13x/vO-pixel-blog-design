const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const RSS = require("rss");

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
).replace(/\/$/, "");
const siteTitle = "Pixel Blog";

const postsDir = path.join(process.cwd(), "content", "blog");

function getPosts() {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx?$/, "");
      return {
        title: data.title || slug,
        date: data.date,
        excerpt: data.excerpt || content.slice(0, 140),
        slug,
      };
    })
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
}

function buildFeed() {
  const feed = new RSS({
    title: siteTitle,
    feed_url: `${siteUrl}/feed.xml`,
    site_url: siteUrl,
    language: "en",
  });

  const posts = getPosts();
  posts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date || new Date().toISOString(),
      description: post.excerpt,
    });
  });

  const rss = feed.xml({ indent: true });
  const publicDir = path.join(process.cwd(), "public");
  fs.mkdirSync(publicDir, { recursive: true });
  const outPath = path.join(publicDir, "feed.xml");
  fs.writeFileSync(outPath, rss);
  console.log(`RSS feed written to ${outPath}`);
}

buildFeed();
