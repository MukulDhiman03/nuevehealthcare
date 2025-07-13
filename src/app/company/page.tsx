"use client";
import React from "react";

export default function Company() {
    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white text-black">
            <div className=" px-6 py-12 max-w-7xl mx-auto space-y-16">

                {/* Headline Section */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">
                        Powering the Pharmaceutical Industry with Premier APIs
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Nueve Healthcare is a leading, research-driven manufacturer of high-quality Active Pharmaceutical Ingredients (APIs).
                        We partner with pharmaceutical companies globally, from generic leaders to innovative startups,
                        providing the critical foundation they need to bring safe and effective medicines to market.
                    </p>
                </section>

                {/* Mission, Vision, Culture */}
                <section className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p>
                            To be the world's most reliable and innovative API partner, enabling our
                            customers to improve global health through our commitment to scientific excellence and quality.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                        <p>
                            Lead the API industry in complex chemistry and sustainable manufacturing through R&D leadership, regulatory excellence, and strategic partnerships.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Culture & Values</h2>
                        <p>
                            Defined by Precision, Integrity, and Collaboration. We empower our people to solve complex challenges and uphold the highest ethical standards.
                        </p>
                    </div>
                </section>

                {/* Our People Section */}
                <section className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Our People & Expertise</h2>
                    <p className="max-w-4xl mx-auto">
                        A Team of Scientific and Industry Leaders. We showcase the strength of our R&D, regulatory, and manufacturing teams.
                        Our PhD-level scientists and engineers foster a culture of continuous learning and cross-functional expertise.
                    </p>
                </section>

                {/* At a Glance */}
                <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center space-y-6">
                    <h2 className="text-2xl font-bold">Nueve Healthcare At A Glance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>📦 <strong>50+</strong> Commercial APIs</div>
                        <div>🏭 <strong>2</strong> cGMP Manufacturing Sites</div>
                        <div>👩‍🔬 <strong>300+</strong> Dedicated Employees</div>
                        <div>🌍 <strong>20+</strong> Global DMFs/CEPs</div>
                        <div>📅 <strong>Established in</strong> [Year]</div>
                    </div>
                </section>

                {/* Placeholder Sections */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">History and Milestones</h2>
                    {/* <p className="text-gray-600 dark:text-gray-300">[Add company milestones timeline or key achievements here]</p> */}
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-2">Board of Directors and Leadership Team</h2>
                    {/* <p className="text-gray-600 dark:text-gray-300">[Add leadership profiles or team bios here]</p> */}
                </section>
            </div>
        </div>
    );
}