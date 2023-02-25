import styled, { keyframes } from "styled-components"

export const ColorToggle = styled.img`
height: auto;
width: auto; 
max-height: 10vh;
max-width: 5vw;
position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 40px;
  margin-left: 40px;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const QAPageWrapper = styled.div`
  display: flex;
  background: linear-gradient(to bottom, #E0E0E0, #888888);
  flex-direction: row;
  animation: ${fadeIn} 2s forwards;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 90vh;
`

export const PromptsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 30%;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.5);
  width: 60%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #222222;
`


export const FooterLogo = styled.img`
  height: auto;
  width: auto; 
  max-height: 10vh;
  max-width: 5vw;
  position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 40px;
    margin-right: 40px;
`

export const GradientDiv = styled.div`
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
    background-size: 200% auto;
    animation: gradient 5s ease infinite;
    width: 100%;
    height: 10px;
    @keyframes gradient {
        0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200% 0;
          }
    }
`;


