import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Headers from './partials/Headers'

const Home = () => {
    document.title="SCSDB | Homepage"
    const [wallpaper,setWallpaper]=useState(null)
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
console.log(wallpaper)
    useEffect(()=>{
        !wallpaper && GetHeaderWalpaper()
    },[])
  return wallpaper? (
   <>
    <Sidenav/>
    <div className='w-[80%] h-full'>
        <Topnav/>
        <Headers data={wallpaper}/>
    </div>
   </>
  ):(
    <h1>Laoding</h1>
  )
}

export default Home
