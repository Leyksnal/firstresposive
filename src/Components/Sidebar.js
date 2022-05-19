import React from 'react'
import styled from 'styled-components';
import {CgTwitter} from 'react-icons/cg';

export default function Sidebar() {
  return (
    <Container>
        <Navigation>
            <Nav>Home</Nav>
            <Nav>Sponsors</Nav>
            <Nav>Services</Nav>
            <Nav>Portfolio</Nav>
            <Nav>Contact</Nav>
        </Navigation>
        <Button>Sign Up</Button>
        <Go/>
    </Container>
  )
}


const Go = styled(CgTwitter)`
font-size: 3rem;
margin-top: 20px;
`;  
const Navigation = styled.div`
display: flex;
flex-direction: column;
`;
const Nav = styled.div`
font-size: 1.7rem;
padding: 12px 0;
`;
const Button = styled.button`
width: 130px;
background-color: transparent;
outline: none;
border: solid 2px #000;
padding: 8px 0;
border-radius: 5px;
font-size: 1.3rem;
margin-top: 20px;
`;
const Container = styled.div`
width: 0;
background-color: green;
display: none;
height: 100vh;
overflow: hidden;
position: fixed;
overflow: hidden;
top: 0;
left: 0;
 @media screen and (max-width: 500px){
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
`;