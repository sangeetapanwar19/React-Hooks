import {useState,useEffect} from "react";

function Users(props) {

// useEffect Hook
  useEffect(()=>{
    console.log("use effect called with data state");
  },[props.count])

  return (
    <div className="App">
      <h1>Count Props: {props.count}</h1>
      <h1>Data Props: {props.data}</h1>
    </div>
  );
}

export default Users;
