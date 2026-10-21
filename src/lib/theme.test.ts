import { describe, test } from "node:test";
import { strictEqual } from "node:assert";
import { oppositeTheme, resolveTheme } from "./theme";

describe("visitor theme preference", () => {
  test("defaults to dark without a saved preference", () => {
    strictEqual(resolveTheme(null), "dark");
  });
  test("restores a saved light preference", () => {
    strictEqual(resolveTheme("light"), "light");
  });
  test("switches between bright and dark themes", () => {
    strictEqual(oppositeTheme("dark"), "light");
    strictEqual(oppositeTheme("light"), "dark");
  });
});