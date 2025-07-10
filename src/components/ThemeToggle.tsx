"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const isDarkEnabled = savedTheme === "dark" || (!savedTheme && prefersDark);
        document.documentElement.classList.toggle("dark", isDarkEnabled);
        setIsDark(isDarkEnabled);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        setIsDark(!isDark);
    };

    if (isDark === null) return null; // Don't render until theme is known

    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm text-white">
                {isDark ? "Light" : "Dark"} Mode
            </span>
            <button
                onClick={toggleTheme}
                className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${isDark ? "bg-gray-800" : "bg-gray-300"
                    }`}
            >
                <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isDark ? "translate-x-6" : "translate-x-0"
                        }`}
                />
            </button>
        </div>
    );
}
