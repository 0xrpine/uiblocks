import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

/**
 * Automated WCAG gate: axe must report zero serious/critical violations on
 * every block page, in light and dark themes. Moderate/minor findings are
 * listed in the console for triage but do not fail the build.
 */
const blocks = ["alert", "avatar", "badge", "button", "card", "input", "progress", "skeleton", "textarea"];

for (const block of blocks) {
  for (const theme of ["light", "dark"]) {
    test(`a11y: ${block} (${theme}) has no serious or critical axe violations`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme === "dark" ? "dark" : "light" });
      await page.goto(`/blocks/${block}`);
      await page.waitForTimeout(300);

      const results = await new AxeBuilder({ page }).analyze();
      const serious = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical",
      );
      const moderate = results.violations.filter((v) => v.impact === "moderate");
      if (moderate.length) {
        console.log(
          `[triage] ${block} (${theme}):`,
          moderate.map((v) => `${v.id} x${v.nodes.length}`).join(", "),
        );
      }

      expect(
        serious.map((v) => `${v.id} (${v.impact}) x${v.nodes.length}: ${v.help}`),
      ).toEqual([]);
    });
  }
}
