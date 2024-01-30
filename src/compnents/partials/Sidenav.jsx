import React from 'react'
import { Link } from 'react-router-dom'
import Trending from '../Trending'

const Sidenav = () => {
  return (
    
      <div className='w-[20%] h-full border-r-2 border-zinc-400 p-3'>
        <h1 className='text-white text-2xl font-bold'>
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span className='text-2xl'>SCSDB</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-fire-fill"></i> Trending
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-bard-fill"></i> Popular
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-movie-2-fill"></i> Movies
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-tv-2-fill"></i>  Tv Shows
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-team-fill"></i> People
            </Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400'/>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-information-fill"></i> About SCSDB
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-phone-fill"></i> Contact Us
            </Link>
            
        </nav>
      </div>
 
  )
}

export default Sidenav
