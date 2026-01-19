
import LogoFausto from '../assets/LogoFausto'


const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between relative p-4 top-line bottom-line bg-purple-50 dark:bg-purple-900 mx '>
      <LogoFausto className='text-pink-700 dark:text-pink-100 h-8 w-auto' />
    </nav>
  )
}

export default Navbar