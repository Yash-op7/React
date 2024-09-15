import React, { useState } from 'react'

const Card = ({value}) => {
  const [showDesc, setShowDesc] = useState(true);
  return (
    <>
    <div style={{border:'solid 1px black', padding:'5px', margin:'5px'}}>
      <h1 className='text-3xl'>{value.name}</h1>
      <h3 className='text-xl'>{value.email}</h3>
      <p>{showDesc ? value.about:value.about.substr(0, 100)}</p>
      <button onClick={()=>setShowDesc((prev) => !prev)}>{showDesc ? 'show less': 'show more'}</button>
      </div>
    </>
  )
}

export default Card