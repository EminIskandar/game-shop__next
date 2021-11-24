import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'

//styled
import { Section, Header, Title, Content } from './styled'

const Index:  NextPage = () => { 

    //redux
    const data = useSelector((state : Store) => state.termsAndCondtion)

    return (
       <Section data-testid="terms-condition"> 
           <Header>
                <Title>
                    <h2>Terms &amp; Conditions</h2> 
                </Title>
           </Header>
           <Content>
                <div>
                    <h4>Terms &amp; Conditions</h4>
                </div>
                    {
                        data.split('.  ').map( (text) => {
                            return <p>{text}</p>
                        })
                    }
           </Content>
       </Section>
    )
} 

export default Index