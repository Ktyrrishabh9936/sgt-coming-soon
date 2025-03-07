"use client"
import { useState } from "react";
import { Link } from "react-scroll";
export default function HeroPage() {
    const [activeSection, setActiveSection] = useState("home");
    return (
        <div id="home" className="h-screen w-full p-5">
            {/* Hero Section with Background Image */}
            <div className="relative h-full rounded-xl bg-[url('/back.png')] bg-cover bg-center">

                {/* Gradient Overlay for Better Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-lg"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center md:justify-start p-6 md:p-10">
                    <div className="text-white text-center md:text-left max-w-2xl">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Your One-Stop Manufacturing Partner

                        </h1>
                        <div className="mt-4 text-base md:text-lg">
                            <p className=" text-2xl">Custom Parts | Precision Engineering | Fast Turnaround
                            </p>
                           <p>
                           From 3D designing to CNC machining, ensuring quality at unbeatable prices.
                            </p> 
                        </div>
                        <div className="mt-4">
                        <Link  to="contact"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      onSetActive={() => setActiveSection("contact")}  className="bg-orange-500 text-white px-4 py-2 cursor-pointer rounded-md">
         Get Quote Today
        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
