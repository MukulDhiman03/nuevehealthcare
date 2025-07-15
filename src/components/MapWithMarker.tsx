import Image from "next/image";

export default function MapWithMarker() {
    return (
        <div className="relative w-full max-w-md mx-auto aspect-[5/4] mt-4">
            {/* Map Image */}
            <Image
                src="/map.png"
                alt="India Map"
                fill
                className="object-contain"
                priority
            />

            {/* Marker */}
            <div
                className="absolute"
                style={{ top: "39%", left: "62%" }}
            >
                <Image
                    src="/marker.png"
                    alt="Uttarakhand Marker"
                    width={20}
                    height={10}
                />
            </div>
        </div>
    );
}
