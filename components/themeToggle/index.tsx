'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// lucide icons sun moon
import { Sun, Moon } from 'lucide-react';

// ThemeToggle component
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  // If not mounted, don't show anything
  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Light/Dark Mode"
      type="button"
      role="button"
      className="w-10 h-10 p-2 bg-tranparent"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
}
