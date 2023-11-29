import React from "react";
import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function stuInfo(props){
     const { sData }=props;
     return(
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
         height={40}
         widht={50}
         />

   <Card.Body>
   <Card.Title>{sData.name}</Card.Title>
   <Card.Text>
    fardeen hussain
      </Card.Text>
      
   <Button variant="primary">Go somewhere</Button>
   </Card.Body>
   </Card>

     )          
};