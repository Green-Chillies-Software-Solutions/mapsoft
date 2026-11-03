import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { oppositeTheme, resolveTheme, themeStorageKey, type Theme } from "@/lib/theme";

const themeChangeEvent = "app:themechange";

function applyTheme(next: Theme) {
  document.documentElement.dataset["theme"] = next;
  window.dispatchEvent(new CustomEvent<Theme>(themeChangeEvent, { detail: next }));
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(themeStorageKey); } catch { /* Storage may be blocked. */ }
    const restored = resolveTheme(saved);
    document.documentElement.dataset["theme"] = restored;
    setTheme(restored);

    const sync = (event: StorageEvent) => {
      // key === null means localStorage.clear() — re-resolve from scratch.
      if (event.key !== null && event.key !== themeStorageKey) return;
      const next = resolveTheme(event.newValue);
      document.documentElement.dataset["theme"] = next;
      setTheme(next);
    };
    const syncSameTab = (event: Event) => {
      setTheme((event as CustomEvent<Theme>).detail);
    };
    window.addEventListener("storage", sync);
    window.addEventListener(themeChangeEvent, syncSameTab);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(themeChangeEvent, syncSameTab);
    };
  }, []);

  const label = `Switch to ${oppositeTheme(theme)} mode`;
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="size-10 shrink-0 rounded-full border-border/70 bg-background/80"
      aria-label={label}
      title={label}
      onClick={() => {
        const next = oppositeTheme(theme);
        applyTheme(next);
        try { localStorage.setItem(themeStorageKey, next); } catch { /* Switching still works without storage. */ }
      }}
    >
      {theme === "dark" ? <Sun aria-hidden /> : <Moon aria-hidden />}
    </Button>
  );
}