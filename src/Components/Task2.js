import React from "react";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Task2() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const plusResult =()=>{
    setResult(parseInt(num1) + parseInt(num2))
  }

  const minusResult =()=>{
    setResult(num1 - num2)
  }

  const multiplyResult =()=>{
    setResult(num1 * num2)
  }

  const dividedResult =()=>{
    setResult(num1 / num2)
  }

  return (
    <Container>
      <Row>
      <InputGroup className="mb-3">
      <InputGroup.Text>{result}</InputGroup.Text>
      
      <Form.Control aria-label="First name"  value={num1} onChange={e =>setNum1 (e.target.value)}/>
      <Form.Control aria-label="Last name" value={num2} onChange={e =>setNum2 (e.target.value)}/>
    </InputGroup>
      </Row>
      <Row>
        <Col><Button variant="secondary" onClick={plusResult}>Plus</Button>{' '}</Col>
        <Col><Button variant="secondary" onClick={minusResult}>Minus</Button>{' '}</Col>
        <Col><Button variant="secondary" onClick={multiplyResult}>Multiply</Button>{' '}</Col>
        <Col><Button variant="secondary" onClick={dividedResult}>Divided</Button>{' '}</Col>
      </Row>
    </Container>
  );
}

export default Task2;