import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 

//styled
import { 
    Section, Content, Title, Items, Item, Icon, 
    Text, Description, Support, SupportBtn, 
    SupportTitle
} from './styled'
        
const Benefits: NextPage   = () => { 

    //redux
    const data = useSelector( (state: Store) => state.benefit)

    return (
        <Section data-testid="benefits">
            <Content>
                <Title>
                    <h2>Amazing Benefits</h2>
                </Title>
                <Items>
                    {
                        data.map((benefit)=>{
                            const image = require(`img/icon/${benefit.icon}`)
                            return  <Item>
                                        <Icon>
                                            <img src={image.default.src} alt="icon3"/>
                                        </Icon>
                                        <Description>
                                            < Text>
                                                <h2>Priority pre-orders</h2>
                                            </Text>
                                            < Text>
                                                <p>Get first in line! All pre-orders will be sent to CPP users first..</p>
                                            </Text>
                                        </Description>
                                    </Item>
                        })
                    } 
                </Items>
                <Support>
                    <SupportTitle>
                        <h2>The Best Customer Support</h2>
                    </SupportTitle>
                    <SupportBtn>
                        <button>Gamivo Support</button>
                    </SupportBtn>
                </Support>
            </Content>
        </Section>
    ) 
}

export default Benefits
