
# Playwright Web Test Starter (Beginner)

A **ready‑made beginner project** to run a simple UI test using **Playwright Test (JavaScript)**.

This is perfect for first‑time GitHub users. You can upload this as‑is to GitHub and later run the tests on your laptop.

---

## ✨ What this project contains
- A single working test that opens `https://playwright.dev/` and verifies the page title.
- Minimal config so you can run tests in Chromium by default.
- Handy npm scripts (run tests, open HTML report, record a script with codegen).

---

## ✅ Prerequisites (only if you want to RUN locally)
1. Install **Node.js LTS** from https://nodejs.org/
2. Open a terminal in this project folder and run:
   ```bash
   npm install
   npx playwright install
   ```

---

## ▶️ How to run tests
```bash
# run headless tests
npm test

# run with UI (headed)
npm run test:headed

# show HTML report after a run
npm run show-report

# record a test flow and generate code (try a URL like https://example.com)
npm run codegen -- https://example.com
```

---

## 📁 Project structure
```
playwright-web-test-starter/
├─ tests/
│  └─ example.spec.js        # a basic test
├─ playwright.config.js      # config file with default options
├─ package.json              # npm scripts and dependencies
├─ .gitignore                # ignore folders like node_modules, reports
└─ README.md
```

---

## 🚀 Upload this to GitHub (Easiest Way: Web UI)
1. Go to https://github.com and **Sign in**.
2. Click **New** repository → Name it: `playwright-web-test-starter` → **Create repository**.
3. On the new repo page, click **"uploading an existing file"**.
4. **Drag & drop** all files/folders from this project into the page.
5. Add a commit message like `init: starter project` → **Commit changes**.

> Tip: You can also upload the **ZIP** directly and let GitHub **Extract** via your local machine before dragging the files.

---

## 🔗 Connect to Xcellerate (My GitHub)
After the repo is on GitHub:
1. Open **Xcellerate → My GitHub**.
2. Click **COLLECT REPOSITORIES**.
3. **Authorize** access. Your repo will appear and skills (JavaScript, Testing) will be detected.

---

## 🧪 What the test does (in simple words)
- Launches a browser
- Opens `https://playwright.dev/`
- Checks that the page title contains **Playwright**

You can change the URL and assertions later to practice.

---

## 🛠 Next steps (optional practice)
- Add another test file inside `tests/`
- Try running in different browsers: set `projects` in `playwright.config.js`
- Capture screenshots on failure (see commented code in the config)
- Commit and push changes to GitHub to show activity
