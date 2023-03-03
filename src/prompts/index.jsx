import React from 'react'
import { Avatar, Description, PromptBlock, PromptTriangle, PromptWrapper } from './styled'
import Light from '../assets/logos/light.png'

function Prompt () {
    return (
        <PromptWrapper>
            <PromptBlock><Avatar src = {Light}/><Description>
                How do we delete any micros resources?
            </Description>

            </PromptBlock>
            <PromptBlock >
            <Avatar src = {Light}/><Description>
                What is the process to raise a request for new laptop?
            </Description>
            </PromptBlock>
            <PromptBlock >
            <Avatar src = {Light}/><Description>
                 What is the main reason for the network segmentation?
            </Description>
            </PromptBlock>
            <PromptBlock>
            <Avatar src = {Light}/><Description>
                When should we go for Kubernetes instead of EC2 instances?
            </Description>
            </PromptBlock>
        </PromptWrapper>
    )
}

export default Prompt