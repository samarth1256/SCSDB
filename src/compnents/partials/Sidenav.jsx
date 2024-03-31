import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Trending from '../Trending'

const Sidenav = () => {
  const [toggle,setToggle]=useState(false)
  return (
    
      <div className='w-[20%] h-screen border-r-2 border-zinc-400 p-3'>
        <h1 className='text-white  sm:text-2xl font-bold'>
        <i className="ri-tv-fill text-[#6556CD] sm:ml-0 -ml-2 sm:mr-2"></i>
        <span className='sm:text-2xl'>SMDB</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 sm:text-xl text-[0.8rem] gap-2 sm:gap-3 mb-2 sm:mb-0'>
            <h1 className='text-white font-semibold sm:text-xl text-[1.2rem]  mt-10 sm:mb-5'>New feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg p-1 sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-fire-fill"></i> Trending
            </Link>
            <Link to="/popular" className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg p-1 sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-bard-fill"></i> Popular
            </Link>
            <Link to="/movie" className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg p-1 sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-movie-2-fill"></i> Movies
            </Link>
            <Link to="/tv" className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg p-1 sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-tv-2-fill"></i>  Tv Shows
            </Link>
            <Link to='/people' className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg p-1 sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-team-fill"></i> People
            </Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400'/>
        <nav className='flex flex-col text-zinc-400 sm:text-xl text-[0.8rem] gap-4 sm:gap-3 '>
            <h1 className='text-white font-semibold text-[0.8rem] sm:text-xl mt-7 sm:mt-10 sm:mb-5'>Website Info</h1>
            <Link className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-information-fill"></i> About SCSDB
            </Link>
            <Link className='hover:bg-[#6556CD] w-[15vw] sm:w-[18.5vw] hover:text-white duration-300 rounded-lg sm:p-5 sm:mb-0 mb-1'>
            <i className="ri-phone-fill"></i> Contact Us
            </Link>


            
        </nav>
{/* 
        <div className='sm:hidden flex, flex-1 justify-end items-center'>
           <i className={`${toggle?'ri-close-fill':'ri-menu-line'} w-[28px] h-[28px] cursor-pointer`}onClick={()=>setToggle(!toggle)} ></i>
           <div className={`${!toggle?"hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
           <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-fire-fill"></i> Trending
            </Link>
            <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-bard-fill"></i> Popular
            </Link>
            <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-movie-2-fill"></i> Movies
            </Link>
            <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-tv-2-fill"></i>  Tv Shows
            </Link>
            <Link to='/people' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
            <i className="ri-team-fill"></i> People
            </Link>
        </nav>
           </div>
           </div> */}
           
      </div>
 
  )
}

export default Sidenav
