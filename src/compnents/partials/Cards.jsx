import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  console.log(title)
  return (
    <div className='flex flex-wrap h-full w-full px-[5%] bg-[#1F1E24]'>
      {data.map((c,i)=>(
        <Link to={`/${c.media_type|| title}/details/${c.id}`} className='relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover h-[40vh]' src={`https://image.tmdb.org/t/p/original/${c.poster_path||c.backdrop_path||c.profile_path}`}/>
        <h1 className='font-semibold text-2xl text-zinc-400 mt-3'>
        {c.name||c.title||c.original_name||c.original_title}
        </h1>
        {c.vote_average&&(<div className='rounded-full w-[5vh] h-[5vh] absolute right-[-10%] bottom-[25%] bg-yellow-600 text-white flex justify-center items-center text-xl font-semibold'>{(c.vote_average*10).toFixed()}<sup>%</sup></div>)}
        
        </Link>
      ))}
    </div>
  )
}

export default Cards
