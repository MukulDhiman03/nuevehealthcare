"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "Home" },
        { href: "/company", label: "Company" },
        { href: "/innovation", label: "Innovation" },
        { href: "/apiportfolio", label: "API" },
        { href: "/investors", label: "Investors" },
        { href: "/blogs", label: "Blogs" },
    ];

    return (
        <header>
            <div className="flex justify-between p-2 bg-[var(--bg-gray-color)]">
                <Link href="/">
                    <Image className="" src="/assets/logo.jpg" alt="logo" width={100} height={60} />
                </Link>
                <div className="flex justify-center items-center gap-16 px-2 ">
                    <div>
                        <Link className="text-white font-semibold text-xl p-4 hover:text-black hover:bg-white hover:rounded" href="/contact">📞Contact</Link>
                    </div>
                    <div>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-x-16 p-3 dark:bg-[#3A3A3A] border-b">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`p-4 font-semibold text-xl rounded 
      transition-all duration-300 ease-in-out
      ${pathname === link.href
                                ? "bg-[var(--bg-gray-color)] text-white dark:text-black dark:bg-white"
                                : "text-black dark:text-white dark:hover:border-white dark:hover:text-white hover:text-black hover:border"}
    `}
                    >
                        {link.label}
                    </Link>
                ))}

            </div>
        </header >
    )
}
/*** 
<div className="flex justify-end gap-x-16 p-3 dark:bg-[#3A3A3A] border-b">
    <Link className="p-4 dark:text-white font-semibold text-xl hover:text-white hover:bg-black hover:rounded" href="/">Home</Link>
    <Link href="/company" className="p-4 dark:text-white font-semibold text-xl hover:text-white hover:bg-black hover:rounded">Company</Link>
    <Link href="/innovation" className="p-4 dark:text-white font-semibold text-xl hover:text-white hover:bg-black hover:rounded">Innovation</Link>
    <Link href="/apiportfolio" className="p-4 dark:text-white font-semibold text-xl hover:text-white hover:bg-black hover:rounded">API</Link>
    <Link href="/investors" className="p-4 dark:text-white font-semibold text-xl hover:text-white hover:bg-black hover:rounded">Investors</Link>
    <Link href="/blogs" className="p-4 dark:text-white font-semibold text-xl hover:text-white hover:bg-black hover:rounded">Blogs</Link>
</div>

***/