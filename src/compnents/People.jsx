import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/axios'
import Loading from './Loading'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
    document.title="SMDB | People"
    const navigate=useNavigate()
    const [category,setCategory]=useState("popular")
    const [person,setPerson]=useState([])
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
  
    const GetPerson=async()=>{
      try {
          const {data}=await axios.get(`/person/${category}?page=${page}`)
          
          //onsole.log(data.results)
          if(data.results.length>0){
          setPerson((prevData)=>[...prevData,...data.results])
          setpage(page+1)
          }else{
              sethasmore(false)
          }
          console.log(data)
          
      } catch (error) {
          console.log("Error:",error)
      }
  }
  console.log(person)
  
  const refreshHandler=()=>{
      if(person.length===0){
          GetPerson()
      }else{
          setpage(1)
          setPerson([])
          GetPerson()
      }
  }
  useEffect(()=>{
      refreshHandler()
  },[category])
  
   
  return person.length>0 ? (
      <div className='w-screen h-screen'>
      <div className='px-[5%] w-full flex items-center justify-between'>
      <h1 className='text-2xl font-semibold text-zinc-400'>
      <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{" "} {category.toUpperCase()} Persons
      </h1>
      <div className='flex items-center w-[80% ]'>
      <Topnav/>
      <div className='w-[2%]'></div>
      
      </div>
      
      </div>
          <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasmore} loader={<h1 className='text-white text-2xl'>Loading....</h1>}>
          <Cards data={person} title="people"/>
          </InfiniteScroll>
                                
      </div>
    ):(
      <Loading/>
    )
}

export default People
