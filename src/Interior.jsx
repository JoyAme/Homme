import React, { useEffect, useState } from 'react'

const Interior = () => {
  const [name,setName]=useState();



  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then((response)=> response.json())
    .then((data)=> setName(data.data))
   
  }, [])


  return (
<>

    {
      name?.map((val, key)=>{
        return(
<div>
      <h2>{val.name}</h2>
      <h5>{val.username}</h5>
    </div>

        )
      })
    }
    
    </>

  )
}

export default Interior
