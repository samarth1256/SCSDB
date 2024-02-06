import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/axios'
import Loading from './Loading'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
  document.title="SMDB | Popular"
  const navigate=useNavigate()
  const [category,setCategory]=useState("movie")
  const [popular,setPopular]=useState([])
  const [page, setpage] = useState(1)
  const [hasmore, sethasmore] = useState(true)

  const GetPopular=async()=>{
      try {
          const {data}=await axios.get(`${category}/popular?page=${page}`)
          
          //onsole.log(data.results)
          if(data.results.length>0){
          setPopular((prevData)=>[...prevData,...data.results])
          setpage(page+1)
          }else{
              sethasmore(false)
          }
          console.log(data)
          
      } catch (error) {
          console.log("Error:",error)
      }
  }
  console.log(popular)

  const refreshHandler=()=>{
      if(popular.length===0){
          GetPopular()
      }else{
          setpage(1)
          setPopular([])
          GetPopular()
      }
  }
  useEffect(()=>{
      refreshHandler()
  },[category])

  return popular.length>0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[5%] w-full flex items-center justify-between'>
    <h1 className='text-2xl font-semibold text-zinc-400'>
    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{" "} Popular<small className='ml-2 text-md text-zinc-600'>({category})</small>
    </h1>
    <div className='flex items-center w-[80% ]'>
    <Topnav/>
    <Dropdown title="Category" options={["movie","tv"]} func={(e)=>setCategory(e.target.value)}/>
    <div className='w-[2%]'></div>
    
    </div>
    
    </div>
        <InfiniteScroll dataLength={popular.length} next={GetPopular} hasMore={hasmore} loader={<h1 className='text-white text-2xl'>Loading....</h1>}>
        <Cards data={popular} title={category}/>
        </InfiniteScroll>
                              
    </div>
  ):(
    <Loading/>
  )
}



export default Popular
