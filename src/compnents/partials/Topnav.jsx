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
            // console.log(data.results)
            setSearches(data.results)
            console.log(data.results)
            
        } catch (error) {
            console.log("Error:",error)
        }
    }

    useEffect(()=>{
        GetSearches()
    },[query])

  return (
    <div className='sm:w-[70%] w-[60%] h-[8vh]  mx-auto sm:h-[10vh] relative flex justify-start items-center'>
        <i className="ri-search-line sm:text-3xl text-zinc-400"></i>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='w-[50%] text-zinc-200 sm:mx-10 mx-5 p-2 sm:p-5 sm:text-xl outline-none bg-transparent border-none' type='text' placeholder='search'/>
        {query.length>0 &&<i onClick={()=>setQuery('')} className="ml-10 text-zinc-400 text-3xl ri-close-fill cursor-pointer"></i>  }
            
        <div className='z-[100] absolute sm:w-[70%] w-[30vh] max-h-[40vh] sm:max-h-[50vh] bg-zinc-200 top-[90%] left-[5%] overflow-auto rounded-lg'>
            {searches.map((s,i)=>(
                
                <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='hover:text-black hover:bg-zinc-300 duration-300  font-semibold text-zinc-600   sm:w-[100%] w-[60%] p-5 sm:my-0 my-3 sm:p-10 flex justify-start items-center border-b-2 border-zinc-100'>
                {/* <img className='w-[20vh] h-[15vh] object-cover mr-10 rounded' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`} alt=''/> */}
                <img className='sm:w-[20vh] sm:h-[15vh] h-[12vh] object-cover mr-5 rounded shadow-lg' src={s.backdrop_path||s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`:noimage}/>
                <span className='sm:text-md text-sm'>{s.name||s.title||s.original_name||s.original_title}</span>
            </Link>
            ))}
            
        </div>
    </div>
  )
}

export default Topnav
