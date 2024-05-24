function NavItem({ text }: { text: string }) {
  return (
    <li className='block py-2 pl-3 pr-4 text:black dark:text-white  text-l hover:text-blue-400 dark:hover:text-blue-400'>{text}</li>
  )
}

export default NavItem