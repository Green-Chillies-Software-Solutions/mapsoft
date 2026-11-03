export type Theme = "dark" | "light";

export const themeStorageKey = "mapsoft-theme";

/**
 * Light is the default. Only an explicit "dark" the user picked
 * previously will put the site in dark mode.
 */
export function resolveTheme(value: string | null): Theme {
  return value === "dark" ? "dark" : "light";
}

export function oppositeTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}