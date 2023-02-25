import React, { Fragment } from 'react'
import InputBox from '../inputbox'
import Prompt from '../prompts'
import {
    QAPageWrapper,
    ColorToggle,
    FooterLogo,
    Content,
    PromptsWraper,
    TextBox,
    GradientDiv
} from './styled'
import { NavLink as Link } from 'react-router-dom'

import Atlas from '../assets/logos/atlasgpt.png'
import Atlassian from '../assets/logos/atlas-white.png'
import ShipIt from '../assets/logos/shipitlogo.png'

function Chat () {

    return (
        <Fragment>
            <GradientDiv />
        <QAPageWrapper>
                
                <Content>
                    <PromptsWraper>
                        <Prompt />
                    </PromptsWraper>
                    <TextBox>
                        <InputBox />
                    </TextBox>
                </Content>
                <Link to='/'>
                    <ColorToggle src = {Atlas} alt = "shipit" />
                </Link>
                <FooterLogo src = {Atlassian} alt = "atlassian" />
            </QAPageWrapper>
            </Fragment>
    )

}

export default Chat

