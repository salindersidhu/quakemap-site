import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "404.js",
        "index.js",
        "sitemap.xml.js",
        "robots.txt.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${process.env.SITE_URL}/${staticPagePath.replace(
        /\.[^/.]+$/,
        ""
      )}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${process.env.SITE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
