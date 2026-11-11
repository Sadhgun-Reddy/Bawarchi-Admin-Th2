import { chromium, expect } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Test 1: Redirect / to /login
  await page.goto('http://localhost:4546/');
  await page.waitForURL('http://localhost:4546/login');
  console.log("Successfully redirected / to /login");

  // Test 2: Redirect /admin to /admin/dashboard when authenticated
  await page.fill('input[type="email"]', 'admin@bawarchi.com');
  await page.fill('input[type="password"]', 'password123');
  await page.click('button:has-text("Login")');
  await page.waitForURL('http://localhost:4546/admin/dashboard');

  await page.goto('http://localhost:4546/admin');
  await page.waitForURL('http://localhost:4546/admin/dashboard');
  console.log("Successfully redirected /admin to /admin/dashboard");

  await browser.close();
})();
