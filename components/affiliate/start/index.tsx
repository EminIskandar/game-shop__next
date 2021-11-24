import React from 'react'
import { NextPage } from 'next'

//styled
import { Section, Content, Title, Btn } from './styled'

const Start : NextPage = () => (
        <Section data-testid="start">
            <Content>
                <Title>
                    <h2>START EARNING MONEY NOW!</h2>
                    <h4>Monitor your earnings on your affiliate panel.</h4>
                    <h4>Receive commission for referred orders.</h4>
                </Title>
                <Btn className="Start_earning__btn">CREATE YOUR FIRST LINK</Btn>
            </Content> 
         </Section>
    ) 

export default Start
