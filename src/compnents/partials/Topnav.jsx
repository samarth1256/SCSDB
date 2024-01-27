import React, { useEffect, useState } from 'react'
import { Link, isRouteErrorResponse } from 'react-router-dom'
import axios from '../../utils/axios'
import noimage from '/noimage.webp'

const Topnav = () => {
    const [query,setQuery]=useState("")
    const [searches,setSearches]=useState([])
    const GetSearches=async()=>{
        try {
            const {data}=await axios.get(`/search/multi?query=${query}`)
            console.log(data.results)
            setSearches(data.results)
            
        } catch (error) {
            console.log("Error:",error)
        }
    }

    useEffect(()=>{
        GetSearches()
    },[query])

  return (
    <div className='w-full h-[10vh] relative flex justify-start ml-[15%] items-center'>
        <i class="ri-search-line text-3xl text-zinc-400"></i>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none bg-transparent border-none' type='text' placeholder='search anything'/>
        {query.length>0 &&<i onClick={()=>setQuery('')} class=" text-zinc-400 text-3xl ri-close-fill"></i>  }
            
        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-lg'>
            {searches.map((s,i)=>(
                <Link key={i} className='hover:text-black hover:bg-zinc-300 duration-300  font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>
                {/* <img className='w-[20vh] h-[15vh] object-cover mr-10 rounded' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`} alt=''/> */}
                <img className='w-[20vh] h-[15vh] object-cover mr-5 rounded shadow-lg' src={s.backdrop_path||s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`:noimage}/>
                <span>{s.name||s.title||s.original_name||s.original_title}</span>
            </Link>
            ))}
            
        </div>
    </div>
  )
}

export default Topnav
