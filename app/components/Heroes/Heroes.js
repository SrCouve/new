"use client"
import React from 'react'
import CarouselItemCard from './components/CarouselItemCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

function Heroes() {

    const heroesCardsData = [
        {
            imageUrl: '/assets/cards/loki_legendary.png',
            daily: '1.67%',
            duration: '90 days',
            roi: '150%',
            raritie: 'legendary',
            price: '500'
        },
        {
            imageUrl: '/assets/cards/hela_mythic.png',
            daily: '1.58%',
            duration: '95 days',
            roi: '150%',
            raritie: 'mythic',
            price: '200'
        },
        {
            imageUrl: '/assets/cards/haralder_epic.png',
            daily: '1.5%',
            duration: '100 days',
            roi: '150%',
            raritie: 'epic',
            price: '50'
        },
        {
            imageUrl: '/assets/cards/brok_uncommon.png',
            daily: '1.5%',
            duration: '100 days',
            roi: '150%',
            raritie: 'uncommon',
            price: '10'
        },
    ];


    return (
        <div id="sectionHeroes" className='flex flex-1 w-full min-h-screen'>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 3,
                    perMove: 1,
                    autoplay: 'playing',
                    gap: '15px',
                    breakpoints: {
                        940: {
                            perPage: 2,

                        },
                        640: {
                            perPage: 1,
                        }
                    }

                }}
                className="flex w-full h-fit max-w-[1600px] sm:px-10"
            >
                {heroesCardsData.map((data, index) => (
                    <SplideSlide key={index}>
                        <CarouselItemCard data={data} />
                    </SplideSlide>
                ))}
            </Splide>

        </div>
    )
}

export default Heroes