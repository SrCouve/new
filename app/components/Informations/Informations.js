import React from 'react'
import Button from '../Button';
import InformationItem from './InformationItem'

function Informations() {

    const infoItemData = [
        {
            imageUrl: '/assets/forplayers.png',
            title: 'For Players',
            content:
                <div className="flex flex-col font-light text-center gap-6 py-3">
                    <span >
                        Recruit heroes and rebuild Asgard to its former
                        glory and be rewarded with HSC along the way!
                    </span>

                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>
                            Earn without investments
                        </h2>
                        <span >
                            You don't need to invest to request a withdraw,
                            everyone gets a free Ingrid after signing up!
                        </span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>
                            Support Team:
                        </h2>
                        <span >
                            Our Support Team is ready to help you and answer
                            your questions on Telegram and Discord!
                        </span>
                    </div>
                </div>
        },
        {
            imageUrl: '/assets/reffer.png',
            title: 'Refferal System',
            content:
                <div className="flex flex-col font-light text-center gap-6 py-3">
                    <span >
                        Invite new players to SoV and earn through our
                        affiliate program:
                    </span>

                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-3xl'>
                            Level 1
                        </h2>
                        <span className='text-2xl'>
                            3% of their deposits
                        </span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-3xl'>
                            Level 2
                        </h2>
                        <span className='text-2xl'>
                            1% of their deposits
                        </span>
                    </div>
                </div>
        },
        {
            imageUrl: '/assets/adv.png',
            title: 'For Advertiser',
            content:
                <div className="flex flex-col text-center gap-6 py-3 items-center">
                    <span className='text-2xl font-light whitespace-pre-line'>
                        Want to promote your project on the
                        banner in our promotion area?{"\n\n"}

                        Contact our Support team
                        and make an offer!
                    </span>
                    <Button text="CONTACT" link={"https://www.google.com/"} />
                </div>
        },
    ];


    return (
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-col-1 w-full gap-10'>
            {infoItemData.map((data, index) => (
                <InformationItem
                    key={index}
                    data={data}
                />
            ))}

        </div>
    )
}

export default Informations