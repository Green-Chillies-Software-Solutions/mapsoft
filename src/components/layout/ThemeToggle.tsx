import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { oppositeTheme, resolveTheme, themeStorageKey, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(themeStorageKey); } catch { /* Storage may be blocked. */ }
    const restored = resolveTheme(saved);
    document.documentElement.dataset["theme"] = restored;
    setTheme(restored);
    const sync = (event: StorageEvent) => {
      if (event.key !== themeStorageKey) return;
      const next = resolveTheme(event.newValue);
      document.documentElement.dataset["theme"] = next;
      setTheme(next);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const label = `Switch to ${oppositeTheme(theme)} mode`;
  return (
    <Button
      variant="outline"
      size="icon"
      className="size-10 shrink-0 rounded-full border-border/70 bg-background/80"
      aria-label={label}
      title={label}
      onClick={() => {
        const next = oppositeTheme(theme);
        document.documentElement.dataset["theme"] = next;
        setTheme(next);
        try { localStorage.setItem(themeStorageKey, next); } catch { /* Switching still works without storage. */ }
      }}
    >
      {theme === "dark" ? <Sun aria-hidden /> : <Moon aria-hidden />}
    </Button>
  );
}