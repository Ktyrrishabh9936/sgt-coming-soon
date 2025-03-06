import Image from "next/image"

export default function Choose(){
    const data=[
        // {
        //     img:"/people.png",
        //     head:"Expertise with a Personal Touch",
        //     desc:"Our experienced team, specializing in the EV sector, provides personalized service and meticulous attention to detail, regardless of your project's size."
        // },
        {
            img:"/cng.png",
            head:"Unbeatable CNC Pricing",
            desc:"Get the best rates without compromising on quality"
        },
        {
            img:"/fast.png",
            head:"End-to-End Manufacturing",
            desc:"From prototype to final product, we do it all."
        },
        {
            img:"/medal.png",
            head:"Rapid Turnaround",
            desc:"Fast & efficient production to meet your deadlines"
        },
        {
            img:"/quality.png",
            head:"Precision & Quality",
            desc:"Every product meets the highest industry standards"
        }
    ]
    return<>
        <div className="mt-5" id="choose">
        <h1 className="text-center text-4xl font-semibold">Why Choose SGTMake</h1>
        <div className="m-3 md:m-2 mt-7 flex flex-wrap justify-center gap-6">
            {
                data.map((item,i)=>(
                    <ChooseCard key={i} {...item} /> ))   
            }
        </div>
        </div>
    </>
}

const ChooseCard = ({img,head,desc}) => {
    return<>
        <div className="w-full max-w-sm h-auto shadow-xl rounded-xl bg-white p-4 border border-orange-400 cursor-pointer hover:bg-orange-300 transition-all text-gray-500 hover:text-gray-800">
            <div className="justify-center p-7">
            <div className="justify-center">
                <Image src={img} alt={head} height={60} width={60} className="mx-auto" />  
            </div>
            <div className="p-4 text-center">
                <h3 className="font-medium text-black text-xl mt-2">{head}</h3>
                <p className="text-sm  mt-5">{desc}</p>
            </div>

            </div>
        </div>
    </>

}