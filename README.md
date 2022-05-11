# Quakemap Landing Site

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](/LICENSE)

## Overview

The offical landing page for [Quakemap](https://play.google.com/store/apps/details?id=com.sal.quakemap). Built using React and other open source technologies.

<p float="left">
    <img src="https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png" height="150" width="150">
    <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" height="150" width="150">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" height="150" width="150">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" height="150" width="150">
</p>

## Prerequisite Software

| Software | Version  |
| :------- | :------- |
| Git      | 2.20.1+  |
| Node     | 10.15.0+ |

## Getting Started

1. Run the following command to install all the required packages:

```bash
npm install
```

2. Copy the environment variable files for test, production and development:

```bash
cp .env.example .env.production
cp .env.example .env.development
```

3. Update the variable `SITE_URL` in `.env.*` files.

## Running

1. Run the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

1. Update the environment variables in `.env.production`.

2. Create and merge a Pull Request into the main branch.

3. The production site is automatically deployed to [https://quakemap.vercel.app/](https://quakemap.vercel.app/).

## Project Structure

    .
    ├── ...
    ├── components                  # Site components
    │    ├── index.js
    │    └── ...
    ├── data                        # Site content
    │    ├── index.js
    │    └── ...
    ├── pages                       # Site pages
    │    ├── _app.js                # Next JS app entry point
    │    ├── _document.js           # Next JS SEO compatible site wrapper
    │    ├── index.js               # Main page
    │    └── ...
    ├── public
    │    ├── images                 # Site images
    │    │   └── ...
    │    ├── app-ads.txt            # AdMob advertisement config
    │    ├── banner.png             # Site SEO banner
    │    ├── favicon.ico            # Site favicon
    │    └── ...
    ├── styles                      # Site Styles
    │    ├── globals.css            # Global styles
    │    └── ...
    ├── next.config.js              # Next JS config
    ├── postcss.config.js           # Post CSS config
    ├── tailwind.config.js          # Tailwind config
    └── ...
