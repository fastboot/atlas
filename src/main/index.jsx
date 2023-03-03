import React, { Fragment, useState } from 'react'
import { GradientDiv, PageWrapper, ProfileImg, ProfilePicture, ProfileCard, FooterLogo, Circle, NewContent, Name, Description, ColorToggle, QAPageWrapper } from './styled'
import ShipIt from '../assets/logos/shipitlogo.png'
import Atlassian from '../assets/logos/atlas-white.png'
import Atlas from '../assets/logos/atlasgpt.png'
import { NavLink as Link } from 'react-router-dom'

function Main () {
    const [showAnimation, setShowAnimation] = useState(false);
    const [showNewContent, setShowNewContent] = useState(false);

  const handleClick = () => {
    setShowAnimation(true);
  };

  const handleAnimationEnd = () => {
    setShowNewContent(true);
  };

    return (
        <Fragment> 
            
            <GradientDiv />

            {!showNewContent && (<PageWrapper showAnimation={showAnimation} onAnimationEnd={handleAnimationEnd}>
                <ProfileCard>
                    <Link to = '/chat'>
                    <ProfilePicture onClick={handleClick}>
                        <ProfileImg src = {Atlas} alt = 'Profile' />
                    </ProfilePicture>
                    </Link>
                    <Name>Alfred</Name>
                    <Description> Instant, intelligent chat assistance.</Description>
                </ProfileCard>
                <ColorToggle src = {ShipIt} alt = "shipit" />
            </PageWrapper>)}
            
            <FooterLogo src = {Atlassian} alt = "atlas" />
        </Fragment>
    )
}

export default Main
