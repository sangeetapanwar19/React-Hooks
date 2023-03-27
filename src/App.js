import React from 'react';
import logo from './logo.svg';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import './App.css';
import User from './User'
import {useState,useEffect} from "react";
import HideShow from './HideShow';
import Profile from './Profile';
import Users from './Users';
import DataFetching from './DataFetching';
import ComponentC from './ComponentC';
import ComponentE from './ComponentE';
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

import {useReducer} from "react";
import DataFetchingOne from './DataFetchingOne';
import DataFetchingTwo from './DataFetchingTwo';
import ParentComponent from './ParentComponent';
import UseMemoExample from './UseMemoExample';

//create context
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default:
            return state
    }
}
const App = () => {
// use useState Hook
const [data,setData] = useState(10)
//  const [count,setCount] = useState(100)
// useEffect Hook
  /*useEffect(()=>{
    console.log("use effect called with data state");
  },[data])
  useEffect(()=>{
    console.log("use effect called with count state");
  },[count])*/
 /* function apple(){
    setData("sidhu");
  }*/

  const[count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      {/*<h1>{data}</h1>
      <h1>useEffect example{count}</h1>*/}
      <button onClick={()=>setData(data+1)}>Update data</button>
     {/*<button onClick={()=>setCount(count+1)}>Update Count</button>*/}
      {/*<User name={'sangeeta1'} surname={'panwar1'}/>
      <button onClick={apple}>Click Me</button>
      <HideShow/>
      <Profile />*/}
      {/*<Users count={count} data={data}/> */}   
      <DataFetching/>
      <br/><br/>
      <UserContext.Provider value={'Sangeeta'}>
        <ChannelContext.Provider value={'Panwar'}>
          <ComponentC/>
         <ComponentE/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <br/><br/>
     {/* <Counter/>*/}
     {/* <Counter2/>*/}
     <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
      Count: {count}
      <br/><br/>
         <ComponentA/>
         <ComponentB/>
     </CountContext.Provider>
     <br/><br/>
     <Counter3/>
     {/*<DataFetchingOne/>*/}
     <br/><br/>
     <DataFetchingTwo/>
     {/*<ParentComponent/>*/}
     <UseMemoExample/>
    </div>
  );
    }
export default App