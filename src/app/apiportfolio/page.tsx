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
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white p-15">
            <div className=" px-6 py-12 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">Our API Portfolio</h1>

                <div className="overflow-x-auto">
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
            </div>
        </div>
    );
}
