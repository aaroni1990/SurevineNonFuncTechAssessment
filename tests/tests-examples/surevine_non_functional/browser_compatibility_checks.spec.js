// @ts-check
const { test, expect } = require('@playwright/test');

test('Page compatibility check', async ({ page }) => {
    // Navigate to the URL
    await page.goto('http://localhost:8082/');
  
    // Check for the presence of elements
    await page.waitForSelector('.wp-block-site-title');
    await page.waitForSelector('.wp-block-pages-list__item__link.wp-block-navigation-item__content');
    await expect(await page.innerText('.alignwide.wp-block-heading')).toBe('Mindblown: a blog about philosophy.');
    await expect(await page.innerText('.wp-block-post-title')).toBe('Hello world!');
    await expect(await page.innerText('.wp-block-post-excerpt__excerpt')).toBe('Welcome to WordPress. This is your first post. Edit or delete it, then start writing!');
    await expect(await page.innerText('.wp-block-post-date')).toBe('5 November 2023');
  });