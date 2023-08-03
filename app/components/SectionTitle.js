
import React from 'react'

function SectionTitle({ title, subtitle, fromColor, toColor }) {



    {
        !fromColor &&
            (fromColor = "from-white")
    }
    {
        !toColor &&
            (toColor = "to-white")
    }

    return (
        <div className="flex flex-col mb-12 text-center">
            <h1 className={`lg:text-7xl sm:text-6xl text-5xl font-normal text-transparent bg-clip-text font-royal bg-gradient-to-b uppercase tracking-wider ${fromColor} ${toColor}`}>
                {title}
            </h1>
            {subtitle &&
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-medium">
                    {subtitle}
                </h2>
            }
        </div>
    )
}

export default SectionTitle