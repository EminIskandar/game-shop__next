import React  from 'react'   
import { NextPage } from 'next'
//img
import img1 from 'img/big-logo.webp'  

//styled
import {
    Section, Header, HeaderContent, HeaderTitle, HeaderDescription, DescriptionImage,
    DescriptionInner, DescriptionItems, DescriptionText, DescriptionTitle, Footer,
    FooterContent 
} from './styled' 

const Contact: NextPage = () => (
        <Section data-testid="contact">
            <Header> 
                <HeaderContent>
                    <HeaderTitle>
                        <h2>Contact <span>Us</span></h2>
                    </HeaderTitle>
                    <HeaderDescription>
                        <DescriptionInner>
                            <DescriptionText>
                                <DescriptionTitle>
                                    <h2>Gamivo.com Limited</h2>
                                </DescriptionTitle>
                                <DescriptionItems>
                                    <p>99 Dingli Street</p>
                                    <p>SLM 1905 Sliema, Malta</p>
                                    <p>Email: supportcenter@gamivo.com</p>
                                    <p>Phone: +35699543688</p>
                                </DescriptionItems>
                            </DescriptionText>
                            <DescriptionImage>
                                    <img src={img1.src} alt="logo"/>
                            </DescriptionImage>
                        </DescriptionInner>
                    </HeaderDescription>
                </HeaderContent>
            </Header>
            <Footer>
                <FooterContent >
                    <h5>© 2021 All Rights Reserved GAMIVO.com Limited, 99 Dingli Street, SLM 1905 Sliema, Malta</h5>
                    <h5>Terms &amp; Conditions</h5>
                </FooterContent>
            </Footer>
        </Section>
    ) 

export default Contact