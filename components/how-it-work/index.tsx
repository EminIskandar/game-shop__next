import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 

//styled
import { 
    Section, Header, Title, Steps, Item, 
    ItemImg, ItemNumber, ItemText, ItemTitle, Content
} from './styled'

const Index: NextPage = ()=> {

    //redux
    const data = useSelector( (state : Store) => state.howItWork)
    
        return ( 
            <Section data-testid="how">
            <Header>
                <Title>
                    <h2>How it works?</h2>
                    <h4>Easy guide to buying on GAMIVO</h4>
                </Title>
            </Header>
            <Steps>
                <Content>
                    {
                        data.map( (step, index : number ) => {
                            const image = require(`img/other/${step.image}`)
                            return <Item key={index}>
                                        <ItemTitle>
                                            <ItemNumber>
                                                <h1>{index+1}</h1>
                                            </ItemNumber>
                                            <ItemText>
                                                <h1>{step.text}</h1>
                                            </ItemText>
                                        </ItemTitle>
                                        <ItemImg>
                                            <img src={image.default.src} alt="step1"/>
                                        </ItemImg>
                                    </Item>
                        })
                    } 
                </Content>
            </Steps>
            </Section> 
    )
} 
export default Index 
