# Playwright E2E Demo

This project showcases an end-to-end (E2E) testing workflow using [Playwright](https://playwright.dev/), Docker, and GitHub Actions. It demonstrates a realistic login/logout flow against the [SauceDemo](https://www.saucedemo.com/) demo website, with full support for:

- ✅ Playwright Test framework
- ✅ Dockerized test execution
- ✅ Headed/local and headless/CI test modes
- ✅ Screenshot and trace collection for every step
- ✅ HTML report generation
- ✅ CI/CD pipeline via GitHub Actions

## 🔧 Tech Stack

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://docs.github.com/actions)

## 🚀 Run Tests Locally

```bash
# Headed mode with live browser and full report
npx playwright test --ui
