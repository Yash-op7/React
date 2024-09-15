import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
    }
}

const Example = () => {
    const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <div>
        <h1 className='text-9xl'>Counter3 value: {state.count}</h1>
        <button className='text-3xl m-5 p-5' onClick={() => {dispatch({type: 'increment'})}}>+</button>
        <button className='text-3xl m-5 p-5' onClick={() => {dispatch({type:'decrement'})}}>-</button>
    </div>
  )
}

export default Example