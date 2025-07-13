"use client";

export default function Innovation() {
    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white text-black ">
            <div className="px-6 py-12 max-w-7xl mx-auto space-y-16">

                {/* Introduction */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">Innovation at Nueve Healthcare</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Innovation at Nueve Healthcare is about mastering complexity. We invest heavily in R&D
                        to develop non-infringing, efficient, and scalable synthesis routes for the most challenging APIs,
                        giving our partners a critical competitive edge.
                    </p>
                </section>

                {/* R&D Capabilities */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-bold text-center">R&D Capabilities</h2>
                    <div className="grid gap-8 md:grid-cols-2">

                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">🔬 Process Chemistry</h3>
                            <p>
                                Our expertise in designing novel, cost-effective, and environmentally sustainable chemical processes.
                            </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">🧪 Polymorphism & Crystallization</h3>
                            <p>
                                State-of-the-art labs for characterization and control of polymorphs, ensuring optimal API performance.
                            </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">📊 Analytical Development</h3>
                            <p>
                                A full suite of advanced analytical techniques to ensure purity, stability, and compliance from development to commercial scale.
                            </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">🔏 IP Strategy</h3>
                            <p>
                                Developing proprietary, non-infringing pathways to provide our partners with freedom to operate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technological Advancements */}
                <section className="space-y-6 bg-orange-100 dark:bg-orange-900 p-10 rounded-lg shadow-lg text-center">
                    <h2 className="text-3xl font-bold">Technological Advancements</h2>
                    <p className="text-lg max-w-4xl mx-auto">
                        <span className="font-semibold">Manufacturing for the Future.</span> We embrace Industry 4.0 principles,
                        including the use of process analytical technology (PAT), continuous manufacturing,
                        and green chemistry to enhance efficiency, reduce environmental impact, and ensure consistent quality.
                    </p>
                </section>
            </div>
        </div>
    );
}
