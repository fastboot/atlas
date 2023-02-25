import styled from "styled-components"

export const PromptWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 15vw;
    justify-content: space-between;
`

export const PromptBlock = styled.div`
    width: 20vw;
    height: 15vh;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center; 
    background-color: #222222;
    box-shadow: -1rem 0 3rem #222222 ;
    border-radius: 10px;
    flex-direction: column;
    @media (max-width: 768px) {
        height: 20vh;
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

export const Description = styled.p`
  font-size: 2vh;
  font-style: normal;
  top: 0;
  color: white;
  text-align: center;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
`