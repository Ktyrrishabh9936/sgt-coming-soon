import ServiceCard from "./ServiceCard"

export default function Services() {
    const data = [
        {
            imgSrc: "/threed.png",
            title: "3D Designing",
            description: "Transforming sketches into accurate CAD models"
        },
        {
            imgSrc: "/printing.png",
            title: "3D Printing",
            description: " High-quality prints in plastic & metal"
        },
        {
            imgSrc: "/maching.png",
            title: "CNC Machining",
            description: "Precision-made parts in various materials"
        },
        {
            imgSrc: "/cutting.png",
            title: "Laser Cutting",
            description: "Clean and accurate cuts for all projects"
        },
        {
            imgSrc: "/battery.png",
            title: "Battery Packs",
            description: "Custom-built for EVs, solar, and more"
        },
        {
            imgSrc: "/wiring.png",
            title: "Wrining Harnesses",
            description: " Reliable electrical connections"
        }
    ]
    return (
        <>
            <div className="mt-6" id="services">
                <h1 className="text-center text-4xl font-bold mb-6">Discover Our Services</h1>

                <div className="m-3 md:m-2 mt-3 flex flex-wrap justify-center gap-6">
                    {data.map((item, index) => (
                        <ServiceCard
                            key={index}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>

        </>
    )
}