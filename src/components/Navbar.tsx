import React from 'react'
import tailwindLogo from '../assets/tailwind.svg'

function Navbar() {
    return (
        <div className='flex flex-row justify-between'>
            <img src={tailwindLogo} alt="Tailwind Logo" width={300} height={300}/>
            <div>Navbar</div>
        </div>
    )
}

export default Navbar