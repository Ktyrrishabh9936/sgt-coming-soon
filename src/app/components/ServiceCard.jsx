import Image from 'next/image';

const ServiceCard = ({ imgSrc, title, description }) => {
    return (
        <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 cursor-pointer  transition-transform duration-300 ease-in-out group">
           
            <div className="relative h-60">
                <Image src={imgSrc} alt={title}  objectFit="cover" width={900} height={600}  className='h-full'/>
                <div className="absolute inset-0 bg-gradient-to-t from-white group-hover:bg-none transition-all  duration-500 via-white/25 to-transparent"></div>
            </div>
            <div className="mt-1 p-5 text-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
