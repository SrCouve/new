import React from 'react'
import Image from 'next/image'

function InformationItem({ data }) {
    return (
        <div className="flex flex-col flex-1 w-full mt-24 max-w-[550px] bg-backColor sm:px-16 px-8 py-4 mx-auto rounded-3xl items-center">
            <div className="flex -mt-[30%] sm:aspect-square aspect-video">
                <Image
                    src={data.imageUrl}
                    width={0}
                    height={0}
                    alt="Card"
                    sizes="90vw"
                    className="w-full h-full flex-1 object-cover hover:scale-105 duration-100"
                />
            </div>
            <div className="flex flex-1 flex-col pt-5">
                <h1 className="text-center font-bold text-secondary capitalize sm:text-4xl text-3xl" >
                    {data.title}
                </h1>
                {data.content}
            </div>

        </div >
    )
}

export default InformationItem