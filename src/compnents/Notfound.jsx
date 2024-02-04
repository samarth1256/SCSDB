import notfound from '/404.gif'

const Notfound = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
    <img src={notfound} className='h-[50%] objec-cover' alt=''/>
      
    </div>
  )
}

export default Notfound
