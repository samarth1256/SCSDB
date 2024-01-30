import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <div className='flex flex-wrap h-full w-full px-[5%] bg-[#1F1E24]'>
      {data.map((c,i)=>(
        <Link className='w-[25vh] mr-[5%] mb-[5%]' key={i}>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover h-[40vh]' src={`https://image.tmdb.org/t/p/original/${c.poster_path||c.backdrop_path}`}/>
        <h1 className='font-semibold text-2xl text-zinc-400 mt-3'>
        {c.name||c.title||c.original_name||c.original_title}
        </h1>
        </Link>
      ))}
    </div>
  )
}

export default Cards
