"use client";
import Carousel from "@/components/Carousel";


export default function Home() {
  return (
    <div className="dark:bg-[var(--bg-gray-color)] dark:text-white">
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Nueve Healthcare:{" "}
              <span className="text-[var(--orange-color)]">The Foundation of Formulations</span>
            </h1>
            <p className="text-lg">
              Your trusted partner for high-quality, reliable, and compliant Active Pharmaceutical Ingredients.
            </p>
            <p className="text-xl font-medium">Purity. Potency. Partnership.</p>
            <button className="mt-4 px-6 py-3 rounded-lg custom_buttons hover:opacity-90 transition">
              Discover Our Expertise
            </button>
          </div>

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
        <div className="text-center space-y-6">
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
          <button className="mt-6 px-6 py-3 custom_buttons rounded-lg hover:opacity-90 transition">
            View Full API Portfolio
          </button>
        </div>

        {/* Brochure Section */}
        <div className="bg-gray-100 dark:bg-gray-700 p-10 rounded-xl text-center space-y-4">
          <h2 className="text-2xl font-semibold">Download Corporate Brochure</h2>
          <p className="max-w-2xl mx-auto">
            Explore our capabilities in API development, manufacturing, and regulatory affairs. Download our corporate brochure.
          </p>
          <button className="mt-6 px-6 py-3 custom_buttons rounded-lg hover:opacity-90 transition">
            Download Brochure
          </button>
        </div>

        {/* Nueve Advantage */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">The Nueve Advantage: Quality Assured, Supply Secured</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h3 className="font-semibold text-lg">✅ Regulatory Excellence</h3>
              <p>Our facilities are cGMP compliant and successfully inspected by global regulatory bodies like FDA and EMA.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h3 className="font-semibold text-lg">🚚 Secure Supply Chain</h3>
              <p>Robust and redundant manufacturing ensures uninterrupted, on-time delivery worldwide.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h3 className="font-semibold text-lg">🔒 IP & Confidentiality</h3>
              <p>We respect partner IP and operate with complete confidentiality.</p>
            </div>
          </div>
        </div>

        {/* Growth Section */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">Driving Pharmaceutical Growth</h2>
          <div className="grid md:grid-cols-4 gap-6 text-xl font-medium">
            <div>📦 50+ High-Value APIs in Portfolio</div>
            <div>📁 20+ DMFs Filed Globally</div>
            <div>📈 15% YoY Growth in Capacity</div>
            <div>🌎 Serving in 25+ Countries</div>
          </div>
          <button className="mt-6 px-6 py-3 custom_buttons rounded-lg hover:opacity-90 transition">
            Investor Relations
          </button>
        </div>
        {/*Carousel  */}
        <Carousel />
        {/* Testimonial Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Where Science and Careers Flourish</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <p className="italic">"The focus on innovative process chemistry allows me to work at the cutting edge of science."</p>
              <p className="mt-2 font-semibold">— Dr. R. Sharma, Principal Scientist, R&D</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <p className="italic">"Being part of a team that ensures the quality of medicine for millions is incredibly rewarding."</p>
              <p className="mt-2 font-semibold">— Priya Singh, Quality Assurance Manager</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 custom_buttons rounded-lg hover:opacity-90 transition">
            Explore Careers
          </button>
        </div>

        {/* Blog Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Scientific Insights</h2>
          <p className="text-lg">Latest blog posts and updates coming soon...</p>
          {/* Replace with actual blog cards if available */}
        </div>
      </section>
    </div>
  );
}
