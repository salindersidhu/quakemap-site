import { Component } from "react";

class Robots extends Component {
  static getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/plain");
    res.write(`User-agent: *
Disallow:
Sitemap: ${process.env.SITE_URL}`);
    res.end();
  }
}

export default Robots;
