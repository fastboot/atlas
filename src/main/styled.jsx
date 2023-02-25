import styled, {keyframes, css} from 'styled-components'

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

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

const changeBackground = keyframes`
  0% {
    background-color: #0050c3;
  }
  100% {
    background-color: #0050c3;
  }
`;

export const PageWrapper = styled.div`
    background-color: ${({showAnimation}) => showAnimation ? '#5A5A5A' : '#0050c3'};
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    
    ${({showAnimation}) => showAnimation && css`
    animation: ${fadeOut} 0.05s forwards, ${changeBackground} 1s forwards;`}
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

export const ProfilePicture = styled.div`
  height: auto;
  width: auto;
  max-height: 50vh;
  max-width: 50vw;
  overflow: auto;
  border-radius: 50%;
  border: 10px solid white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    max-height: 30vh;
    max-width: 50vw;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  ${({ showAnimation }) =>
    showAnimation &&
    `
    z-index: 9999; 
    width: 100%; 
    height: 100%; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    animation: fillScreen 1s ease-in-out forwards;

    @keyframes fillScreen {
        0% {
            transform: scale(0);
          }
          100% {
            transform: scale(10);
            opacity: 0;
          }
    }
  `}


`

export const ProfileImg = styled.img`
  height: auto;
  width: auto;
  max-height: 30vh;
  max-width: 50vw;
  @media (max-width: 768px) {
    max-height: 30vh;
    max-width: 50vw;
  }
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

export const ProfileCard = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 15vh;
  justify-content: space-around;
  position: relative;
  align-items: center;
  flex-direction: column;
`



export const Name = styled.p`
  font-size: 5vh;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
`

export const Description = styled.p`
  font-size: 2.5vh;
  font-weight: 400;
  font-style: normal;
  margin-top: -35px;
  top: 0;
  color: white;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
`



