'use client'
import React from 'react'
import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {

    const navigation = [
        {
            title: 'PLAY TO EARN',
            to: 'sectionPTE'
        },
        {
            title: 'HEROES',
            to: 'sectionHeroes'
        },
        {
            title: 'WHITEPAPER',
            to: 'sectionWhitep'
        },
        {
            title: 'ROADMAP',
            to: 'sectionRoadmap'
        },
        {
            title: 'COMMUNITY',
            to: 'sectionCommunity'
        }

    ]


    //Sroll to top 
    function scrollToTop() {
        scroll.scrollToTop();
    };

    return (
        <div className="flex flex-col font-medium">
            <div className="flex w-full bg-backColor justify-center">
                <div className="flex w-full flex-col max-w-[1600px] items-center px-2 sm:px-5">
                    <ul className="flex min-[400px]:flex-row flex-col flex-wrap justify-center sm:my-12 my-8">
                        {navigation.map((route, index) => (
                            <React.Fragment key={index}>
                                {index !== 0 &&
                                    <div className='md:block hidden text-white my-auto'>
                                        <hr className="h-5 bg-gray-200 border" />
                                    </div>
                                }
                                <div className='hover:bg-indigo-900/5 rounded-full lg:py-3 py-2'>
                                    <Link activeClass="active" to={route.to} offset={-115} spy={true} smooth={true} duration={1000} className="cursor-pointer">
                                        <li className="px-4 text-lg hover:text-white/50 active:scale-95 text-white whitespace-nowrap duration-100 select-none">{route.title}</li>
                                    </Link>
                                </div>
                            </React.Fragment>
                        ))}
                    </ul>

                    <Image
                        onClick={() => scrollToTop()}
                        src="/assets/logo.svg"
                        width={0}
                        height={0}
                        sizes="90vw"
                        alt="Footer Logo"
                        className="flex cursor-pointer lg:w-64 w-40 mb-16 hover:opacity-90 active:opacity-75 duration-300"
                    />
                </div>

            </div>

            <div className="flex bg-[#102646] w-full justify-center">
                <div className="flex w-full flex-col max-w-[1600px] items-center py-7 px-2 sm:px-5">
                    <span className="lg:text-xl sm:text-base text-sm text-center">© SHADOWS OF VALHALLA 2023 All rights reserved</span>
                </div>
            </div>

        </div>
    )
}

export default Footer