import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './compnents/Home'
import Loading from './compnents/Loading'
import Trending from './compnents/Trending'
import Popular from './compnents/Popular'
import Movies from './compnents/Movies'
import Tvshows from './compnents/Tvshows'
import People from './compnents/People'
import Moviedetails from './compnents/Moviedetails'
import Tvdetails from './compnents/Tvdetails'
import Persondetails from './compnents/Persondetails'

function App() {


  return (
   <div className='w-screen min-h-screen bg-[#1F1E24] flex'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/popular' element={<Popular/>}/>
    <Route path='/movie' element={<Movies/>}/>
    <Route path='/movie/details/:id' element={<Moviedetails/>}/>
    
    <Route path='/tv' element={<Tvshows/>}/>
    <Route path='/tv/details/:id' element={<Tvdetails/>}/>
    
    <Route path='/people' element={<People/>}/>
    <Route path='/people/details/:id' element={<Persondetails/>}/>
 
   </Routes>

   </div>
  )
}

export default App
