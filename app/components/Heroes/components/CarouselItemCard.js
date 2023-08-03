import React from 'react'
import Image from 'next/image';
import Button from '../../Button';
import Link from 'next/link';

function CarouselItemCard({ data }) {

    let textGradient = "from-white to-white"
    let textColor = "text-white";

    {
        data.raritie == "legendary" ?
            (textGradient = "from-[#FBB400] via-[#FFFFFF] to-[#FFBC12F9]", textColor = "text-[#FBB400]")
            : data.raritie == "mythic" ?
                (textGradient = "from-[#FB0000] via-[#F98686FD] to-[#FF2F12F9]", textColor = "text-[#FB0000]")
                : data.raritie == "epic" ?
                    (textGradient = "from-[#d81aaff9] via-[#df9eebfc] to-[#ae08b1f9]", textColor = "text-[#B972C5]")
                    : data.raritie == "uncommon" ?
                        (textGradient = "from-[#4ce400] via-[#FFFFFF] to-[#4ce400]", textColor = "text-[#4ce400]")
                        : (textColor = "text-white")
    }

    return (

        <div className="items-center flex flex-col max-w-[450px] bg-backColor px-2 py-4 mb-10 mx-auto rounded-xl ">
            <Image
                src={data.imageUrl}
                width={0}
                height={0}
                alt="Card"
                sizes="90vw"
                className="w-full h-full max-h-[550px] mb-2 object-contain hover:scale-105 duration-300"
            />
            <div className="flex flex-col w-full px-5 text-center gap-2 font-semibold text-white sm:text-3xl text-2xl duration-300" >
                <div className='flex w-full bg-[#1A2646] flex-1 justify-between text-lg px-2 py-1 rounded-md'>
                    <h3 className={`flex text-transparent bg-clip-text bg-gradient-to-b from-40% via-50% to-60% ${textGradient}`}>Daily</h3>
                    <span className={`${textColor}`}>{data.daily}</span>
                </div>
                <div className='flex w-full bg-[#1A2646] flex-1 justify-between text-lg px-2 py-1 rounded-md'>
                    <h3 className={`flex text-transparent bg-clip-text bg-gradient-to-b from-40% via-50% to-60% ${textGradient}`}>Duration</h3>
                    <span className={`${textColor}`}>{data.duration}</span>
                </div>
                <div className='flex w-full bg-[#1A2646] flex-1 justify-between text-lg px-2 py-1 rounded-md'>
                    <h3 className={`flex text-transparent bg-clip-text bg-gradient-to-b from-40% via-50% to-60% ${textGradient}`}>ROI</h3>
                    <span className={`${textColor}`}>{data.roi}</span>
                </div>
            </div>

            <div className='flex w-full font-bold px-5 mt-5 justify-between items-center'>
                <Button text={"RECRUIT"} />
                <div className="flex">
                    <span className="lg:text-5xl text-4xl">$</span>
                    <span className="lg:text-6xl text-5xl"> {data.price} </span>
                </div>
            </div>
        </div >

    )
}

export default CarouselItemCard