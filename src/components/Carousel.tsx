"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Carousel() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 1,
                spacing: 16,
            },
            breakpoints: {
                "(min-width: 640px)": {
                    slides: { perView: 2, spacing: 16 },
                },
                "(min-width: 1024px)": {
                    slides: { perView: 3, spacing: 16 },
                },
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;

                const clearNextTimeout = () => clearTimeout(timeout);
                const nextTimeout = () => {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 3000); // Auto-slide every 3s
                };

                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });

                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    const images = [
        "/assets/images/img1.jpg",
        "/assets/images/img2.jpg",
        "/assets/images/img3.jpg",
        "/assets/images/img4.jpg",
        "/assets/images/img5.jpg",
        "/assets/images/img6.jpg",
    ];

    return (
        <div ref={sliderRef} className="keen-slider w-full overflow-hidden px-2 py-4">
            {images.map((src, i) => (
                <div
                    key={i}
                    className="keen-slider__slide flex justify-center items-center rounded-lg overflow-hidden"
                >
                    <img
                        src={src}
                        alt={`slide-${i}`}
                        className="w-full h-[300px] object-cover rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
}
