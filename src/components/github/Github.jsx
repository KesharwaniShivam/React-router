import React, { useEffect, useState } from 'react'

function Github() {
  const [data , setData] = useState([])

    useEffect(() => {
      
        fetch('https://api.github.com/users/KesharwaniShivam')
        .then(response => response.json())
        .then(data => setData(data) )
    
    }, [])
    
  return (
    <>
    <div className='text-4xl font-bold flex justify-center items-center p-10 gap-10'>
      <img className='w-36' src={data.avatar_url} alt="github profile img" />
      Github : {data.followers}
         </div>
      
    </>
  )
}

export default Github