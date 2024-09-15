import React, { useState } from 'react'

const Card = ({person}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description;
    if(!showFullDescription) {
        description = person.about.substr(0, 200);
    } else {
        description = person.about;
    }
  return (
    <div key={person.id} style={{border:'1px solid black',margin:'4px' , padding:'10px'}}>
        <h1 className='text-3xl'>{person.name}</h1>
        <h1 className='text-xl'>{person.email}</h1>
        <h1 className='text-ms'>{person.phone}</h1>
        <p>{description}</p>
        <p onClick={() => setShowFullDescription((prev) => !prev)} style={{color:'blue'}}>{showFullDescription ? 'Show less':'Show More'}</p>
    </div>
  )
}

export default Card