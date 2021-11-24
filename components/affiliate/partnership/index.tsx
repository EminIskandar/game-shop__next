import React from 'react'
import { NextPage } from 'next'

//img
import logo from 'img/partnership-logo.svg'

//styled
import { 
    Section, Content, Image, Description, Text, 
    Title
} from './styled'

const Partnership : NextPage =  () => (
        <Section data-testid="partnership">
            <Content>
                <Image>
                    <img src={logo.src} alt="partnership"/>
                </Image>
                <Description>
                    <Title>
                        <h2>Become our partner by sending an application to: <span>partnership@gamivo.com</span></h2>
                    </Title>
                    <Text>
                        <div>
                            <p>Are you an Internet influencer? Do you play video games on a daily basis and want to engage with your community even more? GAMIVO is here to help you out. Smaller or larger communities, you are all welcome here! By joining us you will guarantee the lowest prices on the market for you and your viewers.</p>
                            <p>Or maybe you are in charge of gaming and advertisement services? We will happily join you in a healthy collaboration. Send us an email!</p>
                        </div>
                        <div>
                            <p>We deeply believe that all we do, we do for the gamers - for the whole community. Are you part of a gaming family? If so, we would like to invite you to join our partnership program.</p>
                            <p>By doing so, together we will create even deeper bounds between community members. Gamivo Partnership is a mutual project for both you and your fans.</p>
                        </div>
                    </Text>
                </Description>
            </Content>
        </Section>
    ) 

export default Partnership