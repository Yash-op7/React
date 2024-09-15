import React from 'react'
import { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error('unsupported action');
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
    <div className='text-5xl'>Counter = {state.count}</div>
    <button className='text-5xl' style={{padding:'15px', border:'1px solid black', margin:'10px'}} onClick={()=> dispatch({type:'decrement'})}>-</button>
    <button className='text-5xl' style={{padding:'15px', border:'1px solid black', margin:'10px'}} onClick={()=> dispatch({type:'increment'})}>+</button>
    </>
  )
}

export default Counter