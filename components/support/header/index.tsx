import React from 'react'
import { NextPage } from 'next'

// styled
import { Section, Content, Title, Search, Text } from './styled'

const Header: NextPage = () => (
        <Section data-testid="sup-header">
            <Content>  
                <Title>
                    <h2>Encountered a problem?</h2>
                </Title>
                <Search>
                    <form action="">
                        <input type="text" placeholder="Search.."/>
                        <button type="button"><i className="fas fa-search"></i></button>
                    </form>
                    <Text>
                        <p>You can also check out our FAQ and view the most popular problems.</p>
                    </Text>
                </Search>
            </Content> 
        </Section> 
    ) 

export default Header