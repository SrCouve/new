import React from 'react'
import Image from 'next/image'

function PTEItem({ text, imageUrl }) {
    return (
        <div className='flex flex-1 flex-col'>
            <div>
                <Image
                    src={imageUrl}
                    width={0}
                    height={0}
                    sizes="60vw"
                    alt="Section Top"
                    className="flex w-full h-full object-cover"
                />
            </div>
            <span className="text-center lg:text-xl sm:text- text-xs mt-2">
                {text}
            </span>

        </div>
    )
}

export default PTEItem