import React from 'react'
import Image from 'next/image'
import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

function Community() {
    return (
        <div id='sectionCommunity' className='flex flex-col w-full'>

            <div className="flex w-full sm:h-auto h-52">
                <Image
                    src="/assets/comun.png"
                    width={0}
                    height={0}
                    sizes="90vw"
                    alt="Whitepaper"
                    className="w-full sm:object-contain object-cover object-left-bottom sm:rounded-none rounded-tr-[28px]"
                />
            </div>
            <div className='flex sm:flex-row flex-col flex-wrap w-full font-royal xl:text-6xl lg:text-5xl sm:text-4xl text-3xl justify-center sm:gap-10 gap-4 mt-10'>
                <a href="" target='_blank'>
                    <button className="flex w-full  bg-btnColor hover:scale-105 group active:scale-100 lg:gap-16 gap-8 px-4 py-2 rounded-3xl font-normal uppercase tracking-wider items-center duration-100">
                        <BsDiscord className="xl:text-8xl lg:text-7xl sm:text-6xl text-5xl group-hover:text-backColor2 duration-500" /> <span className='mt-2'>DISCORD</span>
                    </button>
                </a>
                <a href="" target='_blank'>
                    <button className="flex w-full  bg-btnColor hover:scale-105 group active:scale-100 lg:gap-16 gap-8 px-4 py-2 rounded-3xl font-normal uppercase tracking-wider items-center duration-100">
                        <BsTelegram className="xl:text-8xl lg:text-7xl sm:text-6xl text-5xl group-hover:text-backColor2 duration-500" /> <span className='mt-2'>TELEGRAM</span>
                    </button>
                </a>
                <a href="" target='_blank'>
                    <button className="flex w-full  bg-btnColor hover:scale-105 group active:scale-100 lg:gap-16 gap-8 px-4 py-2 rounded-3xl font-normal uppercase tracking-wider items-center duration-100">
                        <BsTwitter className="xl:text-8xl lg:text-7xl sm:text-6xl text-5xl group-hover:text-backColor2 duration-500" /> <span className='mt-2'>TWITTER</span>
                    </button>
                </a>
            </div>

        </div>
    )
}

export default Community