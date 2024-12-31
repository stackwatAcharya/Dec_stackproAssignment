"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AlbumSectionComp: React.FC<any> = ({ listenLink, sharelink }) => {
    const router = useRouter()

    const handleListen = () => {
        router.push(listenLink)
    }

    const handleShare = () => {
        router.push(sharelink)
    }

    return <div>
        <div className="grid grid-cols-2 gap-[10%] items-center pr-[10%]">
            <div className="col-span-1 flex">
                {/* <span className="w-full italic -rotate-90 flex items-end justify-start text-[13px]">
                    <p className="text-[#50A584]">Instinct</p>
                    <p className="whitespace-nowrap">— Released May 22, 2020</p>
                </span> */}
                <div className="w-full">
                    <img src="/images/conro level days album cover.webp" alt="" />
                </div>
            </div>
            <div className="col-span-1 flex flex-col gap-8">
                <div>
                    <div className="text-[48px]">mOHAN aCHARYA</div>
                    <div className="text-[39px]">CONRO</div>
                </div>
                <div className="flex items-center gap-3 pt-5 text-[20px]">
                    <button onClick={handleListen} className="flex items-center gap-2 bg-[#50A584] py-[18px] px-[24px] hover:bg-white hover:text-black border border-[#50A584] hover:border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>

                        <p>LISTEN NOW</p>
                    </button>
                    <button onClick={handleShare} className="flex items-center gap-2  hover:bg-white hover:text-black hover:border-black border border-white py-[18px] px-[18px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>

                        <p>SHARE</p>
                    </button>
                </div>
            </div>
        </div>
    </div >
};

export default AlbumSectionComp;
