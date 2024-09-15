import React from 'react'
import data from '../data.json';
import Card from './Card';

const Content = () => {
  return (
    <div style={{margin:'10px',padding:'20px', border:'1px solid black'}} className='flex bg-orange-200'>
        {data.map((person) => {
            return <Card person={person} />
        })}
    </div>
  )
}

export default Content