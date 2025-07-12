"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/company", label: "Company" },
        { href: "/innovation", label: "Innovation" },
        { href: "/apiportfolio", label: "API" },
        { href: "/investors", label: "Investors" },
        { href: "/blogs", label: "Blogs" },
        { href: "/contact", label: "📞 Contact" },
    ];

    return (
        <header className="border-b shadow-sm dark:bg-[var(--bg-gray-color)]">
            {/* Top bar */}
            <div className="flex justify-between items-center px-4 py-3 md:px-6">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/assets/logo.jpg"
                        alt="Logo"
                        width={100}
                        height={50}
                        className="rounded-md object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-3 py-2 rounded-md font-medium text-base transition-colors duration-300 ${pathname === link.href
                                ? "bg-[var(--bg-gray-color)] text-white dark:bg-white dark:text-black"
                                : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white dark:text-white">
                        {menuOpen ? <X size={28} /> : <Menu size={28} style={{ color: " #f36633" }} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 py-3 space-y-3 bg-white dark:bg-[var(--bg-gray-color)] transition-all duration-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-3 py-2 rounded-md font-medium text-base transition-colors duration-200 ${pathname === link.href
                                ? "bg-[var(--bg-gray-color)] text-white dark:bg-white dark:text-black"
                                : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
