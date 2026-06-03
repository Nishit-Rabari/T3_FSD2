import {useState,useEffect, use} from 'react'
function Ue1(){
    const[count,setcount]=useState(0);
    const[calculation,setcal]=useState(0);
    useEffect(()=>{
        alert("Clicked1")
    },[count])
    useEffect(()=>{
        alert("Cliked2")
    },[]);
    useEffect(()=>{
        alert("Clicked3")
    });
    const changeCount=()=>{
        setcount(count+1)
    }
    const changecalc=()=>{
        setcal(calculation+1);
    }
    return(
        <>
        <button onClick={changeCount}>Button A:{count}</button><br/>
        <button onClick={changecalc}>Button B:{calculation}</button><br/>

        </>
    );
    
}
export default Ue1;