
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import './styles.css';
import {getUser} from './redux/ducks/user';


const App = () => {
   
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getUser());
        
    },[dispatch]);
 
    const count = useSelector(state => state.counter.count);
    const user = useSelector(state=> state.user.user);
 
    return (
       <div className="App">
           {user && <h1>Hello, {user.firstName}</h1>}
           <h1>Redux Made Easy</h1>
           <h2>{count}</h2>
           <Counter/>
       </div>
    )
}
export default (App);
