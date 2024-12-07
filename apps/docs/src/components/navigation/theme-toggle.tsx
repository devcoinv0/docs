// @ts-nocheck
"use client";

import * as React from "react";
import { useTheme } from "@repo/theme";
import { Moon, Sun } from "@repo/icons";
import { Button } from "@repo/ui/button";
import { cn } from "@repo/ui/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
          "h-9 w-9"
      )}
    >
      <Sun className="w-[1.1rem] h-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-[1.1rem] h-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
