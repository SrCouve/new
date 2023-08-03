import React from 'react'
import Image from 'next/image'

function TopInfoItem({ title, count, text, imageUrl }) {
    return (
        <div className="flex relative sm:flex-1 flex-col sm:h-[260px] h-[215px] w-full max-w-[420px] sm:max-w-full sm:min-w-[260px] bg-backColor rounded-3xl">
            <div className="flex w-full bg-gradient-to-b from-[#0F508D] to-[#57A8F4] rounded-t-3xl items-center py-2 px-7">
                <h2 className="lg:text-3xl sm:text-2xl text-xl">{title}</h2>
            </div>

            <div className="flex w-full h-full p-7 items-end border-2 border-[#57A8F4] rounded-b-3xl">
                <span className="xl:text-6xl sm:text-5xl text-3xl">{count}&nbsp;</span>
                {text &&
                    <span className="lg:text-5xl sm:text-4xl text-2xl font-medium">{text}</span>
                }

            </div>

            <Image
                src={imageUrl}
                width={0}
                height={0}
                sizes="50vw"
                alt="Users"
                className="flex absolute max-w-[200px] max-h-[90%] object-contain w-[40%] -top-[13%] right-0 mr-[2%] h-auto"
            />
        </div>
    )
}

export default TopInfoItem