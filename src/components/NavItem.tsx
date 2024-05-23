function NavItem({ text }: { text: string }) {
  return (
    <li className='block py-2 pl-3 pr-4 text-white  text-l hover:text-blue-400'>{text}</li>
  )
}

export default NavItem