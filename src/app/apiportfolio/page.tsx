"use client";

import Link from "next/link";

const apiData = [
    {
        name: "Letrozole",
        area: "Oncology",
        cas: "112809-51-5",
        dmf: "Available",
        cep: "Available",
    },
    // Add more APIs here
];

export default function ApiPortfolio() {
    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white p-6">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-10">Our API Portfolio</h1>

                {/* For large screens - Table view */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-lg shadow-lg">
                        <thead className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
                            <tr>
                                <th className="p-4">API Name</th>
                                <th className="p-4">Therapeutic Area</th>
                                <th className="p-4">CAS Number</th>
                                <th className="p-4">DMF Status</th>
                                <th className="p-4">CEP Status</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((api, idx) => (
                                <tr key={idx} className="border-t hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <td className="p-4 font-medium">{api.name}</td>
                                    <td className="p-4">{api.area}</td>
                                    <td className="p-4">{api.cas}</td>
                                    <td className="p-4">{api.dmf}</td>
                                    <td className="p-4">{api.cep}</td>
                                    <td className="p-4">
                                        <Link
                                            href={`/apiportfolio/${api.name.toLowerCase()}`}
                                            className="text-[var(--orange-color)] font-semibold hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* For small screens - Card view */}
                <div className="md:hidden space-y-6">
                    {apiData.map((api, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md space-y-2"
                        >
                            <div>
                                <span className="font-bold">API Name: </span>
                                {api.name}
                            </div>
                            <div>
                                <span className="font-bold">Therapeutic Area: </span>
                                {api.area}
                            </div>
                            <div>
                                <span className="font-bold">CAS Number: </span>
                                {api.cas}
                            </div>
                            <div>
                                <span className="font-bold">DMF Status: </span>
                                {api.dmf}
                            </div>
                            <div>
                                <span className="font-bold">CEP Status: </span>
                                {api.cep}
                            </div>
                            <div>
                                <Link
                                    href={`/apiportfolio/${api.name.toLowerCase()}`}
                                    className="text-[var(--orange-color)] font-semibold hover:underline"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
