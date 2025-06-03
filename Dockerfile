FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app

COPY . .

RUN npm ci

# Run tests and copy the HTML report (with trace) to a shared volume
CMD npx playwright test && cp -r playwright-report /app/test-output/
   