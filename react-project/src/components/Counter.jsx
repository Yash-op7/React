import React from 'react'
import { useReducer } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import Example from './Example';

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
    const [v, setV] = useState(0);
    const inputRef = useRef(null);
  
    const handleFocus = () => {
      inputRef.current.focus();
    };
  return (
    <>
    <div className='text-5xl'>Counter with useReducer = {state.count}</div>
    <button className='text-5xl' style={{padding:'15px', border:'1px solid black', margin:'10px'}} onClick={()=> dispatch({type:'decrement'})}>-</button>
    <button className='text-5xl' style={{padding:'15px', border:'1px solid black', margin:'10px'}} onClick={()=> dispatch({type:'increment'})}>+</button>

    <div className='text-5xl'>Counter with useState = {v}</div>
    <button className='text-5xl' style={{padding:'15px', border:'1px solid black', margin:'10px'}} onClick={()=> setV((v) => {
        return v-28;
    })}>-</button>
    <button className='text-5xl' style={{padding:'15px', border:'1px solid black', margin:'10px'}} onClick={()=> setV(v+9)}>+</button>

    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
      <Example />
    </>
  )
}

export default Counter