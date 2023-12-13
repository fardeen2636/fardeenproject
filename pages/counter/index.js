import React, {useState }from "react";


function Count(){
   const [user, setUser] = useState({
    name: "User ",
    address:"Indore",
    age: 20,
});           

const increaseAge = () => {
  const updatedUser = {
    ...user,
    age: user.age + 1,
  };

  setUser (updatedUser);
  console.log("====user=====",user)

};

return (
 <center                
 style={{  border: "40px solid #ccc",
 padding: "20px",
 marginTop: "40px"}}>
  <div>
    <h2>
 <p>Name :{user.name} </p>
 <p>Age : {user.age} </p>
 <button onClick={increaseAge}>Increament</button>
  </h2>
  </div>
 </center> 
);

}export default Count;












