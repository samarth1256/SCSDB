import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Headers from './partials/Headers'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loading from './Loading'

const Home = () => {
    document.title="SCSDB | Homepage"
    const [wallpaper,setWallpaper]=useState(null)
    const [trending,setTrending]=useState(null)
    const [category,setCategory]=useState("all")

    const GetHeaderWalpaper=async()=>{
        try {
            const {data}=await axios.get(`/trending/all/day`)
            const randomData=data.results[(Math.random()*data.results.length).toFixed()]
            // console.log(data.results)
            setWallpaper(randomData)
            
        } catch (error) {
            console.log("Error:",error)
        }
    }
    const GetTrending=async()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/day`)
            
            // console.log(data.results)
            setTrending(data.results)
            
        } catch (error) {
            console.log("Error:",error)
        }
    }

    useEffect(()=>{
        !wallpaper && GetHeaderWalpaper()
        GetTrending()
    },[category])
    console.log(trending)
  return wallpaper && trending ? (
   <>
    <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <Topnav/>
        <Headers data={wallpaper}/>

        <div className="p-5 flex justify-between">
        <h1 className="text-3xl font-semibold text-zinc-300">Trending</h1>
        <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setCategory(e.target.value)}/>
      </div>

        <HorizontalCards data={trending}/>
    </div>
   </>
  ):(
    <Loading/>
  )
}

export default Home
