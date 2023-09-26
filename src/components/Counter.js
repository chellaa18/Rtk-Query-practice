import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slice/reducer';
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h1>Counter Redux Toolkit</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default Counter;
