"use client";

import Image from "next/image";

export default function Coolbg() {
    return (
        <section className="relative w-full h-screen overflow-hidden text-white">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/coolbg.png" // <-- replace with your image
                alt="background"
                fill
                priority
                className="object-fit"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 w-full h-full flex flex-col">

                {/* LOGO */}
                <div className="p-8">
                    <div className="bg-white text-black px-6 py-3 font-bold text-2xl inline-block">
                        LOGO
                    </div>
                </div>

                {/* CENTER CONTENT */}
                <div className="flex-1 flex items-center justify-center px-8">
                    <div className="max-w-3xl space-y-6 text-center">

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS
                            ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                        </h1>

                        <p className="text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
                            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
                            libero urna arcu vulputate sed ut. NisI porta massa diam
                            condimentum nulla quam.
                        </p>

                        <p className="text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                            condimentum ultrices non. Ornare semper in tincidunt pellentesque
                            cras mauris in vitae. At viverra quis eu malesuada vel et
                            porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi
                            feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus
                            vitae leo.
                        </p>

                        <button className="mt-4 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
                            Lorem Ipsum →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
