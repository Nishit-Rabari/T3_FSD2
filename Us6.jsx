import React, { useState } from "react";
import img1 from './assets/img1.png';
import img2 from './assets/img2.png'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
function Us6(){
    const arr=[img1,img2,img3,img4,img4,img5];
    const[myimage,setimage]=useState(arr[0])
    function changeImage(){
        const randomIndex=Math.floor(Math.random()*arr.length);
        setimage(arr[randomIndex]);

    }

    return(
        <>
        <img src={myimage} height='200px' width='100px'/>
        <button onClick={changeImage}>Change Image</button>
        </>
    )
}
export default Us6 