import tailwindLogo from '../assets/tailwind.svg'
import NavItem from './NavItem'
import NavLogo from './NavLogo'
import GithubLogo from '../assets/github-mark-white.svg'
import DarkModeLogo from '../assets/dark-mode.svg'

function Navbar() {
    return (
        <div className='flex flex-row justify-between px-4'>
            <img src={tailwindLogo} alt="Tailwind Logo" width={200} height={300} />
            <ul className='flex flex-row p-4 mt-0 items-center'>
                <NavItem text='Docs' />
                <NavItem text='Components' />
                <NavItem text='Blog' />
                <NavItem text='Showcase' />
                <NavLogo src={DarkModeLogo} href='' />
                <NavLogo src={GithubLogo} href='https://github.com/tailwindlabs/tailwindcss' />
            </ul>
        </div>
    )
}

export default Navbar