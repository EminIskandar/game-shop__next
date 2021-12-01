import React from 'react'
import { NextPage } from 'next'

//img
import logo from 'img/smart-logo.svg'

//styled
import { 
    Section, Content, Img, Description, 
    Text, Title, TermCondition, Btn
} from './styled'

const Header : NextPage = () => (

        <Section data-testid="header">
            <Content>
                <Img>
                    <img src={logo.src} alt=""/>
                </Img>
                <Description>
                    <Title>
                        <h2>Best Deals, Certified!</h2>
                    </Title>
                    <Text>
                        <p>Gamivo Smart is a VIP <span>subscription</span>  which guarantees lowest prices. Why is it worth considering? Check out those awesome perks!</p>
                        <p>All for <span>€1.99</span>/month</p>
                    </Text>
                    <Btn>
                        <button type="button">Active Gamivo Smart</button>
                    </Btn>
                    <TermCondition>
                        <h5>Gamivo Smart <span>Terms &amp; Conditions</span></h5>
                    </TermCondition>
                </Description>
            </Content>
        </Section>
) 
 
export default Header