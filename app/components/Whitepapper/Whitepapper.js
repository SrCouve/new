import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import Button from '../Button'

function Whitepapper() {
    return (
        <div id="sectionWhitep" className="flex flex-1 flex-col w-full bg-gradient-to-b from-backColor items-center sm:px-10 px-4 py-20 rounded-3xl">
            <SectionTitle title="WHITEPAPER" subtitle="Learn all about the project" toColor="to-[#FFFFFFA6]" />

            <div className="flex flex-col flex-1 w-full max-w-[1540px] gap-5 mt-5 items-center">
                <Image
                    src="/assets/wp.png"
                    width={0}
                    height={0}
                    sizes="90vw"
                    alt="Whitepaper"
                    className="flex w-full object-contain hover:scale-105 duration-700"
                />
                <Button text="Learn more" textSize="sm:text-3xl text-2xl" paddingX="sm:px-8 px-6" link="https://www.google.com/" />
            </div>
        </div>
    )
}

export default Whitepapper