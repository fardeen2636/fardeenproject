import React,{useState}from 'react';
import { Button } from 'react-bootstrap';
function Mycount(){
  const[counter,setCounter]= useState(0);
  const[show,setShow]=useState(true);
  
  function increaseCounterValue(){
   setCounter (counter+1)
  }
 function isEvenOrOdd(){
  if (counter % 2 ==0){
        return"Even"; 
  }
return"odd";
}
function handleHideAndShow(){
      setShow(!show);
}
return(
   <center>
   <h1>
   <p>Counter value:{counter}</p>

   </h1>
   {show&&
   <p>
     Is Even? {isEvenOrOdd()}</p>

   }

<p>
   <button onClick={increaseCounterValue}>click me+ </button>
   <button onClick={handleHideAndShow}>{show?"Hide":"Show"}</button>{''}
</p>


   </center>
);



}

export default Mycount;











