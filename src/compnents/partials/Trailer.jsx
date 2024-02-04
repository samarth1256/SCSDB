import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Notfound'

const Trailer = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()
    const category=pathname.includes("movie")?"movie":"tv";
    const ytvideo=useSelector((state)=>state[category].info.videos)
    console.log(ytvideo)
  return (
    <div className='absolute w-screen h-screen bg-[rgba(0,0,0,0.8)] z-[100] top-0 left-0 flex items-center justify-center'>
    <Link onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-close-fill absolute text-white right-[5%] top-[5%]'></Link>
    {ytvideo?(
        <ReactPlayer 
        controls
        height={800}
        width={1500}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    ):(
        <Notfound/>
    )

    }
      
    </div>
  ) 
}

export default Trailer
