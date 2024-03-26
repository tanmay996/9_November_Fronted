import React from 'react'
import {add , sub ,div , mul} from '../Components/CalcLogic'
export default function CalcApp() {
  return (
    <div>   

      <h1>Calculte  here</h1>
      <div className='container d-flex justify-content-between'>
      <button onClick={add} className=''>Addition</button>
      <button onClick={sub}>Substration</button>
      <button onClick={div}>Division</button>
      <button onClick={mul}>Multiplication</button>
      </div>
     
    </div>
  )
}
