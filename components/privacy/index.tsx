import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'

//styled
import { Section, Header, Title, Content } from './styled'

const Index: NextPage = () => {
    
    //ref
    const data = useSelector((state : Store) => state.privacyPolicy)

    return (
        <Section data-testid="privacy"> 
            <Header>
                <Title>
                    <h2>Privacy Policy</h2> 
                </Title>
            </Header>
            <Content>
                <div>
                    <h4>PRIVACY POLICY</h4>
                </div> 
                 {
                     data.split('. ').map( (text,index) => {
                        return <p key={index}>{text}</p>
                     })
                 }
            </Content> 
        </Section>
    ) 
}

export default Index