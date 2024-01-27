import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './compnents/Home'

function App() {


  return (
   <div className='w-screen min-h-screen bg-[#1F1E24] flex'>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>

   </div>
  )
}

export default App
