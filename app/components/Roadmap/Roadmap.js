import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

function Roadmap() {
    return (
        <div id="sectionRoadmap" className="flex flex-col w-full">
            <SectionTitle title="ROADMAP" toColor="to-[#FFFFFFA6]" />

            <div className='flex flex-1 lg:flex-row flex-col w-full gap-10'>
                {/* 2023 */}
                <div className="flex flex-1 flex-col">
                    <div class="flex items-center py-4 mb-5">
                        <div class="flex-grow h-px bg-[#FFC000]"></div>
                        <span class="flex-shrink text-4xl text-[#FFC000] px-4 font-royal font-normal tracking-wider">2023</span>
                        <div class="flex-grow h-px bg-[#FFC000]"></div>
                    </div>

                    <div className="grid xl:grid-cols-3 xl:grid-rows-4 grid-cols-1 text-sm font-medium xl:gap-5 gap-10 leading-normal">
                        <div className="flex flex-1 w-full relative xl:row-span-3 mx-auto max-w-md bg-gradient-to-b from-[#FFC000] p-1 rounded-3xl">
                            <div className="flex w-full flex-col py-7 px-5 bg-backColor rounded-3xl">
                                <Image
                                    src="/assets/axe.png"
                                    width={0}
                                    height={0}
                                    sizes="30vw"
                                    alt="Axe"
                                    className="flex absolute w-[33%] max-w-[80px] -translate-x-1/2 -translate-y-1/4 rotate-[20deg] top-0 left-0 object-contain h-auto"
                                />
                                <h1 class="flex-shrink text-center text-6xl -mt-12 font-normal bg-gradient-to-b from-white to-[#FFFFFFA6] text-transparent bg-clip-text px-4 font-royal tracking-wider">
                                    Q2
                                </h1>
                                <span className='text-[#FFC000] whitespace-pre-line xl:text-left text-center'>
                                    Art development{'\n'}
                                    Roadmap development{'\n'}
                                    Project development start{'\n'}
                                    Refferal system development{'\n'}
                                    Creation of Social medias
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 w-full relative xl:row-span-3 mx-auto max-w-md bg-gradient-to-b from-[#FBB400] p-1 rounded-3xl">
                            <div className="flex w-full flex-col py-7 px-5 bg-backColor rounded-3xl">

                                <h1 class="flex-shrink text-center text-6xl -mt-12 font-normal bg-gradient-to-b from-white to-[#FFFFFFA6] text-transparent bg-clip-text px-4 font-royal tracking-wider">
                                    Q3
                                </h1>
                                <span className="mb-5 whitespace-pre-line xl:text-left text-center">
                                    Project development completed{'\n'}
                                    Project Launch{'\n'}
                                    New Hero launch{'\n'}
                                    Beginning of marketing campaign{'\n'}
                                    New Hero launch
                                </span>
                                <Image
                                    src="/assets/token.png"
                                    width={0}
                                    height={0}
                                    sizes="30vw"
                                    alt="Token"
                                    className="flex absolute w-[33%] max-w-[80px] translate-y-1/3 rotate-[20deg] bottom-0 right-0 object-contain h-auto"
                                />


                            </div>
                        </div>
                        <div className="flex flex-1 w-full  relative xl:row-span-4 mx-auto max-w-md bg-gradient-to-b from-[#F50000] p-1 rounded-3xl ">
                            <div className="flex w-full flex-col py-7 px-5 bg-backColor rounded-3xl">
                                <h1 class="flex-shrink text-center text-6xl -mt-12 font-normal bg-gradient-to-b from-white to-[#FFFFFFA6] text-transparent bg-clip-text px-4 font-royal tracking-wider">
                                    Q4
                                </h1>
                                <span className="whitespace-pre-line xl:text-left text-center">
                                    New Hero launch{'\n'}
                                    Item System launch{'\n'}
                                    NFT Collection development{'\n'}
                                    NFT Collection launch{'\n'}
                                    New Hero launch
                                </span>
                                <div className='flex flex-1  min-[1575px]:flex-row xl:flex-col min-[320px]:flex-row flex-col justify-between'>
                                    <div className="flex flex-1 flex-col mt-3 items-center justify-center ">
                                        <span class="text-5xl font-normal bg-gradient-to-b from-white to-[#FFFFFFA6] text-transparent bg-clip-text font-royal drop-shadow-[0_3px_1px_rgba(255,0,0,0.7)]">
                                            MEGA&nbsp;
                                        </span>
                                        <span class="text-5xl font-normal bg-gradient-to-b from-white to-[#FFFFFFA6] text-transparent bg-clip-text font-royal drop-shadow-[0_3px_1px_rgba(255,0,0,0.7)]">
                                            EVENT
                                        </span>
                                    </div>
                                    <Image
                                        src="/assets/warrior.png"
                                        width={0}
                                        height={0}
                                        sizes="30vw"
                                        alt="Warrior"
                                        className="flex w-full self-end flex-1 max-w-[180px] min-w-[120px] translate-y-5  min-[1575px]:translate-x-0 translate-x-5 object-contain h-auto"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* END-2023 */}

                {/* 2024 */}
                <div className="flex flex-1 xl:max-w-[42%] flex-col">
                    <div class="flex items-center py-4 mb-5">
                        <div class="flex-grow h-px bg-[#878FC3]"></div>
                        <span class="flex-shrink text-4xl text-[#878FC3] px-4 font-royal font-normal tracking-wider">2024</span>
                        <div class="flex-grow h-px bg-[#878FC3]"></div>
                    </div>

                    <div className="grid xl:grid-cols-3 xl:grid-rows-4 grid-cols-1 text-sm font-medium xl:gap-5 gap-10 leading-normal">
                        <div className="flex flex-1 w-full xl:row-span-3 mx-auto max-w-md bg-gradient-to-b from-[#878FC3] p-1 rounded-3xl">
                            <div className="flex w-full flex-col py-7 px-5 min-h-[165px] bg-backColor rounded-3xl">
                                <h1 class="flex-shrink text-center text-6xl -mt-12 font-normal bg-gradient-to-b from-[#878FC3] to-[#878FC354] text-transparent bg-clip-text px-4 font-royal tracking-wider">
                                    Q1
                                </h1>
                                <span className='text-[#878FC3] whitespace-pre-line xl:text-left text-center'>
                                    New Hero launch{'\n'}
                                    New Game mode{'\n'}
                                    NFT Collection Event
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 w-full xl:row-span-3 mx-auto max-w-md bg-gradient-to-b from-[#878FC3] p-1 rounded-3xl">
                            <div className="flex w-full flex-col py-7 px-5 min-h-[165px] bg-backColor rounded-3xl">
                                <h1 class="flex-shrink text-center text-6xl -mt-12 font-normal bg-gradient-to-b from-[#878FC3] to-[#878FC354] text-transparent bg-clip-text px-4 font-royal tracking-wider">
                                    Q2
                                </h1>
                                <span className='text-[#878FC3] whitespace-pre-line xl:text-left text-center'>
                                    Playable game development start{'\n'}
                                    New Hero launch{'\n'}
                                    Rank System
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 w-full xl:row-span-3 mx-auto max-w-md bg-gradient-to-b from-[#878FC3] p-1 rounded-3xl">
                            <div className="flex w-full flex-col py-7 px-5 min-h-[165px] bg-backColor rounded-3xl">
                                <h1 class="flex-shrink text-center text-6xl -mt-12 font-normal bg-gradient-to-b from-[#878FC3] to-[#878FC354] text-transparent bg-clip-text px-4 font-royal tracking-wider">
                                    Q3
                                </h1>
                                <span className='text-[#878FC3] whitespace-pre-line xl:text-left text-center'>
                                    Playable game launch{'\n'}
                                    New Hero launch{'\n'}
                                    New Game mode{'\n'}
                                    and more.
                                    
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                {/* END-2024 */}
            </div>
        </div>
    )
}

export default Roadmap