import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const navigate= useNavigate()

const handleSubmit = async (event) => { 
  event.preventDefault();
  const data ={
    email,password
  }
  fetch ("http://localhost:3001/log-in",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })


  navigate('/');
  
};

  return (
    <>

    <div className="container-fluid homelaptop login header-wrap d-flex align-items-center">

    <div className="container signup-wrapper">

      <div className='row justify-content-center p-4'>
      <div className="col-12 mb-2">
       <h1>Welcome Back, Please Log-In!</h1>
      </div>
        <div className='col-8'>
          <Form action="http://localhost:3001/log-in" method='post' onSubmit={handleSubmit}>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Enter email" />
          </Form.Group>
            
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(event)=>{setPassword(event.target.value)}}  type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form>
        </div>
      </div>
    </div>
  </div>

   
    
    </>
  )
}

export default Login