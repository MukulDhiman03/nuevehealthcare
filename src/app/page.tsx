"use client";

export default function Home() {
  return (
    <div className="dark:bg-[var(--bg-gray-color)] dark:text-white">
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Nueve Healthcare: <span className="text-primary">The Foundation of Formulations</span>
            </h1>
            <p className="text-lg">
              Your trusted partner for high-quality, reliable, and compliant Active Pharmaceutical Ingredients.
            </p>
            <p className="text-xl font-medium">
              Purity. Potency. Partnership.
            </p>
            <button className="mt-4 px-6 py-3 rounded-lg custom_buttons">
              Discover Our Expertise
            </button>
          </div>

          {/* Right Video */}
          <div className="flex-1">
            <video
              className="rounded-3xl shadow-lg"
              src="/assets/gif1.mp4"
              width="650"
              height="400"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mt-20 space-y-6 text-center">
          <h2 className="text-3xl font-bold">A Broad & Growing Portfolio</h2>
          <p className="text-lg max-w-3xl mx-auto">
            A robust portfolio of complex APIs, developed through novel chemistry and a commitment to quality.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {["Oncology", "Central Nervous System (CNS)", "Cardiovascular", "Anti-Infectives"].map((category) => (
              <div
                key={category}
                className="px-6 py-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow hover:scale-105 transition-transform"
              >
                {category}
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-3 custom_buttons rounded-lg">
            View Full API Portfolio
          </button>
        </div>

        {/* Brochure Section */}
        <div className="mt-20 bg-gray-100 dark:bg-gray-700 p-10 rounded-xl text-center space-y-4">
          <h2 className="text-2xl font-semibold">Download Corporate Brochure</h2>
          <p className="max-w-2xl mx-auto">
            Explore our capabilities in API development, manufacturing, and regulatory affairs. Download our corporate brochure.
          </p>
          <button className="mt-6 px-6 py-3 custom_buttons rounded-lg">
            Download Brochure
          </button>
        </div>
      </section>
    </div>
  );
}
