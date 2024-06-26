import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadtv } from '../store/actions/tvActions'
import { removetv } from '../store/reducers/tvSlice'
import Loading from './Loading'
import HorizontalCards from './partials/HorizontalCards'

const Tvdetails = () => {
  const {pathname}=useLocation()
  const {id}=useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {info}=useSelector((state)=>state.tv)

  useEffect(()=>{
    dispatch(asyncloadtv(id))
    return ()=>{
      dispatch(removetv())
    }
  },[id])
  return info? (
    <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,backgroundPosition:"top 10% ",backgroundSize:"cover",backgroundRepeat:"no-repeat",}} className='relative sm:w-screen sm:h-[200vh] overflow-y-auto px-[10%]'>
      {/* Part 1 navigation */}
      <nav className='h-[10vh] sm:w-full text-zinc-200 flex flex-wrap gap-10 items-center text-xl'>
        <Link onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line'></Link>
        <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
      </nav>
      
     
      {/* Part 2 poster and details */}
      <div className='w-full flex flex-wrap gap-10'>
      <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover h-[50vh]' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path||info.detail.backdrop_path}`}/>
       <div className='content ml-[5%] text-white'>
        <h1 className='text-5xl text-white font-black'>{info.detail.name||info.detail.title||info.detail.original_name||info.detail.original_title} 
        <small className='text-2xl font-bold text-zinc-300'>({info.detail.last_air_date.split("-")[0]})</small>
        </h1>
        <div className='mt-3 mb-5 flex text-white items-center gap-x-3'>
        <span className='rounded-full w-[5vh] h-[5vh] right-[-10%] bottom-[25%] bg-yellow-600 text-white flex justify-center items-center text-xl font-semibold'>{(info.detail.vote_average*10).toFixed()}<sup>%</sup></span>
        <h1 className='font-semibold w-[60px] text-2xl leading-6' >User score</h1>
        <h1>{info.detail.release_date}</h1>
        <h1>{info.detail.genres.map((g)=>g.name).join(',')}</h1>
        <h1>{info.detail.runtime}min</h1>
        </div>

        <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
        <h1 className='text-xl mb-3 mt-5'>Overview</h1>
        <p>{info.detail.overview}</p>
        <h1 className='text-xl mb-3 mt-5'>Tv Translated</h1>
        <p className='mb-10'>{info.translations.join(", ")}</p>
        <Link className='p-5 bg-[#6556CD] rounded-lg' to={`${pathname}/trailer`}><i className="text-xl mr-3 ri-play-fill"></i>Play trailer</Link>
       </div>
       
       </div>

      {/* Part3 Available on platforms */}
      <div className='flex flex-col w-[80%] gap-y-5 mt-10'>
     
      {info.watchproviders&& info.watchproviders.flatrate&& (
          <div className='flex gap-x-10 items-center text-white'>
          <h1>Available on Platform</h1>
          {info.watchproviders.flatrate.map((w,i)=>(
          <img key={i} title={w.provider_name} className='w-[5vh] h-[5vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt=''/>
        ))}
        </div>)}

        {info.watchproviders&& info.watchproviders.rent&& (
          <div className='flex gap-x-10 items-center text-white'>
          <h1>Available on rent</h1>
          {info.watchproviders.rent.map((w,i)=>(
          <img key={i} title={w.provider_name} className='w-[5vh] h-[5vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt=''/>
        ))}
        </div>)}
       
         {info.watchproviders&& info.watchproviders.buy&& (
          <div className='flex gap-x-10 items-center text-white'>
          <h1>Available to Buy</h1>
          {info.watchproviders.buy.map((w,i)=>(
          <img key={i} title={w.provider_name} className='w-[5vh] h-[5vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt=''/>
        ))}
        </div>)}
       
      </div>

      {/* Part 4 Seasons */}
      <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'></hr>
      <h1 className='text-3xl font-bold text-white'>Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {info.detail.seasons.length>0?(info.detail.seasons.map((s,i)=>(
        <div className='w-[15vh] mr-[10%]'>
        <img key={i} className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] min-w-[14vw] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${s.poster_path||s.backdrop_path||s.profile_path}}`}/>
        <h1 key={i} className='font-semibold text-2xl text-zinc-400 mt-3'>{s.name||s.title||s.original_name||s.original_title}</h1>
        </div>
      ))):(
        (
          <h1 className="text-3xl text-white font-black text-center mt-5">Nothing to show</h1>
        )
      )}
     
      </div>

      {/* Part 5 Recommendations and similar stuff */}
      <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'></hr>
      <h1 className='text-3xl font-bold text-white'>Recommendations & Similar Stuff</h1>
      <div className='flex-auto'>
      <HorizontalCards data={
        info.recommendations.length>0?info.recommendations:info.similar
      }/>
      <Outlet/>
      </div>
     </div>
  ):(<Loading/>)
}
export default Tvdetails
