import React, { useState } from "react";
import TicRow from "./TicRow";
// import { TicData } from "./TicData";
const TicTacToe =()=>{
   
    const [xturn,updateXturn] = useState(true);
    const [data,updateData] = useState(Array(9).fill(null));
    // const playSoundEffect = () => {
    //   const audio = new Audio("./devimage/game.wav");
    //   audio.play();
    // };
    const funexpr = (index)=>{
    //  playSoundEffect()
      if(data[index]!==null){
        return 
      }
    //   const result = [...data];
    data[index] = xturn?"o":"x"
      updateData(data)
      updateXturn(!xturn)
      console.log(data)
     

      
    }
  

//     const iswinner = ()=>{
//         if(data[0]===data[1]&& data[1]===data[2]&&data[0]!=null){
//             console.log("winner")
//         }
//     }
// iswinner();

// or

const isWinnerdata = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const winnerAnnounce = ()=>{
   
for(let ele of isWinnerdata){
    let [x,y,z] = ele;
    if(data[x]===data[y]&&data[y]===data[z]&&data[x]!=null){
        return data[y]
    }
  }
  return false
}
const check = winnerAnnounce()
const playAgain = ()=>{
  updateData(Array(9).fill(null))
}
// console.log(draw())

  return(
    <>
    {
        (check)?(<><h1>{check} win</h1>
         <button onClick={playAgain} className = "btn">play again</button>
         </>):
         <> <h1>{Array(9).fill(!null)?"draw":""}</h1>
  {
    (xturn)?<h1>o turn</h1>:<h1>X turn</h1>
  }
    
   <div className="row">
   <TicRow
   onClick = {()=>funexpr(0)}
   data = {data[0]}
   />
   <TicRow
   onClick = {()=>funexpr(1)}
   data = {data[1]}
   />
   <TicRow
   onClick = {()=>funexpr(2)}
   data = {data[2]}
   />
   </div>
   <div className="row">
   <TicRow
   onClick = {()=>funexpr(3)}
   data = {data[3]}
   />
   <TicRow
   onClick = {()=>funexpr(4)}
   data = {data[4]}
   />
   <TicRow
   onClick = {()=>funexpr(5)}
   data = {data[5]}
   />
   </div>
   <div className="row">
   <TicRow
   onClick = {()=>funexpr(6)}
   data = {data[6]}
   />
   <TicRow onClick = {()=>funexpr(7)}
   data = {data[7]}
   />
   <TicRow
   onClick = {()=>funexpr(8)}
   data = {data[8]}
   />
   </div>
   
        </>
        
    }

    </>
  )
}

export default TicTacToe;

