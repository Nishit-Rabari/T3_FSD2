function Event1(){
    const mystyle={
        color:"blue",
        backgroundColor:"red",
        padding:"10px 10px",
        margin:"200px"
    };
    function handClick(){
        alert("welcome")
    }
    return(
        <>
        <centre>
            <button style={mystyle} onClick={handClick}>Click Me</button>
        </centre>
        </>
    );
    
}
export default Event1
