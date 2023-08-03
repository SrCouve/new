'use client'
import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Image from 'next/image';

function Navbar() {

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


    //Responsive Menu
    const [navbar, setNavbar] = useState(false);

    const mountedStyle =
        "opacity-100 translate-x-0 transition-all"
        ;
    const unmountedStyle = "lg:opacity-100 opacity-0 translate-x-full lg:translate-x-0 transition-all";


    return (
        <div className="flex w-full bg-backColor h-fit sticky top-0 justify-center z-50 overflow-x-clip">
            <nav className="flex w-full max-w-[1600px] min-h-[80px] px-2 sm:px-5">
                <div className="lg:flex w-full sm:justify-between lg:flex-row sm:flex-col lg:items-center">
                    <div className="flex items-center relative justify-between lg:justify-start py-3 lg:py-5">
                        {/*  <img onClick={() => scrollToTop()} className="cursor-pointer lg:w-52 w-36 max-w-[50%]" src="assets/logo.svg" alt="SOV Logo" /> */}
                        <Image
                            onClick={() => scrollToTop()}
                            src="/assets/logo.svg"
                            width={0}
                            height={0}
                            sizes="50vw"
                            alt="Section Fragment"
                            className="cursor-pointer lg:w-44 w-36 flex hover:opacity-90 active:opacity-75 duration-300"
                        />
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-[#ffffff] rounded-md  focus:border-[#ffffff] border-transparent border z-[9999]"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 20 20"
                                        fill="#ffffff"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={`lg:relative absolute lg:w-fit w-full left-0 px-5 z-50 lg:bg-transparent bg-backColor/90 ${navbar ? mountedStyle : unmountedStyle}`}>
                        <div className='flex flex-wrap flex-1 justify-self-center lg:justify-center justify-between gap-x-10 lg:py-0 py-9 lg:pb-0 lg:mt-0'>
                            <ul className="flex lg:flex-row flex-col justify-center [&>a]:flex md:[&>a]:w-24 [&>a]:w-full md:w-fit  [&>a]:h-12 [&>a]:text-center [&>a]:items-center [&>a]:justify-center">
                                {navigation.map((route, index) => (
                                    <React.Fragment key={index}>
                                        {index !== 0 &&
                                            <div className='lg:block hidden text-white my-auto'>
                                                <hr className="h-5 bg-gray-200 border" />
                                            </div>
                                        }
                                        <div className='hover:bg-indigo-900/5 rounded-full lg:py-3 py-2'>
                                            <Link activeClass="active" onClick={() => setNavbar(false)} to={route.to} offset={-115} spy={true} smooth={true} duration={1000} className="cursor-pointer">
                                                <li className="px-4 text-lg hover:text-white/50 active:scale-95 text-white whitespace-nowrap duration-100 select-none">{route.title}</li>
                                            </Link>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </ul>

                            <div className="flex lg:flex-row flex-col justify-center xl:text-2xl text-lg px-4 lg:mt-0 mt-5 gap-5">
                                <button className="flex bg-gradient-to-b from-[#00E276] to-[#24AE42] rounded-2xl xl:w-40 w-32 px-5 py-2 leading-normal justify-center hover:opacity-80 active:scale-95 duration-100">LOGIN</button>
                                <button className="flex bg-gradient-to-b from-[#0F508D] to-backColor rounded-2xl xl:w-40 w-32 px-5 py-2 leading-normal justify-center hover:opacity-80 active:scale-95 duration-100">SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar