import styled from "styled-components"
import Image from "next/image";

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.title};
  margin: 5px;
  text-shadow: 0px 0px 39px rgba(255,255,255,1);
`
export const Button = styled.button`
    background-image: linear-gradient(to right, #e52d27 0%, #871717  51%, #e52d27  100%)}        
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white; 
    font-weight: bold;           
    box-shadow: 0 0 20px #eee;
    border-radius: 30px;
    border: 4px solid #8b730f;
    margin: 50px 0;
    display: block;        

    :hover {
        background-position: right center; 
        color: #fff;
        text-decoration: none;
    }

    :active {
        background-position: left center;
        transition: 0.2s;
        transform: scale(0.98)
    }         
`;

export const MainContainer = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  width: 250px;
  height: 400px;
  border: 2px solid #000;
  border-radius: 10px;
  /* margin: 0 10px; */
  animation-name: initialEffect;
  animation-duration: 1s;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @keyframes initialEffect {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  &.gryffindor {
    background: #b11111;
    background: linear-gradient(127deg, #b11111 0%, #ff7a00 80%);
    background: -webkit-linear-gradient(127deg, #b11111 0%, #ff7a00 80%);
    background: -moz-linear-gradient(127deg, #b11111 0%, #ff7a00 80%);
  }

  &.ravenclaw {
    background: #000aff;
    background: linear-gradient(132deg, #000aff 0%, #2db8c9 70%);
    background: -webkit-linear-gradient(132deg, #000aff 0%, #2db8c9 70%);
    background: -moz-linear-gradient(132deg, #000aff 0%, #2db8c9 70%);
  }

  &.slytherin {
    background: #0f9e43;
    background: linear-gradient(132deg, #0f9e43 0%, #00ff00 70%);
    background: -webkit-linear-gradient(132deg, #0f9e43 0%, #00ff00 70%);
    background: -moz-linear-gradient(132deg, #0f9e43 0%, #00ff00 70%);
  }

  &.hufflepuff {
    background: #faff00;
    background: linear-gradient(132deg, #faff00 0%, #ccad0b 70%);
    background: -webkit-linear-gradient(132deg, #faff00 0%, #ccad0b 70%);
    background: -moz-linear-gradient(132deg, #faff00 0%, #ccad0b 70%);
  }
`;

export const ImageContainer = styled(Image)`
  border-radius: 50%;
  box_shadow: 2px 2px 2px 10px #000;
`;

export const Container = styled.div`
  padding: 0 2rem;
  background-color: #214181;

  @media screen only and (min-width: 400px){
    display: flex;
    justify-content: center;
  }
  @media screen only and (min-width: 800px){}
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`