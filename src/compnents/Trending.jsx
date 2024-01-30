import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/axios'
import Loading from './Loading'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from './Loading'
const Trending = () => {
    const [category,setCategory]=useState("all")
    const [duration,setDuration]=useState("day")
    const [trending,setTrending]=useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const GetTrending=async()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/${duration}?page=${page}`)
            
            //onsole.log(data.results)
            if(data.results.length>0){
            setTrending((prevData)=>[...prevData,...data.results])
            setpage(page+1)
            }else{
                sethasmore(false)
            }
            console.log(data)
            
        } catch (error) {
            console.log("Error:",error)
        }
    }
    console.log(trending)

    const refreshHandler=()=>{
        if(trending.length===0){
            GetTrending()
        }else{
            setpage(1)
            setTrending([])
            GetTrending()
        }
    }
    useEffect(()=>{
        refreshHandler()
    },[category,duration])

    // console.log(trending)
    const navigate=useNavigate()
  return trending.length>0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[5%] w-full flex items-center justify-between'>
    <h1 className='text-2xl font-semibold text-zinc-400'>
    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{" "} Trending
    </h1>
    <div className='flex items-center w-[80% ]'>
    <Topnav/>
    <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setCategory(e.target.value)}/>
    <div className='w-[2%]'></div>
    <Dropdown title="Duration" options={["day","week"]} func={(e)=>setDuration(e.target.value)}/>
    </div>
    
    </div>
        <InfiniteScroll dataLength={trending.length} next={GetTrending} hasMore={hasmore} loader={<h1 className='text-white text-2xl'>Loading....</h1>}>
        <Cards data={trending} title={category}/>
        </InfiniteScroll>
                              
    </div>
  ):(
    <Loading/>
  )
}

export default Trending
