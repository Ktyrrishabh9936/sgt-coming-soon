"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IndustryComponent() {
    const data = [
        { tag: "Fasteners", img: "/fastner.png" },
        { tag: "Tools", img: "/tools.png" },
        { tag: "Equipments", img: "/equipment.png" },
        { tag: "EV Parts", img: "/evpart.png" },
    ];

    const [index, setIndex] = useState(0);
    const nextSlide = () => setIndex((prev) => (prev + 1) % data.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

    return (
        <div className="p-7 bg-white mt-10 mb-7">
            <div className="flex justify-between items-center mb-4">
                <div className="">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-7">Industrial Components & Supplies</h2>
                </div>
                <div className="flex space-x-2">
                    <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                        <ChevronLeft size={30} />
                    </button>
                    <button onClick={nextSlide} className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600">
                        <ChevronRight size={30} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-3 mt-7">
                {data.map((item, i) => (
                    <Card key={i} tag={item.tag} img={item.img} active={i === index} />
                ))}
            </div>
        </div>
    );
}

const Card = ({ tag, img, active }) => {
    return (
        <div className={`relative rounded-xl overflow-hidden shadow-lg transition-transform ${active ? 'scale-105' : 'scale-100'}`}>
            <img src={img} alt={tag} className="w-full h-60 object-cover"/>
            <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                {tag}
            </div>
        </div>
    );
};
