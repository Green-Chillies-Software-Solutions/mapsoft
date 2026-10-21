export type Theme = "dark" | "light";
export const themeStorageKey = "mapsoft-theme";
export function resolveTheme(value: string | null): Theme {
  return value === "light" ? "light" : "dark";
}
export function oppositeTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}