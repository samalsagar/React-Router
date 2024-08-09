import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams();
  return (
    <div>
      <h1 className='bg-gray-700 text-white font-bold font-serif p-4 text-2xl'>user : {userId}</h1>
    </div>
  )
}

export default User
