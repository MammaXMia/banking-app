import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const navigate= useNavigate()

const handleSubmit = async (event) => { 
  event.preventDefault();
  const data ={
    email,password
  }
  fetch ("http://localhost:3001/sign-up",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })


  navigate('/home');
  
};

  return (
    <>
    <h1>Join our community!!</h1>  
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(event)=>{setPassword(event.target.value)}}  type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Signup