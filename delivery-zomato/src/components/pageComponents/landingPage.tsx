import React from 'react';
import LocationCards from '../utils/locationCards';
import { useRouter } from 'next/navigation';

const LandingPageComp: React.FC = () => {
    const router = useRouter()

    return (<div className='relative'>
        <div className="h-screen bg-landing-page bg-cover ">

            <ul className='flex justify-end items-center gap-7 pr-10 pt-3 text-white'>
                <li className='cursor-pointer'>How it works</li>
                <li className='cursor-pointer'>For Office</li>
                <li className='cursor-pointer'>Sign Up</li>
                <li>
                    <img src="/assets/images/tag-fill.svg" alt="" />
                </li>
                <li>
                    <img src="/assets/images/bag-dash-fill.svg" alt="" />
                </li>
            </ul>
            <div className='h-full flex flex-col justify-center items-center absolute right-0 left-0 bottom-[300px] text-white'>
                <p className='py-3 text-[32px] font-extrabold outline-red-500'>Zomato</p>
                <div className='pt-2 pb-4 flex items-center'>
                    <p className='text-[24px] font-medium'>Discover the best food & drinks in</p>
                    <p className='text-[24px] font-semibold pl-[10px]'>currentLocation</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-2'>
                    <div className='flex items-center gap-10'>
                        <div className='bg-white rounded-full h-12 w-12 flex justify-center items-center cursor-pointer'>
                            <img src="/assets/images/knife-and-fork.png" className='h-9' alt="" />
                        </div>
                        <div className='bg-white rounded-full h-12 w-12 flex justify-center items-center cursor-pointer'>
                            <img src="/assets/images/cup-straw.svg" className='h-9' alt="" />
                        </div>
                        <div className='bg-white rounded-full h-12 w-12 flex justify-center items-center cursor-pointer'>
                            <img src="/assets/images/basket2.svg" className='h-9' alt="" />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center pt-[25px]'>
                        <input type="text" className='p-2 w-[350px] text-black' />
                        <button onClick={() => router.push('/')} className='bg-red-600 text-white flex justify-center items-center p-2'>Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white flex flex-col px-24'>
            <div className='flex flex-col justify-center items-center py-16 pb-5'>
                <p className='pt-3'>Why order from us ?</p>
                <div className='w-20 border-b-[3px] border-blue-700 pt-4'></div>
                <div className='w-full grid grid-cols-3 items-center py-8'>
                    <div className='col-span-1 flex flex-col justify-center items-center'>
                        <img src="/assets/images/why-order-1.webp" className='h-36' alt="" />
                        <p className='font-bold text-[16px] pt-5 pb-2'>Find Favorites and Discover New Ones</p>
                        <p className='w-[75%] text-center text-[14px]'>Browse thousands of restaurants and stores to get the best of your neighborhood delivered.</p>
                    </div>
                    <div className='col-span-1 flex flex-col justify-center items-center'>
                        <img src="/assets/images/why-order-2.webp" className='h-36' alt="" />
                        <p className='font-bold text-[16px] pt-5 pb-2'>Free, Easy, and Essential</p>
                        <p className='w-[75%] text-center text-[14px]'>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
                    </div>
                    <div className='col-span-1 flex flex-col justify-center items-center'>
                        <img src="/assets/images/why-order-3.webp" className='h-36' alt="" />
                        <p className='font-bold text-[16px] pt-5 pb-2'>Earn Points and Get Rewards</p>
                        <p className='w-[75%] text-center text-[14px]'>Score Delivery Points with every purchase and cash them in for gift cards and other rewards.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white py-10'>
                <div className='flex items-center gap-2'>
                    <p className='text-[20px] font-light'>Popular localities in and around</p>
                    <p className='text-[24px] font-normal'>currentLocation</p>
                </div>
                <div className='w-fit grid grid-cols-3 gap-4 pt-5'>
                    <LocationCards data={[{ heading: "Indiranagar", subHeading: "637 Locations" }]} seeMore />
                </div>
            </div>
        </div>

    </div>);
};

export default LandingPageComp;