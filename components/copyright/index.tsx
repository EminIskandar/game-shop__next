import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'

//styled
import { Section, Header, Title, Content } from './styled'

const Index: NextPage  = () => { 

    //redux
    const data = useSelector((state : Store) => state.copyright)

    return (
        <Section data-testid="copyright"> 
           <Header>
                <Title>
                    <h2>Copyright and Legal Issues</h2> 
                </Title>
           </Header>
           <Content>
                <div>
                    <h4>Copyright Dispute Policy</h4>
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