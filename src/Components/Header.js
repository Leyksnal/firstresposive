import React from 'react'
import {CgTwitter, CgMenuGridO} from 'react-icons/cg'
import styled from 'styled-components'
import {MdOutlineCancel} from 'react-icons/md';


export default function Header() {
  return (
    <Container>
        <Wrapper>
            <Logo />
            <Navigation>
                <Nav>Home</Nav>
                <Nav>Sponsors</Nav>
                <Nav>Services</Nav>
                <Nav>Portfolio</Nav>
                <Nav>Contact</Nav>
                <Button>Sign Up</Button>
            </Navigation>
        </Wrapper>
        <Toggle>
            <Menu id="menu" onClick={() =>{
                document.getElementById("sidebar").style.width = "200px"
                document.getElementById("menu").style.display = "none";
                document.getElementById("close").style.display = "block";
            }}/>
            <Back id="close" onClick={()=>{
                document.getElementById("sidebar").style.width = "0";
                document.getElementById("menu").style.display = "block";
                document.getElementById("close").style.display = "none";
                document.getElementById("close").style.transition = "all 400ms";
            }}/>
        </Toggle>
        <Sidebar id='sidebar'>
            <Cal>Home</Cal>
            <Cal>Sponsors</Cal>
            <Cal>Services</Cal>
            <Cal>Portfolio</Cal>
            <Cal>Contact</Cal>
            <Button>Sign Up</Button>
            <Logo />
        </Sidebar>
    </Container>
  )
}


const Menu = styled(CgMenuGridO)`
display: none;
@media screen and (max-width: 500px) {
    display: block;
    font-size: 1.5rem;
    transition: all 450ms;

}
`;
const Toggle = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    transition: all 400ms;

  }
`;
const Back = styled(MdOutlineCancel)`
display: none;
@media screen and (max-width: 500px) {
    display: none;
    font-size: 1.5rem;
    transition: all 450ms;
}
`;

const Sidebar = styled.div`
width: 0;
background-color: #ebf9a5;
display: none;
height: 100vh;
overflow: hidden;
position: fixed;
overflow: hidden;
top: 0;
left: 0;
transition: all 400ms;
 @media screen and (max-width: 500px){
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
`;
const Cal = styled.div`
font-size: 1rem;
padding: 12px 0;
cursor: pointer;
`;
// const Nav = styled.div`

// `;

const Container = styled.div`
display: flex;
flex: 1;
height: 60px;
align-items: center;
justify-content: center;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
background-color: #ebf9a5;
`;
const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 768px) {
    
}
`;
const Logo = styled(CgTwitter)`
font-size: 2rem;

@media screen and (max-width: 500px) {
    font-size: 2rem;
}
`;
const Navigation = styled.div`
display: flex;
width: 500px;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 500px) {
    display: none;
}
`;
const Nav = styled.div`

`;
const Button = styled.button`
width: 100px;
background-color: transparent;
outline: none;
border: solid 2px #000;
padding: 8px 0;
border-radius: 5px;
cursor: pointer;
@media screen and (max-width: 500px) {
    margin: 10px 0;
    font-size: 1rem;
}
`;