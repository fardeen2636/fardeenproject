import { useState } from 'react';
import Button from 'react-bootstrap/Button';


export default function Multiple() {
   const [formData, setFormdata] = useState({ name: "", mobileNo: "" });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormdata((prevFromData) => ({ ...prevFromData, [name]: value }));
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, MobileNo: ${formData.mobileNo}`);
   };

   console.log("===formData===", formData)

   return (

      <form onSubmit={handleSubmit}>
         <center>
            <label htmlFor="Name">Name:</label>
            <input name="name" value={formData.name} onChange={handleChange} />
         </center>

         <center>
            <label htmlFor="MobileNo">MobileNo:</label>
            <input name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
         </center>


             <center>
             <button>Submit</button>
             </center>

      </form>





   )
};