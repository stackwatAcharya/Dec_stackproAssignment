import React, { useState } from 'react'

interface locationCardsProps {
    data: any,
    seeMore?: boolean
    handleSeeMore?: () => void
}

const LocationCards: React.FC<locationCardsProps> = ({
    data, seeMore, handleSeeMore
}) => {
    const [seeMoreText, setSeeMoreText] = useState<string>("See More")
    const onclickFn = () => {
        if (handleSeeMore)
            handleSeeMore()
        setSeeMoreText((prev) => {
            if (prev === "See More")
                return "See Less"
            else return "See More"
        })
    }

    return (
        <div className="flex gap-3">
            {data.map((item: any, index: number) => (
                <div key={index + 1} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 15px 0px" }} className='col-span-1 bg-white h-[70px] w-[350px] flex justify-between items-center px-4 py-2 rounded-md cursor-pointer'>
                    <div>
                        <p className='font-normal'>{item.heading}</p>
                        <p className='font-light text-gray-300'>{item.subHeading}</p>
                    </div>
                    <img src="/assets/images/chevron-right.svg" className='h-4 cursor-pointer' alt="" />
                </div>
            ))}
            {seeMore && (
                <div onClick={onclickFn} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 15px 0px" }} className='col-span-1 bg-white h-[70px] w-[350px] flex justify-center items-center px-3 py-2 rounded-md'>
                    <div className='flex items-center gap-3 select-none'>
                        <p className='font-normal hover:underline cursor-pointer'>{seeMoreText}</p>
                        <img src="/assets/images/chevron-right.svg" className={`h-3 ${seeMoreText === "See More" ? "rotate-90" : seeMoreText === "See Less" ? "-rotate-90" : "hidden"}`} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default LocationCards