import React from 'react'
import logoImg from "../assets/netflix_logo.svg"
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className=' h-[60px] bg-black'>
            <nav className='container max-w-full px-4 h-full mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-20'>
                    <Link to={"/"}><img className='h-[40px]' src={logoImg} alt="" /></Link>
                    <ul className='hidden md:flex items-center gap-8 cursor-pointer'>
                        <li>Tv Shows</li>
                        <li>Movies</li>
                        <li>Recently Added</li>
                        <li>My List</li>
                    </ul>
                </div>
                <div>
                    <span className='text-2xl cursor-pointer'><FiSearch /></span>
                </div>
            </nav>

        </header>
    )
}

export default Navbar