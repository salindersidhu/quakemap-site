# Quakemap Landing Site

[![Contributors](https://img.shields.io/github/contributors/salindersidhu/quakemap-site?style=for-the-badge)](https://github.com/salindersidhu/quakemap-site/graphs/contributors) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](/LICENSE)

## Overview

The offical landing page for [Quakemap](https://play.google.com/store/apps/details?id=com.sal.quakemap). Built using React and other open source technologies.

<p float="left">
    <img src="https://images.squarespace-cdn.com/content/v1/5cc22d6593a63233d214110c/1597710652025-QEY2UL92MLE1E2BX4WSJ/Vercel+%28Zeit%29.jpg" height="150" width="150">
    <img src="https://miro.medium.com/v2/resize:fit:1258/1*okiCUvTUJLtOqJv1dMzwpA.png" height="150" width="150">
    <img src="https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png" height="150" width="150">
    <img src="https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png" height="150" width="150">
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
npm i
```

## Running

1. Run the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

1. Create and merge a Pull Request into the main branch.

2. The production site is automatically deployed to [https://quakemap.vercel.app/](https://quakemap.vercel.app/).

## Project Structure

    .
    ├── ...
    ├── src
    │    ├── app
    │    │    ├── eula
    │    │    │    ├── page.tsx     # Eula page
    │    │    │    └── ...
    │    │    ├── faq
    │    │    │    ├── page.tsx     # FAQ page
    │    │    │    └── ...
    │    │    ├── privacy
    │    │    │    ├── page.tsx     # Privacy Policy page
    │    │    │    └── ...
    │    │    ├── page.tsx          # Home page
    │    │    ├── favicon.ico
    │    │    ├── globals.css
    │    │    └── ...
    │    ├── components             # Components
    │    │    └── ...
    │    └── data                   # Content
    │         └── ...
    ├── public                      # Images
    │    └── ...
    ├── next.config.ts              # Next config
    ├── postcss.config.mjs          # Post CSS config
    ├── tailwind.config.ts          # Tailwind config
    └── ...
