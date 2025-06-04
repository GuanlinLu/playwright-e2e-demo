FROM mcr.microsoft.com/playwright:v1.52.0-jammy
# Use the official Playwright image with Node.js and browsers installed

WORKDIR /app

COPY . .

RUN npm ci

# Run tests and copy the HTML report (with trace) to a shared volume
CMD npx playwright test && cp -r playwright-report /app/test-output/
   