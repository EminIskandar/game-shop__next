import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 

//styled
import {Section,Content,Title,Items,Item,Img,Text} from './styled'

const WhatYouGet: NextPage = () => { 

    //redux
    const data = useSelector( (state : Store) => state.whatYouGet)

    return (
        <Section data-testid="what-you-get">
            <Content>
                <Title>
                    <h2>What You <span>Get</span></h2>
                </Title>
                <Items>
                    {
                        data.map((item,index) => {
                            const image = require(`img/icon/${item.icon}`)
                            return <Item key={index}>
                                        <Img>
                                            <img src={image.default.src} alt="cpp"/>
                                        </Img>
                                        <Text>
                                            <h2 dangerouslySetInnerHTML={{__html: item.text}}></h2>
                                        </Text>
                                    </Item>
                        })
                    } 
                </Items>
            </Content>
        </Section>
    ) 
}

export default WhatYouGet