import React from 'react'
import styled from 'styled-components'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

export default function Works() {
  return (
    <Container>
        <Topper>
            <Title>Get to know our <span>works</span> </Title>
            <Title2>and a catalyst for the continued success of Bonny Island - a key industrial area This pioneer project is also </Title2>
        </Topper>
        <Holder>
            <Gallery>
                <Image>
                    <Peng>
                        <One><FaAngleLeft size={'1.5rem'} color='white'/></One>
                        <Two><FaAngleRight size={'1.5rem'} color='white'/></Two>
                    </Peng>
                </Image>
                <Sub>
                    <SubInfo>
                        <M>Minimalist looks</M>
                        <Suber>70 Workspace</Suber>
                    </SubInfo>
                    <Action>
                        <Button>Pay now</Button>
                        <Price>$343</Price>
                    </Action>
                </Sub>
            </Gallery>
            <Gallery>
                <Image>
                    <Peng>
                        <One><FaAngleLeft size={'1.5rem'} color='white'/></One>
                        <Two><FaAngleRight size={'1.5rem'} color='white'/></Two>
                    </Peng>
                </Image>
                <Sub>
                    <SubInfo>
                        <M>Minimalist looks</M>
                        <Suber>70 Workspace</Suber>
                    </SubInfo>
                    <Action>
                        <Button>Pay now</Button>
                        <Price>$343</Price>
                    </Action>
                </Sub>
            </Gallery>
        </Holder>
    </Container>
  )
}

// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
const M = styled.h2`
@media screen and (max-width: 768px) {
    font-size: 1.2rem;
}
`;
const SubInfo = styled.div``;
const Action = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content:  center;
`;
const Button = styled.button`
width: max-content;
height: 25px;
color: #fff;
background-color: orange;
outline: none;
border: 0;
border-radius: 5px;
`;
const Price = styled.div`
margin-top: 5px;
font-size: 0.9rem;
`;
const Holder = styled.div`
padding: 0 60px;
display: flex;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;
const Gallery = styled.div`
flex: 1;
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
@media screen and (max-width: 768px) {
    
}
`;
const Title = styled.h2`
font-size: 2rem;
color: #fff;
width: 200px;

span{
    color: orange;
}

@media screen and (max-width: 768px) {
    text-align: center;
}
`;
const Title2 = styled.p`
width: 280px;
font-size: 0.8rem;
font-weight: 300;

@media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 0;
}
`;
const Topper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 60px;
@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;
const Suber = styled.p`
margin-top: -10px;
font-size: 0.9rem;
`;
const Sub = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
}
`;
const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #474745;
color: #fff;
`;

const Peng = styled.div`
display: flex;
width: 100px;
height: 40px;
align-items: center;
justify-content: center;
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
const Image = styled.div`
width: 90%;
height: 350px;
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
  height: 200px;
  margin: 8px 0;
}
`;