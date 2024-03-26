// import React from "react";
// const a = 45;
// const b = 65;
// function clc(){
//     return <h1 align="center" style={{fontSize:"48px",color:"red"}}>The addition of number is : {a + b} 
//     <br/>
//     The subtraction of number is : {a - b}
//     <br/>
//     The multiplication of number is : {a * b}
//     <br/>
//     The division of number is : {a / b}</h1>
// }
// export default clc
import React from "react";
let val1=document.getElementById("val1").value;
function clc(){
    return(
        <>
        <span>Enter value-1</span><input id="val1" value="1"></input><br/>
        <span>Enter value-1</span><input id="val1" value="1"></input><br/>
        <h1>{val1}
        </h1>
        </>
    )
}export default clc