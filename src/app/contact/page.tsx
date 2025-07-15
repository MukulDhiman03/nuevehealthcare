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

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwYlwl9ZsLrODcFkma4nBiEkkX1baUlw51L5d7h-2uxk9nRvPYsAwpwDPKD0bJa9B6C/exec", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.result === "Success") {
                alert("Thank you! Your inquiry has been submitted.");
                setFormData({
                    name: "",
                    email: "",
                    contact: "",
                    inquiryType: "Sales & Partnerships",
                    message: "",
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed. Please check your internet or try again later.");
        }
    };


    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-8">
                Partner with Nueve Healthcare
            </h1>

            <div className="max-w-3xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl"
                >
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
                            <option value="Sales & Partnerships">
                                Sales & Partnerships
                            </option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="General Inquiries">General Inquiries</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="name">
                            Name
                        </label>
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

                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="email">
                            Email
                        </label>
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

                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="contact">
                            Contact Number
                        </label>
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

                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="message">
                            Message
                        </label>
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

                    <div className="text-center">
                        <button
                            type="submit"
                            className="custom_buttons px-6 py-3 rounded-lg text-white hover:opacity-90 transition-all disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Inquiry"}
                        </button>
                        {success && (
                            <p className="mt-3 text-green-600 font-medium">Form submitted successfully!</p>
                        )}
                    </div>
                </form>

                <div className="mt-10 text-sm text-center dark:text-gray-300">
                    <p>
                        <strong>Sales & Partnerships:</strong>{" "}
                        <a
                            href="mailto:sales@nuevehealthcare.com"
                            className="underline"
                        >
                            sales@nuevehealthcare.com
                        </a>
                    </p>
                    <p>
                        <strong>Technical Support:</strong>{" "}
                        <a
                            href="mailto:technical.support@nuevehealthcare.com"
                            className="underline"
                        >
                            technical.support@nuevehealthcare.com
                        </a>
                    </p>
                    <p>
                        <strong>General Inquiries:</strong>{" "}
                        <a
                            href="mailto:connect@nuevehealthcare.com"
                            className="underline"
                        >
                            connect@nuevehealthcare.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
