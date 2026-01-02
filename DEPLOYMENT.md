# Deployment Guide

Congratulations on building your portfolio! Since you've already pushed your code to GitHub, deploying it is very straightforward. Here are the three best options, ranked by ease of use.

## Option 1: Vercel (Recommended)
**Best for:** Zero configuration, fastest performance, automatic HTTPS.

1.  Create an account at [vercel.com](https://vercel.com/signup) (Login with GitHub).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `personal-portfolio` repository.
4.  Vercel will automatically detect `Vite`.
5.  Click **Deploy**.
6.  **Done!** Your site will be live at `https://personal-portfolio-noun.vercel.app`.
7.  **Email Setup**: Go to **Settings** -> **Environment Variables** in your Vercel project and add:
    - Key: `RESEND_API_KEY`
    - Value: `re_123456789...` (Get this from your [Resend Dashboard](https://resend.com/api-keys))

---

## Option 2: Netlify
**Best for:** Easy dropping of files, heavily used in the React community.

1.  Create an account at [netlify.com](https://www.netlify.com/).
2.  Click **"Add new site"** -> **"Import an existing project"**.
3.  Connect to GitHub and pick `personal-portfolio`.
4.  Netlify will detect the settings (`npm run build`, `dist` folder).
5.  Click **Deploy site**.

---

## Option 3: GitHub Pages
**Best for:** Keeping everything within GitHub.

Since you are using `HashRouter` in your app, this will work perfectly.

1.  Open `package.json` and add a `homepage` field at the top level:
    ```json
    "homepage": "https://sakalesha.github.io/personal-portfolio",
    ```
2.  Install the `gh-pages` package:
    ```bash
    npm install gh-pages --save-dev
    ```
3.  Add these scripts to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4.  Deploy by running:
    ```bash
    npm run deploy
    ```
5.  Go to your GitHub Repo -> Settings -> Pages to see your live link.

## Important Note regarding `env` variables
If you rely on any environment variables (like the API key referenced in `vite.config.ts`), you must add them to the "Environment Variables" section of your deployment platform (Vercel/Netlify settings).
