import React from 'react'
import styled from 'styled-components'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

export default function View() {
  return (
    <Container>
        <Box2>
          <Merge>
            <Peng>
              <One><FaAngleLeft size={'1.5rem'} color='white'/></One>
              <Two><FaAngleRight size={'1.5rem'} color='white'/></Two>
            </Peng>
          </Merge>
        </Box2>
        <Box1>
            <Title>Make your interior looks <span>great!</span></Title>
            <Info>Make your Sprone throne combination and look great with the right interior arrangment</Info>
            <Button>Start Now</Button>
        </Box1>
    </Container>
  )
}

// const Box2 = styled.div``;
// const Box2 = styled.div``;
const Peng = styled.div`
display: flex;
width: 100px;
height: 40px;
align-items: center;
justify-content: center;
`;
const Merge = styled.div`
width: 90%;
height: 70%;
background-image: url("assets/hr.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: flex-end;
justify-content: flex-end;
border-radius: 5px;

@media screen and (max-width: 768px) {
  width: 350px;
  height: 250px;
  margin: 8px 0;
}
`;
const Two = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
background-color: black;
border-bottom-right-radius: 5px;
`;
const One = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
background-color: black;
opacity: 0.5;
`;

const Container = styled.div`
min-height: calc(100vh - 60px);
height: 100%;
display: flex;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const Box1 = styled.div`
flex: 1;
display: flex;
justify-content: center;
flex-direction: column;
@media screen and (max-width: 768px) {
  align-items: center;
}
`;
const Box2 = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px) {
    
}
`;
const Title = styled.h1`
font-size: 2.5rem;
text-decoration: capitalize;
font-family: 'poppins';
width: 280px;

span{
  color: orange;
}
@media screen and (max-width: 768px) {
  font-size: 1.8rem;
  text-align: center;
}
`;


const Info = styled.div`
width: 400px;
@media screen and (max-width: 768px) {
  text-align: center;
  width: 300px;
}
`;
const Button = styled.button`
width: 100px;
background-color: transparent;
outline: none;
border: solid 2px orange;
padding: 8px 0;
border-radius: 5px;
cursor: pointer;
margin: 20px 0;
transition: all 400ms;

:hover{
  background-color: orange;
  color: #fff;
}
@media screen and (max-width: 500px) {
    font-size: 0.9rem;
}
`;

