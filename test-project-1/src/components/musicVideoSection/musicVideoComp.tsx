"use client";

import React from "react";

const MusicVideoComp: React.FC<any> = ({ link }) => {

    const embeddedUrl = `https://www.youtube.com/embed/${link}`
    return <div>
        <div className="py-10">
            <p className="text-[45px] pb-4">MUSIC VIDEO</p>
            <iframe
                src={embeddedUrl}
                height={'700px'}
                width={'100%'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
        </div>
    </div>
};

export default MusicVideoComp;
