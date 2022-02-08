import styled from "styled-components";
import Image from "next/image";

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  margin: 5px;
  text-shadow: 0px 0px 50px rgba(213, 176, 25, 1);
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  margin: 10px 0;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
`;

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
    border: 6px solid #8b730f;
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
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 400px) {
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  width: 250px;
  height: 400px;
  border: 4px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 10px;
  animation-name: initialEffect;
  animation-duration: 1s;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 10px 0;

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
    background: #075423;
    background: linear-gradient(132deg, #075423 0%, #2bc81d 70%);
    background: -webkit-linear-gradient(132deg, #075423 0%, #2bc81d 70%);
    background: -moz-linear-gradient(132deg, #075423 0%, #2bc81d 70%);
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
`;

export const Container = styled.div`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;

  & > div {
    margin: 0 10px;
  }
`;

export const Modal = styled.div`
  max-width: 70vw;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  visibility: ${(props) =>
    props.visibility === "true" ? "visible" : "hidden"};
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  border-top: 10px solid ${({ theme }) => theme.colors.modalBorderTop};
  border-bottom: 10px solid ${({ theme }) => theme.colors.modalBorderBotton};
  font-size: 18px;
  box-shadow: 1px 1px 30px 5px ${({ theme }) => theme.colors.modalShadow};
  z-index: 1;
  padding: 20px;

  ::-webkit-scrollbar {
    width: 5px;    
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 8px red;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.modalBorderTop};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 767px) {
    max-width: 60vw;
  }

  & > button {
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    padding: 1px 8px;

    @media only screen and (min-width: 400px) {
    }

    @media only screen and (min-width: 767px) {
      :hover {
        filter: brightness(0.8);
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  & > p {
    margin: 5px 0;
    line-height: 1.4;
  }
`;
