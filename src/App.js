import React, { useEffect, useState,CSSProperties } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import ClipLoader from "react-spinners/ClipLoader";




// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "green",
// };



export default function App() {


  // const [num ,setNum ] = useState(0);
  // const [num1 ,setNum1 ] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState("#ffffff");

  

  // useEffect(()=>{setTimeout(()=>{setLoading(false)},3000)}, [num])

  // function Inc(){
  //   setNum(num+1)
  //   setLoading(true);
  // }
  // function Dec(){
  //   setNum(num-1)
  //   setLoading(true);
  // }

  // function Inc1(){
  //   setNum1(num1+1)
  //   setLoading(true);
  // }
  // function Dec1 (){
  //   setNum1(num1-1)
  //   setLoading(true);
  // }

  return (
    <div>
      
      <SignUp />

{/* 
      <center>
      <button onClick={Dec} > -</button>
        <h1>{num}</h1>
        <button onClick={Inc} > +</button>
      </center>

<br/>
<br/>


      <center>
      <button onClick={Dec1} > -</button>
        <h1>{num1}</h1>
        <button onClick={Inc1} > +</button>
      </center>

      <div className="sweet-loading">
     

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div> */}
      

    </div>
    
  )
}
