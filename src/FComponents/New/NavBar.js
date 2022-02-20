import React, { Component, useState } from 'react';
import {Navbar, Nav,  Container} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import HomeIcon  from '../../Icons/HomeIcon.jsx';
import ImageButton from 'react-image-button';


export default function NavBar(props)
{

    let session = false;
    const navigate = useNavigate();
    let sessionUser = JSON.parse(sessionStorage.getItem(`login_user`)); // מקבל את המשתמש המחובר
    

    if(sessionUser){
        session = true;
    }

        return (
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                     <Nav.Link className='mywebName' as={Link} to={'/'}><img src= "WebPictures\LogoElectrify.png" alt="Logo"/></Nav.Link>&nbsp;
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                   
                    
                <ImageButton img={<HomeIcon />} >
                        <Nav.Link as={Link} to={'/'} style={{fontFamily:'Brush Script MT', fontSize:'25px'}}>Home</Nav.Link> 
                    </ImageButton>
                    
                    <Nav style={{fontFamily:'cursive', fontSize:'20px'}}  className="me-auto">
                        <Nav.Link as={Link} to={'/Products'}>Products</Nav.Link>
                        <Nav.Link as={Link} to={'/About'}>About</Nav.Link>
                        {session? <Nav.Link  as={Link} to={'/Mycart'}>My Cart</Nav.Link> : null }
                        {session? null : <Nav.Link as={Link} to={'/Login'}>Login</Nav.Link>}
                        {session?null : <Nav.Link as={Link} to={'/SignUp'}>SignUp</Nav.Link>}
                        <Nav.Link as={Link} to={'/Contact'}>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to={'/Profile'}>Profile</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
}
