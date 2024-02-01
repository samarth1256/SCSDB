import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/axios'
import Loading from './Loading'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';


const Tvshows = () => {
    document.title="SCSDB | TvShows"
    const navigate=useNavigate()
    const [category,setCategory]=useState("airing_today")
    const [tv,setTv]=useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
  
    const GetTv=async()=>{
      try {
          const {data}=await axios.get(`/tv/${category}?page=${page}`)
          
          //onsole.log(data.results)
          if(data.results.length>0){
          setTv((prevData)=>[...prevData,...data.results])
          setpage(page+1)
          }else{
              sethasmore(false)
          }
          console.log(data)
          
      } catch (error) {
          console.log("Error:",error)
      }
  }
  console.log(tv)
  
  const refreshHandler=()=>{
      if(tv.length===0){
          GetTv()
      }else{
          setpage(1)
          setTv([])
          GetTv()
      }
  }
  useEffect(()=>{
      refreshHandler()
  },[category])
  

  return tv.length>0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[5%] w-full flex items-center justify-between'>
    <h1 className='text-2xl font-semibold text-zinc-400'>
    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{" "} TvShows <small className='ml-2 text-md text-zinc-600'>({category})</small>
    </h1>
    <div className='flex items-center w-[80% ]'>
    <Topnav/>
    <Dropdown title="Category" options={["on_the_air","top_rated","popular","airing_today"]} func={(e)=>setCategory(e.target.value)}/>
    <div className='w-[2%]'></div>
    
    </div>
    
    </div>
        <InfiniteScroll dataLength={tv.length} next={GetTv} hasMore={hasmore} loader={<h1 className='text-white text-2xl'>Loading....</h1>}>
        <Cards data={tv} title="tv"/>
        </InfiniteScroll>
                              
    </div>
  ):(
    <Loading/>
  )
}

export default Tvshows
