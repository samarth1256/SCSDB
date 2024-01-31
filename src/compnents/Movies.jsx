import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/axios'
import Loading from './Loading'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';


const Movies = () => {
    document.title="SCSDB | Movies"
  const navigate=useNavigate()
  const [category,setCategory]=useState("now_playing")
  const [movie,setMovie]=useState([])
  const [page, setpage] = useState(1)
  const [hasmore, sethasmore] = useState(true)

  const GetMovie=async()=>{
    try {
        const {data}=await axios.get(`/movie/${category}?page=${page}`)
        
        //onsole.log(data.results)
        if(data.results.length>0){
        setMovie((prevData)=>[...prevData,...data.results])
        setpage(page+1)
        }else{
            sethasmore(false)
        }
        console.log(data)
        
    } catch (error) {
        console.log("Error:",error)
    }
}
console.log(movie)

const refreshHandler=()=>{
    if(movie.length===0){
        GetMovie()
    }else{
        setpage(1)
        setMovie([])
        GetMovie()
    }
}
useEffect(()=>{
    refreshHandler()
},[category])

 
return movie.length>0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[5%] w-full flex items-center justify-between'>
    <h1 className='text-2xl font-semibold text-zinc-400'>
    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{" "}Movies <small className='ml-2 text-md text-zinc-600'>({category})</small>
    </h1>
    <div className='flex items-center w-[80% ]'>
    <Topnav/>
    <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=>setCategory(e.target.value)}/>
    <div className='w-[2%]'></div>
    
    </div>
    
    </div>
        <InfiniteScroll dataLength={movie.length} next={GetMovie} hasMore={hasmore} loader={<h1 className='text-white text-2xl'>Loading....</h1>}>
        <Cards data={movie} title={category}/>
        </InfiniteScroll>
                              
    </div>
  ):(
    <Loading/>
  )
}

export default Movies
