const fs = require("fs");
const globby = require("globby");
const pjson = require('../package.json');

function addPage(page) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");
  const route = path === "/index" ? "" : path;
  return `\t<url>
    \t<loc>${`${pjson.homepage}${route}`}</loc>
    \t<lastmod>${new Date().toISOString()}</lastmod>
    \t<changefreq>monthly</changefreq>
    \t<priority>1.0</priority>\n\t</url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${pages
    .map(addPage)
    .join("\n")}\n</urlset>`;
  fs.writeFileSync("out/sitemap.xml", sitemap);
}

generateSitemap();

console.log("Generated out/sitemap.xml");
