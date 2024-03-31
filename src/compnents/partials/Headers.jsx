import React from 'react'
import { Link } from 'react-router-dom'

const Headers = ({data}) => {
    console.log(data)
  return <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path})`,backgroundPosition:"top 10% ",backgroundSize:"cover",backgroundRepeat:"no-repeat",}} className='sm:w-full sm:h-[50vh] w-full h-[40vh] flex flex-col sm:justify-end items-start p-[5%]'>
    <h1 className='text-white font-black text-lg w-[50%] sm:text-5xl sm:w-[70%]'>{data.name||data.title||data.original_name||data.original_title}</h1>
    <p className='sm:w-[70%] sm:text-md text-[0.8rem]  text-white mt-3 sm:mb-3'>{data.overview.slice(0,200)} <Link to={`/${data.media_type}/details/${data.id}`} className='cursor-pointer text-blue-400'>... see more</Link></p>
    <p className='text-white sm:text-md text-[0.7rem]'><i className='text-yellow-500 ri-megaphone-fill'></i>{data.release_date||"Releasing Soon"}
    <i className='text-yellow-500 ri-album-fill ml-2'></i>{data.media_type.toUpperCase()}</p>
    <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#6556CD] sm:w-[8vw] sm:h-[6vh] sm:text-lg w-[22vw] text-[0.6em] p-2 sm:p-4 rounded mt-2 sm:mt-5 text-white'>Watch Trailer</Link>
  </div>
}

export default Headers
