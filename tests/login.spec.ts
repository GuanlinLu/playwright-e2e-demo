import { test, expect } from '@playwright/test';

test('should log in successfully with valid credentials', async ({ page }) => {
  // Visit the login page
  await page.goto('https://www.saucedemo.com/');

  // Define locators
  const usernameInput = page.locator('[data-test="username"]');
  const passwordInput = page.locator('[data-test="password"]');
  const loginButton = page.locator('[data-test="login-button"]');
  const menuButton = page.locator('#react-burger-menu-btn');
  const logoutLink = page.locator('#logout_sidebar_link');

  // Perform login
  await usernameInput.fill('standard_user');
  await passwordInput.fill('secret_sauce');
  await loginButton.click();

  // Verify we’re logged in
  await expect(page).toHaveURL(/.*inventory/);

  // Open menu and logout
  await menuButton.click();
  await logoutLink.click();

  // Verify we’re back to login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
