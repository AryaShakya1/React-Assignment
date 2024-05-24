import React from 'react'

function HeroSection({ primaryText, secondaryText }: { primaryText: string, secondaryText: string }) {
    return (
        <div className='flex flex-col items-center justify-center p-4 '>
            <p className='text-white text-6xl font-extrabold text-center p-6 max-w-6xl'>{primaryText}</p>
            <p className='text-white text-xl text-center p-4 max-w-[52rem]' >{secondaryText}</p>
        </div>
    )
}

export default HeroSection