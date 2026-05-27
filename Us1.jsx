import React ,{useState} from 'react'
function Us1(){
    const[count,setCount]=useState(0);
    function handleCount(){
        setCount(count+1)
    }
    return(
        <>
        <p>You Clicked {count} times</p>
        <button onClick={handleCount}>Click Me...</button>
        </>
    )
}
export default Us1;