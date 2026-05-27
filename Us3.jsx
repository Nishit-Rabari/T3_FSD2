import React ,{useState} from 'react'
function Us3(){
    const[name,setName]=useState('LJU');
    const[textcolor,setcolor]=useState('red')


function changeName(){
    if(name=='LJU'){
        setName('Welcome Student')
    }
    else{
        setName('LJU');
    }
}
function changecolor(){
    if(textcolor==='red'){
        setcolor('blue')
    }
    else{
        setcolor('red')
    }
}
return(
    <>
    <button onClick={changeName}>Change Text</button>
    <button onClick={changecolor}>Change Color</button>
    <h1 style={{color:textcolor}}>{name}</h1>

    </>
)
}
export default Us3