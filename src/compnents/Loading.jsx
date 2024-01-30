import React from 'react'
import giphy from '/giphy.gif'
import loading from '/loading.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
    <img src={loading} className='h-[50%] objec-cover' alt=''/>
      
    </div>
  )
}

export default Loading
