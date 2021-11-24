import React from 'react'
import { NextPage } from 'next'

//img
import icon1 from 'img/icon/hit_icon_1.webp'
import icon2 from 'img/icon/hit_icon_2.webp'
import icon3 from 'img/icon/hit_icon_3.webp'

//styled
import {
    Section, Content, Title, Items,
    Item, Icon, Text 
} from './styled'

const HIT : NextPage = () => (
    
        <Section data-testid="af-hit">
            <Content>
                <Title>
                    <h2>How does it work?</h2>
                </Title>
                <Items>
                    <Item>
                        <Icon>
                            <img src={icon1.src} alt="hit-image1"/>
                        </Icon>
                        <Text>
                            <div>
                                <h2>Engage people</h2>
                            </div>
                            <div>
                                <p>Share your referral link with people that are interested in buying games.</p>
                            </div>
                        </Text>
                    </Item>
                    <Item>
                        <Icon>
                            <img src={icon2.src} alt="hit-image2"/>
                        </Icon>
                        <Text>
                            <div>
                                <h2>Watch your earnings grow</h2>
                            </div>
                            <div>
                                <p>Monitor your earnings on your affiliate panel. Receive commission for referred orders.</p>
                            </div>
                        </Text>
                    </Item>
                    <Item>
                        <Icon>
                            <img src={icon3.src} alt="hit-image3"/>
                        </Icon>
                        <Text>
                            <div>
                                <h2>Receive your money</h2>
                            </div>
                            <div>
                                <p>As a reward for your commitment you will receive real money!</p>
                            </div>
                        </Text>
                    </Item>
                </Items> 
            </Content>
        </Section>
    ) 

export default HIT