import React from 'react'

function NavLogo({ src, href }: { src: string, href: string }) {
    return (
        <a href={href}>
            <img src={src} className=' pl-3 pr-4 ' width={50} height={50} />
        </a>
    )
}

export default NavLogo