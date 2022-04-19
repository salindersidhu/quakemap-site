const fs = require("fs");
const pjson = require('../package.json');

const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${pjson.homepage}/sitemap.xml`;
fs.writeFileSync("out/robots.txt", robotsTxt);

console.log('Generated out/robots.txt');
