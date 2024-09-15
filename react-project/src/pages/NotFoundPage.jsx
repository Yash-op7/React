import React from 'react'
import {useParams} from 'react-router-dom'

const NotFoundPage = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div className='text-9xl'>Undefined Route f! {'>:)'}</div>
  )
}

export default NotFoundPage