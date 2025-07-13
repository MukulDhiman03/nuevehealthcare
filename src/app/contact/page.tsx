"use client";
import { useState } from "react";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        inquiryType: "Sales & Partnerships",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (API call, toast, etc.)
        console.log(formData);
        alert("Form submitted!");
    };

    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-8">Partner with Nueve Healthcare</h1>

            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl">
                    {/* Inquiry Type Dropdown */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="inquiryType">
                            Inquiry Type
                        </label>
                        <select
                            id="inquiryType"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                            required
                        >
                            <option value="Sales & Partnerships">Sales & Partnerships</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="General Inquiries">General Inquiries</option>
                        </select>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>

                    {/* Contact */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="contact">Contact Number</label>
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="custom_buttons px-6 py-3 rounded-lg text-white hover:opacity-90 transition-all"
                        >
                            Submit Inquiry
                        </button>
                    </div>
                </form>

                {/* Optional Contact Info Below */}
                <div className="mt-10 text-sm text-center dark:text-gray-300">
                    <p><strong>Sales & Partnerships:</strong> <a href="mailto:sales@nuevehealthcare.com" className="underline">sales@nuevehealthcare.com</a></p>
                    <p><strong>Technical Support:</strong> <a href="mailto:technical.support@nuevehealthcare.com" className="underline">technical.support@nuevehealthcare.com</a></p>
                    <p><strong>General Inquiries:</strong> <a href="mailto:connect@nuevehealthcare.com" className="underline">connect@nuevehealthcare.com</a></p>
                </div>
            </div>
        </div>
    );
}
