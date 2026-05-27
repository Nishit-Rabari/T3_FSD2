import React ,{useState} from 'react'
function Us2(){
    const[num,setnum]=useState(0);
    function increment(){
        if(num<10){
            setnum(num+1);

        }
        else{
            return false;
        }
    }
    function decrement(){
        if(num<=10){
            setnum(num-1);

        }
        else{
            return false;
        }

    }
    return(
        <>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <h1>{num}</h1>
        </>
    )
   
}
export default Us2