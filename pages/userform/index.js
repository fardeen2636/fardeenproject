import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const initialFormValues = {};
function UserForm() {
  const [formData, setFormData] = useState(initialFormValues);
  const [user, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
     
    });

  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);


    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${formData.name}, MobileNo: ${formData.mobileNo}`);
      console.log("===formData===", formData)

  
    
  
    };
  }



  return (
    <Container>
      <Row>
        <Col>User Data Entry:{formData.name}
        </Col>
        <Col>
          <Card className=" ">
            <Card.Body>User Details</Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
               className="mb-3"
                controlId="formHorizontalText"
              >
                <Form.Label>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type=" Enter your Name"
                    placeholder="Enter your Name"
                    onchange={handleChange}
                  />
                </Col>
              </Form.Group>




              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalText"
              >
                <Form.Label>
                  Mobile No
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type=" mobile number"
                    placeholder="Enter your number"
                    onchange={handleChange}
                   
                  />
                </Col>
              </Form.Group>


            </Form>
            <Button onClick={handleSubmit}> Save</Button>{" "}
          </Card>

        </Col>

      </Row>

    </Container>





  )};
  



export default UserForm;




