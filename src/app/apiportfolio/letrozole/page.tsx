"use client";

export default function LetrozolePage() {
    return (
        <div className="dark:bg-[var(--bg-gray-color)] dark:text-white px-4 py-10">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Letrozole</h1>

                <ul className="space-y-3 text-base sm:text-lg">
                    <li><strong>Chemical Name:</strong> [Full IUPAC Name]</li>
                    <li><strong>Therapeutic Area:</strong> Oncology</li>
                    <li><strong>CAS Number:</strong> 112809-51-5</li>
                    <li><strong>Molecular Formula:</strong> C<sub>17</sub>H<sub>11</sub>N<sub>5</sub></li>
                    <li><strong>Molecular Weight:</strong> 285.3 g/mol</li>
                    <li><strong>Status:</strong> Commercially Available</li>
                    <li><strong>DMF:</strong> Available (USDMF, EDMF)</li>
                    <li><strong>CEP:</strong> Available</li>
                    <li><strong>Compliance:</strong> cGMP, ICH Q7</li>
                </ul>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6">
                    <button className="w-full sm:w-auto px-6 py-3 rounded custom_buttons">
                        Request a Quote
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 rounded custom_buttons">
                        Request a Sample
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 rounded custom_buttons">
                        Download Technical Data Sheet
                    </button>
                </div>
            </div>
        </div>
    );
}
