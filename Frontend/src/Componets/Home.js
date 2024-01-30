import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function Home() {

  return (
    <>
      

      <div className="container-fluid homelaptop header-wrap">

        <div className="container">
          <div className="row pt-4">

            <div className="col-12">
              <h1>Money Cents</h1>
            </div>

            <div className="col-12 mb-4 mt-4 d-flex align-items-center">
              <p className='homelaptop-text p-3'>
              Money Cents 
              is a comprehensive resource designed for women at every life stage, aiming to demystify and eliminate the stigma surrounding financial matters. The platform offers curated financial tips and tricks sourced from around the World Wide Web, covering topics such as saving, investing, community insights, and financial planning. By providing accessible information, Money Cents empowers women to navigate their financial journey with confidence and break down barriers associated with money management.
              </p>
            </div>

            <div className="col-12 mb-2">
              <h2 className="homelaptop-text py-2">Make Cents out of your Financial Knowledge</h2>
            </div>

            <div className="col-12 mb-4">
              
              <a href="/blogs"><button className="fw-bold">Read Our Blog</button></a>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid footer">
        <div className="row">
          <div className="col-12 pt-3">
            <h1>Money Cents</h1>
          </div>

          <div className="col-4">
            <ul className="p-0 pt-3 text-start">
              <li><a href='/'>Home</a></li>
              <li><a href='/blogs'>Blogs</a></li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="p-0 pt-3">
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/login">Log In</a></li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="p-0 pt-3 text-end">
              <li>Mia Morris</li>
              <li>MoneyCents Project</li>
            </ul>
          </div>

        </div>
      </div>






















    </>
  )
}

export default Home
