import React from 'react';
import {useState,useEffect} from 'react'; 

function Home(){
    const [count,setCount]=useState(5);
    useEffect(()=>{
        console.log(count);
    },[count]);
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increment</button>
            
            <button onClick={()=>{
                setCount(count-1);
            }}>Decrement</button>
        </>
    );
}

export default Home;