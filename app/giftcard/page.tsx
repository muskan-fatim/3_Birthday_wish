'use client'
import Image from "next/image"
import { useState } from "react"
import confetti from 'canvas-confetti';
export default function Gift(){
        const [visibleImages, setVisibleImages] = useState([true, true, true, true]) 
      
        const handleClick = (index: number) => {
          const updatedVisibility = [...visibleImages] 
          updatedVisibility[index] = false;
          setVisibleImages(updatedVisibility) 
        }
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
const HandleConfetti = () => {
    confetti({
        particleCount: 300,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      
      confetti({
        particleCount: 300,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
  }
    return(
        <div style={{justifyContent:"center",textAlign:"center",alignItems:"center",  
            border: "1px solid black",
            height: "70vh",
            width: "50vw", 
             mini-width:,"50vw",
            margin: "0 auto",
            boxSizing: "border-box"}}>
            <h1>Happy birthday!</h1>
            <h2 style={{color:"grey"}}>Muskan Fatima</h2>
            <h4 style={{color:"grey"}}>December 27th </h4>
            <h3>pop the balloon</h3>

            <div className="balloon">
            {visibleImages[0] && (
                <Image onClick={()=>handleClick(0)} src="/ballon.jpg" alt="" height={60} width={40} />
                )}
              {visibleImages[1] && (
                <Image onClick={()=>handleClick(1)} src="/OIP.jpg" alt="" height={60} width={40} />
              )}
                          {visibleImages[2] && (
                <Image onClick={()=>handleClick(2)}  src="/R.png" alt="" height={60} width={40} />
                          )}
                                      {visibleImages[3] && (
                <Image onClick={()=>handleClick(3)}  src="/ballon.jpg" alt="" height={60} width={40} />
                                      )}
                </div>
                <button onClick={HandleConfetti}style={{padding:"10px", margin:"15px",borderRadius:"10px",background:"black", color:"white"
                }}>let's celebrate</button>
        </div>
        
)}
