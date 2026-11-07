import { test, expect } from "@playwright/test";

const blocks = ["alert", "avatar", "badge", "button", "card", "input", "progress", "skeleton", "textarea"];

for (const block of blocks) {
  test(`block ${block} renders with no console errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    await page.goto(`/blocks/${block}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(consoleErrors).toEqual([]);
  });
}

const titles: Record<string, string> = {
  alert: "Alert",
  avatar: "Avatar",
  badge: "Badge",
  button: "Button",
  card: "Card",
  input: "Input",
  progress: "Progress",
  skeleton: "Skeleton",
  textarea: "Text area",
};

test("home lists every block", async ({ page }) => {
  await page.goto("/");
  const catalog = page.locator("#blocks");
  await expect(catalog).toBeVisible();
  for (const block of blocks) {
    await expect(catalog.getByText(titles[block], { exact: true })).toBeVisible();
  }
});

test("button block: playground interaction and theme toggle", async ({ page }) => {
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

test("key blocks have computed styles applied (guards against missing Tailwind classes)", async ({ page }) => {
  await page.goto("/blocks/badge");
  const badge = page.locator("span.rounded-full").filter({ hasText: "Solid" }).first();
  await expect(badge).toHaveCSS("border-radius", /(9999px|\d+(\.\d+)?e\+07px)/);

  await page.goto("/blocks/avatar");
  const avatarRoot = page.locator(".rounded-full").first();
  await expect(avatarRoot).toHaveCSS("border-radius", /(9999px|\d+(\.\d+)?e\+07px)/);

  await page.goto("/blocks/skeleton");
  const skeleton = page.locator(".animate-pulse").first();
  await expect(skeleton).toHaveCSS("background-color", /^(?!.*rgba\(0, 0, 0, 0\)).*$/);

  await page.goto("/blocks/input");
  const input = page.locator("input").first();
  await expect(input).toHaveCSS("border-width", "1px");
  await expect(input).toHaveCSS("border-radius", /px/);

  await page.goto("/blocks/card");
  const card = page.locator(".rounded-lg").first();
  await expect(card).toHaveCSS("border-width", "1px");
});

test("registry serves every block manifest", async ({ request }) => {
  for (const block of blocks) {
    const res = await request.get(`/r/${block}.json`);
    expect(res.status()).toBe(200);
    const manifest = await res.json();
    expect(manifest.name).toBe(block);
    expect(manifest.files.length).toBeGreaterThan(0);
  }
});
