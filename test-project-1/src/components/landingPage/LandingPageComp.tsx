
import React, { useState } from "react";
import AlbumSectionComp from "../albumSection/albumSectionComp";
import SteamingControlsComp from "../streamingControlsSection/steamingControlsComp";
import TrackListComp from "../trackListSection/trackListComp";
import MusicVideoComp from "../musicVideoSection/musicVideoComp";
import FooterSectionComp from "../footerSection/footerSectionComp";


const LandingPageComp: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

    return <>
        <div>
            <div className="relative px-[140px] flex justify-center">
                <div className="absolute right-0 flex items-end">
                    {
                        sidebarOpen ? (
                            <div className="h-full w-[4vw] flex flex-col items-end">
                                <div onClick={() => setSidebarOpen(!sidebarOpen)}>c</div>
                                <div >l</div>
                                <div >o</div>
                                <div >s</div>
                                <div >e</div>
                                <div >d</div>
                            </div>
                        ) : (<>
                            <div onClick={() => setSidebarOpen(!sidebarOpen)} className="h-full w-[4vw] flex flex-col items-end">open</div>
                        </>)

                    }
                </div>
                <div>
                    <div className="w-full py-24">
                        <AlbumSectionComp listenLink={'https://www.monstercat.com/release/MCLP017'} />
                    </div>
                    <div className="py-24">
                        <SteamingControlsComp />
                    </div>
                    <div className="pt-14">
                        <TrackListComp />
                    </div>
                    <div className="pt-14">
                        <MusicVideoComp link={'7nObtWENgxA'} />
                    </div>
                    <div className="py-24">
                        <FooterSectionComp />
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default LandingPageComp;
