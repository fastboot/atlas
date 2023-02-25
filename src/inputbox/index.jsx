import React, { Fragment, useState } from "react";
import {
  Container,
  TextBox,
  SubmitButton,
  AnimatedBox,
  NoBorderTextBox,
  NextButton,
  ProfilePicture,
  SendButton,
  ProfileImg,
  ProfileCard,
  Description,
  QueryBox,
  FinalQueryBox,
  Avatar,
  GlowButton
} from './styled'
import Atlas from '../assets/logos/atlasgpt.png'
import ShipIt from '../assets/logos/shipitlogo.png'
import Send from '../assets/logos/send.png'
import User from '../assets/logos/user.png'

const InputBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [showNextQuestion, setShowNextQuestion] = useState(false);

  const handleButtonClick = () => {
    setShowNextQuestion(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextButtonClick = () => {
    setInputValue("");
    setShowNextQuestion(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  }

  return (
    <Container>
      { !showNextQuestion && (
        <Fragment>
      <ProfileCard>
                    <ProfileImg src = {Atlas} alt = 'Profile' />
                    <Description> Meet our new team member AtlasAssist, specially trained to answer all your common questions. Need an IT help? Want to know how to create a resource in Micros? AtlasAssist has got you covered! Say goodbye to waiting for the reply to your "Hey, quick call?"</Description>
      </ProfileCard>
      <QueryBox>
      <TextBox
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows={1}
      />
      <SendButton onKeyDown={handleKeyDown} onClick={handleButtonClick} src = {Send} alt = 'Profile' />
      </QueryBox>
      </Fragment>
      )}

      {showNextQuestion && (
        <AnimatedBox>
          <FinalQueryBox><Avatar src={User}/>&nbsp;&nbsp;&nbsp;{inputValue}</FinalQueryBox>
          <NoBorderTextBox rows={5}><Avatar src={Atlas}/>&nbsp;&nbsp;&nbsp; Meet our new team member AtlasAssist, specially trained to answer all your common questions. Need an IT help? Want to know how to create a resource in Micros? AtlasAssist has got you covered! Say goodbye to waiting for the reply to your "Hey, quick call?" </NoBorderTextBox>
          <GlowButton onClick={handleNextButtonClick}>
            Go again
          </GlowButton>
        </AnimatedBox>
      )}
    </Container>
  );
};

export default InputBox;