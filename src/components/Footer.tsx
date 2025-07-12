import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-[var(--bg-gray-color)] dark:text-white text-black px-6 pt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-gray-300 dark:border-gray-700">
                {/* Logo & Vision */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <Link href="/">
                        <Image
                            src="/assets/logo.jpg"
                            alt="Logo"
                            width={150}
                            height={60}
                            className="rounded-md object-contain mb-4"
                        />
                    </Link>
                    <p className="text-sm mb-3">
                        To be the world's most reliable and innovative API partner, enabling our customers to improve global health through our commitment to scientific excellence and quality.
                    </p>
                    <p className="text-sm">
                        Our vision is to lead the API industry in complex chemistry and sustainable manufacturing through R&D leadership, regulatory excellence, and customer-centric partnerships.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                        <li><Link href="/investors" className="hover:underline">Investors</Link></li>
                        <li><Link href="/apiportfolio" className="hover:underline">API Portfolio</Link></li>
                        <li><Link href="/quality" className="hover:underline">Quality & Compliance</Link></li>
                        <li><Link href="/blogs" className="hover:underline">Behind the Scene (Blogs)</Link></li>
                        <li><Link href="/terms" className="hover:underline">Terms of Use</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <p className="text-sm mb-2">📞 Call: +91-XXX-XXXXXXX</p>
                    <p className="text-sm mb-2">
                        📧 Email:{" "}
                        <a className="hover:underline" href="mailto:connect@nuevehealthcare.com">
                            connect@nuevehealthcare.com
                        </a>
                    </p>

                    <h3 className="text-md font-semibold mt-6 mb-2">Inquiries</h3>
                    <ul className="space-y-2">
                        <li><Link href="/sales-inquiry" className="hover:underline">Sales Inquiry</Link></li>
                        <li><Link href="/technical-inquiry" className="hover:underline">Technical Inquiry</Link></li>
                        <li><Link href="/media-relations" className="hover:underline">Media Relations</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-6 py-4 border-t border-gray-300 dark:border-gray-700">
                &copy; {new Date().getFullYear()} Nueve Healthcare. All rights reserved.
            </div>
        </footer>
    );
}
