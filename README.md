# QA Challenge – SAP Fioneer Automation Tests
This project contains automated end-to-end tests for the SAP Fioneer website. The goal is to demonstrate test structure, approach, and reporting using modern testing tools and practices.

---

## 🧪 Tech Stack

- **Language**: TypeScript
- **Framework**: [Playwright](https://playwright.dev/)
- **Test Design**: Page Object Model (POM)
- **Reporting**: Playwright HTML Report



## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rkorasiewicz/qaChallenge.git
cd qaChallenge
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

```bash
npx playwright test
```

### 4. View the HTML test report

```bash
npx playwright show-report
```

Alternatively, you can open the report manually by opening the following file in your browser:

```
playwright-report/index.html
```

### 5. Run tests in specific browsers (optional)

Playwright supports Chromium, Firefox, and WebKit. You can run tests in a specific browser using:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
