import React from 'react'

const MainPageComp: React.FC<any> = () => {
    return (
        <div>
            <div>navbar</div>
            <div>tabs</div>
            <div className='flex'>
                <div className=' h-full w-[10%] bg-red-500'>sidebar</div>
                <div className='h-full w-full bg-blue'>
                    content area
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default MainPageComp