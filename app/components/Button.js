import React from 'react'

function Button({ text, link, textSize, paddingX }) {

    return (
        <a href={link} target='_blank'>
            <button className={`h-fit w-fit bg-btnColor border-2 border-[#00FFEA] hover:border-[#fff]  ${textSize ? textSize : "text-xl"} uppercase ${paddingX ? paddingX : "px-4"} py-2 rounded-lg hover:scale-105 active:scale-100 duration-100`}>
                {text}
            </button>
        </a>
    )
}

export default Button