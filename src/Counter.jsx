import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './redux/ducks/counter';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const plusOne = () => {
    dispatch(increment())
  }
  const minusOne = () => {
    dispatch(decrement());
  }
  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h3>{`Count: ${count}`}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={plusOne}>Increment</button>
        <button onClick={minusOne}>Decrement</button>
      </div>
    </div>
  );
};
export default Counter;
