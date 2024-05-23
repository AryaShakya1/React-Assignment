import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchIcon from '../assets/search.svg'

function HomePage() {
    return (
        <div className='flex flex-col bg-[#0A1322] min-h-screen'>
            <Navbar />
            <HeroSection primaryText='Rapidly build modern websites without ever leaving your HTML.' secondaryText='A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.' />
            <div className='flex flex-row justify-center'>
                <button className='px-6 mx-4 rounded-md bg-green-500 hover:bg-green-400 text-white font-bold py-3  '>Get Started</button>
                <div className="flex items-center bg-gray-800 rounded-md p-2">
                    <img className="h-5 w-5 text-gray-500 mr-2" src={SearchIcon} />
                    <input
                        type="text"
                        placeholder="Quick Search..."
                        className="bg-gray-800 focus:outline-none flex-1 text-white"
                    />
                </div>            </div>
            <HeroSection primaryText='“Best practices” don’t actually work.' secondaryText='I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.' />
        </div>
    )
}

export default HomePage