"use client";
import { useState } from "react";

const categories = ["All", "Process Chemistry", "Regulatory Affairs", "Market Trends"];

const blogPosts = [
    {
        title: "The Critical Role of Polymorph Screening in API Development",
        category: "Process Chemistry",
        pdf: "/assets/pdfs/polymorph-screening.pdf",
    },
    {
        title: "Green Chemistry: Nueve's Approach to Sustainable API Manufacturing",
        category: "Process Chemistry",
        pdf: "/assets/pdfs/green-chemistry.pdf",
    },
    {
        title: "Navigating the Evolving Landscape of Global Regulatory Filings",
        category: "Regulatory Affairs",
        pdf: "/assets/pdfs/global-regulatory-filings.pdf",
    },
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white min-h-screen px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-10">
                Scientific Insights & Resources
            </h1>

            {/* Filters */}
            <div className="flex justify-center gap-4 flex-wrap mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full border font-medium ${selectedCategory === cat
                            ? "bg-[var(--orange-color)] text-white"
                            : "bg-transparent dark:border-gray-500 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredPosts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                            <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">
                                Category: {post.category}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-4 text-sm">
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nuevehealthcare.com/blogs/${index}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Share on LinkedIn
                                </a>
                                <a
                                    href={`mailto:?subject=Check this article from Nueve Healthcare&body=Read this: https://nuevehealthcare.com/blogs/${index}`}
                                    className="text-green-600 hover:underline"
                                >
                                    Share via Email
                                </a>
                            </div>
                            <a
                                href={post.pdf}
                                download
                                className="text-[var(--orange-color)] font-medium hover:underline"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
