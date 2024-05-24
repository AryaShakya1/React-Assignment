import tailwindLogo from '../assets/tailwind.svg'
import lightTailwindLogo from '../assets/tailwind-light.svg'
import NavItem from './NavItem'
import NavLogo from './NavLogo'
import GithubLogo from '../assets/github-mark-white.svg'
import lightGithubLogo from '../assets/github-mark.svg'
import DarkModeLogo from '../assets/dark-mode.svg'
import LightModeLogo from '../assets/light-mode.svg'

function Navbar({ handleToggle, isDark }: { handleToggle: React.MouseEventHandler<HTMLButtonElement>, isDark: boolean }) {

    return (
        <div className='flex flex-row justify-between px-4'>
            <img src={isDark ? tailwindLogo : lightTailwindLogo} alt="Tailwind Logo" width={200} height={300} />
            <ul className='flex flex-row p-4 mt-0 items-center'>
                <NavItem text='Docs' />
                <NavItem text='Components' />
                <NavItem text='Blog' />
                <NavItem text='Showcase' />

                <button onClick={handleToggle}>
                    <NavLogo src={isDark ? DarkModeLogo : LightModeLogo} />
                </button>
                <NavLogo src={isDark ? GithubLogo : lightGithubLogo} />
            </ul>
        </div>
    )
}

export default Navbar