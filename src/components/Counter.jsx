import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from './CounterSlice';


const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementValue, setIncrementValue] = useState(0)
  const [decrementValue, setDecrementValue] = useState(0)

  const handleIncrementChange = (event) => {
    setIncrementValue(event.target.value)
  }

  const handleDecrementChange = (event) => {
    setDecrementValue(event.target.value)
  }

  const handleIncrementSubmit = (event) => {
    event.preventDefault()
    if (incrementValue) {
      dispatch(incrementByAmount(incrementValue))
    }
  }

  const handleDecrementSubmit = (event) => {
    event.preventDefault()
    if (decrementValue) {
      dispatch(decrementByAmount(decrementValue))
    }
  }

  return ( 
    <div>
      <div>
        <button
          aria-label='Decrement value'
          onClick={() => {dispatch(decrement())}}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label='Increment value'
          onClick={() => {dispatch(increment())}}
        >
          Increment
        </button>
        <form onSubmit={handleIncrementSubmit}>
          <input type='number' onChange={handleIncrementChange}/>
          <input type='submit' value={'Incrementar ' + incrementValue}></input>
        </form>
        <form onSubmit={handleDecrementSubmit}>
          <input type='number' onChange={handleDecrementChange}/>
          <input type='submit' value={'Decrementar ' + decrementValue}></input>
        </form>
      </div>
    </div>
  );
}

export default Counter;
