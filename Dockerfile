# Use official Playwright image with all dependencies
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install Node.js dependencies
RUN npm ci

# Install Playwright browsers and dependencies
RUN npx playwright install --with-deps

# Run tests when the container starts
CMD ["npx", "playwright", "test"]
