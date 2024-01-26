import React from 'react'
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="container">
      <div className='container-fluid-masthead'>
        <div className='row'>
          <div className='col-12 masthead-logo'> <img src='dummy' />
          </div>
          <div className='col-12 masthead-links'>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
