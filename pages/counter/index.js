import React, {useState }from "react";


function Count(){
   const [user, setUser] = useState({
    name: "fardeen",
    address:"Indore",
    age: 20,
});           

const increaseAge = () => {
  const updatedUser = {
    ...user,
    age: user.age + 1,
  };

  setUser (updatedUser);

};


return (
 <center style={{ marginTop: "40px"}}>
  <div>
 <p>Name :{user.name} </p>
 <p>Age : {user.age} </p>
 <button onClick={increaseAge}>Increament</button>
  </div>
 </center> 
);

}export default Count;












