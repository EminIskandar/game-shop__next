import React from 'react' 
import { NextPage } from 'next'

//img
import cpp from 'img/other/cpp01.webp'

//styled
import { Section, Content, Img, Description, Title, Text, TextItem } from './styled'

const Header: NextPage   = () =>   (
        <Section data-testid="cpp-header">
            <Content>
                <Img>
                    <img src={cpp.src} alt="shield"/>
                </Img>
                <Description>
                    <Title>
                        <h2>Customer Protection Program</h2>
                    </Title>
                    <Text>
                        <TextItem>
                            <h4>Enjoy a flawless experience</h4>
                        </TextItem>
                        <TextItem> 
                            <p>All purchases on GAMIVO are protected by our outstanding Customer Support Team. Customer Protection Program guarantees additional layer of service for you!</p>
                        </TextItem>
                    </Text>
                </Description>
            </Content>
        </Section> 
) 

export default Header;
