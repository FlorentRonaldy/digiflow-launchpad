import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-muted/50 border border-border" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full bg-muted border border-border hover:border-accent transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Sliding circle */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-foreground shadow-lg transition-all duration-300 ease-in-out ${
          isDark ? "left-7" : "left-1"
        } group-hover:scale-110`}
      >
        {/* Icon inside circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-background" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-background" />
          )}
        </div>
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun
          className={`w-3.5 h-3.5 transition-opacity duration-300 ${
            isDark ? "opacity-30" : "opacity-0"
          } text-muted-foreground`}
        />
        <Moon
          className={`w-3.5 h-3.5 transition-opacity duration-300 ${
            isDark ? "opacity-0" : "opacity-30"
          } text-muted-foreground`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
