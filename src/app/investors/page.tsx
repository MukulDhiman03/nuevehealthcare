"use client";

export default function InvestorsPage() {
    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white px-6 py-11 ">
            {/* Headline */}
            <h1 className="text-4xl font-bold text-center mb-6">
                Investing in the Engine of the Pharmaceutical Industry
            </h1>

            {/* Intro Text */}
            <p className="text-lg max-w-3xl mx-auto text-center mb-12">
                Nueve Healthcare represents a unique investment in the foundational layer of the pharma industry.
                Our strategy is focused on sustainable growth through a high-value API pipeline, expansion of
                manufacturing capabilities, and forging long-term partnerships with global leaders.
            </p>

            {/* Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-semibold mb-2">Shareholder Information</h2>
                    <p className="text-sm">
                        Transparent, detailed, and timely reports for stakeholders and shareholders.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-semibold mb-2">Corporate Governance</h2>
                    <p className="text-sm">
                        Guided by ethical leadership, compliance, and accountability at every level.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-semibold mb-2">Stock Info</h2>
                    <p className="text-sm">
                        View up-to-date company stock insights, performance charts, and investment data.
                    </p>
                </div>
            </div>
        </div>
    );
}
