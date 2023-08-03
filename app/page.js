import Image from 'next/image'
import TopInfoItem from './components/TopInfoItem'
import PlayToEarn from './components/PlayToEarn/PlayToEarn';
import Heroes from './components/Heroes/Heroes';
import Informations from './components/Informations/Informations';
import '@splidejs/splide/dist/css/splide.min.css';
import Whitepapper from './components/Whitepapper/Whitepapper';
import Community from './components/Community/Community';
import Roadmap from './components/Roadmap/Roadmap';

export default function Home() {

  const topInfoData = [
    {
      title: 'Users',
      count: '520 000',
      imageUrl: '/assets/users.png',
    },
    {
      title: 'Paid Out',
      count: '2 000 000',
      imageUrl: '/assets/paid-out.png',
    },
    {
      title: 'Time in operation',
      count: '150',
      text: 'Days',
      imageUrl: '/assets/time.png',
    },
  ];

  return (
    <main className="flex w-full min-h-screen flex-col items-center sm:py-24 my-12 gap-y-16">
      {/* SECTION TOP */}
      <div className="flex flex-1 w-full flex-col min-w-[440px] items-center">
        <div className="flex relative w-full px-[5%] h-auto items-center">
          <Image
            src="/assets/bg-top.webp"
            width={0}
            height={0}
            sizes="90vw"
            alt="Section Top"
            className="flex w-full object-contain h-auto"
          />
          <Image
            src="/assets/dwar.webp"
            width={0}
            height={0}
            sizes="50vw"
            alt="Dwar"
            className="flex absolute my-auto left-0 w-[40%]  h-auto"
          />

          <Image
            src="/assets/ingrid.webp"
            width={0}
            height={0}
            sizes="50vw"
            alt="Ingrid"
            className="flex absolute my-auto right-0 w-[40%] h-auto"
          />
        </div>

        <div className="flex flex-1 w-full flex-col sm:flex-row sm:flex-wrap sm:max-w-full max-w-[100vw] gap-x-5 gap-y-[10%] top-[5%] z-10 sm:justify-center sm:items-start items-center sm:px-0 px-2">
          {topInfoData.map((data, index) => (
            <TopInfoItem
              key={index}
              title={data.title}
              count={data.count}
              text={data.text}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>
      {/* END ~ SECTION TOP */}

      <PlayToEarn />

      <Heroes />

      <Informations />

      <Whitepapper />

      <Roadmap />

      <Community />

    </main>
  )
}
