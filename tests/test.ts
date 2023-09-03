import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});

test('home page expected to have one "Increase" button', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('Increase the counter by one')).toBeVisible();
});

test('home page expected to have one "decrease" button', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('Decrease the counter by one')).toBeVisible();
});
