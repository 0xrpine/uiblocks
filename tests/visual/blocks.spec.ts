import { test, expect } from "@playwright/test";

test("home lists blocks", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "UIblocks" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Button/ })).toBeVisible();
});

test("button block renders demo, playground and toggles theme", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  await page.goto("/blocks/button");
  await expect(page.getByRole("heading", { name: "Button", exact: true })).toBeVisible();

  const themeToggle = page.getByRole("button", { name: /Switch to (light|dark) theme/ });
  const html = page.locator("html");
  const before = await html.getAttribute("class");
  await themeToggle.click();
  await page.waitForTimeout(300);
  const after = await html.getAttribute("class");
  expect(after ?? "").not.toBe(before ?? "");

  const stageButton = page.getByRole("button", { name: "Get started" });
  await expect(stageButton).toBeVisible();
  await stageButton.click();

  await page.getByRole("switch").click();
  await expect(stageButton).toBeDisabled();

  expect(consoleErrors).toEqual([]);

  await page.screenshot({ path: "screenshots/button-block.png", fullPage: true });
});
