import React, { useState } from "react";
import img1 from './assets/img1.png';
import img2 from './assets/img2.png'


function Us5(){
    const[myimage,setImage]=useState(img1)

    function changeImage(){
        if(myimage===img1){

            setImage(img2)
        }
        else{
            setImage(img1)

        }
    }
    return(
        <>
        <img src={myimage} height='400px' width='200px' />
        <button onClick={changeImage}>ChangeImage</button>
        </>
    )
}
export default Us5