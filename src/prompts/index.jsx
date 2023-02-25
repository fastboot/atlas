import React from 'react'
import { Avatar, Description, PromptBlock, PromptTriangle, PromptWrapper } from './styled'
import Light from '../assets/logos/light.png'

function Prompt () {
    return (
        <PromptWrapper>
            <PromptBlock><Avatar src = {Light}/><Description>
                Try Charlie: The Scriber
            </Description>

            </PromptBlock>
            <PromptBlock >
            <Avatar src = {Light}/><Description>
                Find micros resource
            </Description>
            </PromptBlock>
            <PromptBlock >
            <Avatar src = {Light}/><Description>
                Find team members and owner of component
            </Description>
            </PromptBlock>
            <PromptBlock>
            <Avatar src = {Light}/><Description>
                Find out which Hogwarts house you belong to
            </Description>
            </PromptBlock>
        </PromptWrapper>
    )
}

export default Prompt