import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function Home() {
  return (
    <>
      <div className='container home-text'>
        <div className='row home-font'>
          <div className='col-6'>
          
          </div>
        </div>
      
      </div>

      <div className='container homelaptop-img'>
        <div className='row home-laptop'>
          <div className='col-12 mt-4 mb-4 border border-danger'>
          
            <Image src="./images/home-laptop.jpg" roundedCircle />
        
          </div>
        </div>
      
      </div>


    
    </>
  )
}

export default Home
