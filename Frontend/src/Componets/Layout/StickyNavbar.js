import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';


function StickyNavbar() {
  const navigate= useNavigate()

  async function handleLogout(){
    
    let response = await fetch("http://localhost:3001/logout") 
      response = await response.json()
      console.log (response)
      navigate('/login');
  }

  return (
    <>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as ={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="/signup">Sign-Up</Nav.Link>
            <Nav.Link as ={Link} to="/login">Log-In</Nav.Link>
            <Nav.Link as ={Link} to="/blogs">Blogs</Nav.Link>  
            <Nav.Link as ={Link} onClick= {handleLogout}>Log-Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default StickyNavbar;