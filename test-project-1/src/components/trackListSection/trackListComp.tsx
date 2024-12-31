"use client";

import React from "react";


const songs = [
    {
        id: 1,
        songNo: 1,
        songName: "MOHAN ACJHARYA",
        artist: "CONRO",
        songDuration: "3:35",
    },
    {
        id: 2,
        songNo: 2,
        songName: "Without Your Love",
        artist: "CONRO",
        songDuration: "3:09",
    },
    {
        id: 3,
        songNo: 3,
        songName: "Therapy",
        artist: "CONRO",
        songDuration: "3:06",
    },
    {
        id: 4,
        songNo: 4,
        songName: "Fighters",
        artist: "CONRO",
        songDuration: "3:46",
    },
    {
        id: 5,
        songNo: 5,
        songName: "Way Up",
        artist: "CONRO & Nevve",
        songDuration: "3:32",
    },
    {
        id: 6,
        songNo: 6,
        songName: "Waiting",
        artist: "CONRO",
        songDuration: "3:07",
    },
    {
        id: 7,
        songNo: 7,
        songName: "Dreaming",
        artist: "CONRO",
        songDuration: "2:57",
    },
    {
        id: 8,
        songNo: 8,
        songName: "Tattoo",
        artist: "CONRO",
        songDuration: "3:29",
    },
    {
        id: 9,
        songNo: 9,
        songName: "Out for the Night",
        artist: "CONRO",
        songDuration: "3:05",
    },
    {
        id: 10,
        songNo: 10,
        songName: "Overdue",
        artist: "CONRO",
        songDuration: "2:48",
    },
    {
        id: 11,
        songNo: 11,
        songName: "Say It",
        artist: "CONRO",
        songDuration: "3:04",
    },
    {
        id: 12,
        songNo: 12,
        songName: "Here to Stay",
        artist: "CONRO",
        songDuration: "2:44",
    },

]

const TrackListComp: React.FC = () => {

    return <div>
        <p className="text-[45px]">TRACK LIST</p>
        {songs.map((item: any) =>
            <div key={item.id} className="flex items-center justify-between py-5">
                <div className="flex items-center gap-6">
                    <div>{item.songNo}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    <div className="flex flex-col gap-2">
                        <p className="text-[20px]">{item.songName}</p>
                        <p className="text-[16px]">{item.artist}</p>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <p className="text-[19px]">{item.songDuration}</p>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </div>
                </div>
            </div>
        )}
    </div>
};

export default TrackListComp;


