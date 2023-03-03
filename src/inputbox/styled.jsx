import styled, { keyframes } from "styled-components";

export const QueryBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    height: 50px;
    background: black;
    position: absolute;
    bottom: 0;
    border-radius: 5px;
`

export const SendButton = styled.img`
    height: auto;
    width: auto; 
    max-height: 3vh;
    max-width: 3vw;
    width: 12%
    position: absolute;
    right: 0;
    margin-right: 15px;
    margin-top: 10px;
    &:hover {
        cursor: pointer;
        transform: scale(1.1); 
    }
    @media (max-width: 768px) {
        max-height: 30vh;
        max-width: 50vw;
    }
`

export const Avatar = styled.img`
    height: auto;
    width: auto; 
    max-height: 3vh;
    max-width: 3vw;
    width: 12%
    position: absolute;
    top: 0;
    &:hover {
        cursor: pointer;
        transform: scale(1.1); 
    }
    @media (max-width: 768px) {
        max-height: 30vh;
        max-width: 50vw;
    }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  height: 90%;
  width: 90%;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 400px;
    background: blue;
`

export const Card = styled.div`
    display: flex;
    height: 280px;
    width: 600px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
    &:hover {
        transform: translateY(-20px);
        transition: 0.4s ease-out;
        position: relative;
        transition: 0.4s ease-out;
        &:nth-child(n) {
            margin-left: -50px;
        }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TextBox = styled.textarea`
  padding: 10px;
  height: 30px;
  width: 88%;
  font-size: 25px;
  background-color: black;
  color: white;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  resize: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  transition: 0.4s ease-out;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0077ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const AnimatedBox = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FinalQueryBox = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  font-size: 2vh;
  color: white;
  border-radius: 10px;
  padding: 10px;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
  background: #111111;
`

export const NoBorderTextBox = styled.div`
  width: 100%;
  height: 75%;
  font-size: 2vh;
  color: white;
  border-radius: 10px;
  padding: 10px;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
  background-color: #444554;
`;

export const NextButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0077ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
    height: auto;
    width: auto; 
    max-height: 10vh;
    max-width: 5vw;
    @media (max-width: 768px) {
        max-height: 30vh;
        max-width: 50vw;
    }
`

export const ProfileCard = styled.div`
  display: flex;
  height: 100px;
  width: 400px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.p`
  font-size: 2vh;
  font-style: normal;
  top: 0;
  color: white;
  text-align: center;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
`

export const GlowButton = styled.button`
padding: 0.6em 2em;
border: none;
outline: none;
color: rgb(255, 255, 255);
background: #111;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

&:before {
content: "";
background: linear-gradient(
  45deg,
  #ff0000,
  #ff7300,
  #fffb00,
  #48ff00,
  #00ffd5,
  #002bff,
  #7a00ff,
  #ff00c8,
  #ff0000
);
position: absolute;
top: -2px;
left: -2px;
background-size: 400%;
z-index: -1;
filter: blur(5px);
-webkit-filter: blur(5px);
width: calc(100% + 4px);
height: calc(100% + 4px);
animation: glowing-button-85 20s linear infinite;
transition: opacity 0.3s ease-in-out;
border-radius: 10px;
}

@keyframes glowing-button-85 {
0% {
  background-position: 0 0;
}
50% {
  background-position: 400% 0;
}
100% {
  background-position: 0 0;
}
}

&:after {
z-index: -1;
content: "";
position: absolute;
width: 100%;
height: 100%;
background: #222;
left: 0;
top: 0;
border-radius: 10px;
}
`

export const SpinnerDiv = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid white;
    border-color: white white transparent transparent;
    animation: dual-ring 0.7s linear infinite;
    @keyframes dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
  
`;

