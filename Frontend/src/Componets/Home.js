import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Home() {
  return (
    <>
      <div className="container home-text">
        <div className="row home-font">
          <div className= "col-12 offset-md-3 mb-4 pt-4">

            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments "
              className="mb-3">

              <Form.Control as="textarea" placeholder="Leave a comment here" />

            </FloatingLabel>

          </div>
        </div>
      </div>


      <div className='container homelaptop-img'>
        <div className="row home-laptop">
          <div className="col-12 mt-4 mb-4 border border-danger">
            <img className='rounded-circle' src="/Images/home-laptop.jpg"  />
          </div>
        </div>
      </div>

      





















    </>
  )
}

export default Home
