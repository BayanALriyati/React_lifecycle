import React from "react";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Task1() {  
  const [num,setNum]= useState(0);
  const increment =()=>{
    setNum(num + 1)
  }
  const decrement =()=>{
    setNum(num - 1)
  }
  return (
<>

<section>
    <Container>
       <Row className="justify-content-md-center">
        <Col xs lg="2">
         <Col><Button variant="success" onClick={increment}>Success</Button>{' '}</Col>
        </Col>
        <Col xs lg="2"><Button>{num}</Button>{' '}</Col>
        <Col xs lg="2">
        <Col><Button variant="danger" onClick={decrement}>Danger</Button>{' '}</Col>
        </Col>
      </Row>
    </Container>
</section>
</>

  );
   }



export default Task1 ;