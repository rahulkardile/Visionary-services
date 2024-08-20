import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import logo from "../assets/chat.png"

const Header = () => {
  return (
    <header className='flex w-screen items-center justify-between p-4 text-white '>
        <h1 className="flex items-center gap-2 font-semibold">
          <img src={logo} alt="logo" className='w-10 h-auto' />
            <span>ChatBOT</span>    
        </h1>
        
        <nav className="uppercase flex gap-4 text-xs items-center font-semibold">
            <Link className='hover:text-orange-400 duration-300 ' to={"/"}>Home</Link>
            <Link className='hover:text-orange-400 duration-300 ' to={"/about"}>About</Link>
            <Link className='hover:text-orange-400 duration-300 ' to={"/"}>Contact</Link>
            <Link className='hover:text-orange-400 duration-300 ' to={"/"}>FAQ</Link>
            <Link className='hover:text-orange-400 duration-300 ' to={"/"}>Terms of Use</Link>

            <div className="flex gap-10 font-normal text-lg mx-5">
                <IoSearch className='text-xl hover:text-orange-400 duration-300 cursor-pointer'/>
                <IoNotificationsSharp className='hover:text-orange-400 duration-300 cursor-pointer' />
            </div>
        </nav>
    </header>
  )
}

export default Header