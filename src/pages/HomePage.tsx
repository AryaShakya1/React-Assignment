import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchIcon from '../assets/search.svg'
import Profile from '../components/Profile'
import Card from '../components/Card'
import Footer from '../components/Footer'

function HomePage() {

    const cardItems = [
        {
            profileImage: 'https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg', name: 'Ryan Florence', role: 'Remix & React Training', review: 'I feel like an idiot for not using Tailwind CSS until now.',
        },
        {
            profileImage: 'https://tailwindcss.com/_next/static/media/debbie-obrien.69d3104d.jpg', name: "Debbie O' Brien", role: 'Senior Program Manager at Microsoft', review: "Have been working with CSS for over ten years and Tailwind just makes my life easier.It is still CSS and you use flex, grid, etc.but just quicker to write and maintain.",
        },
        {
            profileImage: 'https://tailwindcss.com/_next/static/media/kentcdodds.90894efe.jpg', name: 'Kent C. Dodds', role: 'Developer and Educator', review: 'Skip to the end. Use @tailwindcss.',
        },
        {
            profileImage: 'https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg', name: 'Guillermo Rauch', role: 'Vercel', review: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.',
        },
        {
            profileImage: 'https://tailwindcss.com/_next/static/media/frontendben.7c4b54bd.jpg', name: 'Ben Furfie', role: 'Developer', review: 'I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.',
        },
        {
            profileImage: 'https://tailwindcss.com/_next/static/media/shrutibalasa.8c3514ba.jpg', name: 'Shruti Balasa', role: 'Full Stack Web Developer & Tech Educator', review: 'I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
        },
    ]


    return (
        <div className='flex flex-col bg-[#0A1322] min-h-screen'>
            <Navbar />
            <HeroSection primaryText='Rapidly build modern websites without ever leaving your HTML.' secondaryText='A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.' />
            <div className='flex flex-row justify-center'>
                <button className='px-6 mx-4 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-bold py-3  '>Get Started</button>
                <div className="flex items-center bg-gray-800 rounded-md p-2">
                    <img className="h-5 w-5 text-gray-500 mr-2" src={SearchIcon} />
                    <input
                        type="text"
                        placeholder="Quick Search..."
                        className="bg-gray-800 focus:outline-none flex-1 text-white"
                    />
                </div>
            </div>
            <div className='mt-16'></div>
            <HeroSection primaryText='“Best practices” don’t actually work.' secondaryText='I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.' />
            <Profile profileImage='https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg' name='Adam Wathan' role='Creator of Tailwind CSS' />
            <div className='mt-16'></div>
            <div className="grid gap-4 grid-cols-3 max-h-[33rem] overflow-hidden mx-auto px-4 relative max-w-7xl">
                {cardItems.map((cardItem, index) =>
                    (<Card profileImage={cardItem.profileImage} name={cardItem.name} role={cardItem.role} review={cardItem.review} key={index} />)
                )}
            </div>
            <div className='mt-16'></div>
            <Footer />

        </div>
    )
}

export default HomePage