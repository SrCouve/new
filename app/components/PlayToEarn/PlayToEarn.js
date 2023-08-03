import React from 'react'
import SectionTitle from '../SectionTitle'
import PTEItem from './components/PTEItem'

function PlayToEarn() {

    const pteInfoData = [
        {
            text: 'Recruit legendary heroes, uncover secrets, rebuild Asgard and gather HackSilver Coins along your journey.',
            imageUrl: '/assets/pte1.png',
        },
        {
            text: 'Exchange your HSC for USDT sending them directly from our platform to your wallet.',
            imageUrl: '/assets/pte2.png',
        },
        {
            text: 'An innovative NFT Universe that will merge three worlds into one: Play to earn, NFT Arts Collection and passive income.',
            imageUrl: '/assets/pte3.png',
        },
    ];


    return (
        <div id="sectionPTE" className="flex w-full flex-1 flex-col text-primary font-medium leading-normal bg-backColor2 py-20 sm:px-10 px-4 items-center">
            <SectionTitle title={"Play To Earn"} fromColor={"from-[#66AFF3]"} toColor={"to-[#66AFF399]"} />
            <p className="lg:text-2xl sm:text-lg text-base">
                Venture into the epic universe of Shadow of Valhala, a game based on the "Play to Earn" concept that transports
                you to a mythical world while you earn real money. Play directly from your browser, with no downloads required.
            </p>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full flex-wrap flex-1 gap-10 mt-5">
                {pteInfoData.map((data, index) => (
                    <PTEItem
                        key={index}
                        text={data.text}
                        imageUrl={data.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default PlayToEarn