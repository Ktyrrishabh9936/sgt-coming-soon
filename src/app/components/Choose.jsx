import Image from "next/image"

export default function Choose(){
    const data=[
        {
            img:"/people.png",
            head:"Expertise with a Personal Touch",
            desc:"Our experienced team, specializing in the EV sector, provides personalized service and meticulous attention to detail, regardless of your project's size."
        },
        {
            img:"/cng.png",
            head:"Unbeatable CNC Pricing",
            desc:"We offer globally competitive CNC machining prices, maximizing your budget without compromising quality."
        },
        {
            img:"/fast.png",
            head:"Fast, Reliable Tournarounds",
            desc:"We handle everything from design and prototyping to full-scale manufacturing, simplifying your project management."
        },
        {
            img:"/medal.png",
            head:"One Stop Shop for Product Development",
            desc:"We handle everything from design and prototyping to full-scale manufacturing, simplifying your project management."
        },
        {
            img:"/window.png",
            head:"Turning Ideas into Reality",
            desc:"We're dedicated to helping you bring your concepts to life, providing the expertise and resources to make it happen."
        },
       
        {
            img:"/quality.png",
            head:"Uncompromising Quality & Precision",
            desc:"From concept to completion, we maintain the highest standards, ensuring exceptional results every time."
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