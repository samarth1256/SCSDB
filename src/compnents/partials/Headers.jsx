import React from 'react'
import { Link } from 'react-router-dom'

const Headers = ({data}) => {
    console.log(data)
  return <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path})`,backgroundPosition:"top 10% ",backgroundSize:"cover",backgroundRepeat:"no-repeat",}} className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%]'>
    <h1 className='text-white font-black text-5xl w-[70%]'>{data.name||data.title||data.original_name||data.original_title}</h1>
    <p className='w-[70%] text-white mt-3 mb-3'>{data.overview.slice(0,200)} <Link to={`/${data.media_type}/details/${data.id}`} className='cursor-pointer text-blue-400'>... see more</Link></p>
    <p className='text-white'><i className='text-yellow-500 ri-megaphone-fill'></i>{data.release_date||"Releasing Soon"}
    <i className='text-yellow-500 ri-album-fill ml-2'></i>{data.media_type.toUpperCase()}</p>
    <Link className='bg-[#6556CD] p-4 rounded mt-5 text-white'>Watch Trailer</Link>
  </div>
}

export default Headers
