import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 

//style 
import {
    Section, Content, Header, Items, Item, Info, 
    Title, Numb, Price, Image 
}from './styled'
 

const TopTen : NextPage = ()=> { 

    //redux
    const data = useSelector( (state : Store) => state.topTen)

    return (
        <Section data-testid="TopTen">
            <Content>
                <Header>
                    <i className="fas fa-star"></i>
                    <h3>Top 10</h3>
                </Header>
                <Items>
                    {
                        data.map((element , index )=>{
                            const image = require( `img/game/TopTen/${element.img}`)
                            return  <Link href={element.path} key={index}>
                                        <Item>
                                            <Image>
                                                <img src={image.default.src} alt={`TopTen${index}`}/>
                                            </Image>
                                            <Info>
                                                <Title>
                                                    <h4>{element.title}</h4>
                                                </Title>
                                                <Price>
                                                    <h4><span>from</span>{element.price}</h4>
                                                    <button data-testid={`button${index}`}>BUY NOW</button>
                                                </Price>
                                            </Info>
                                            <Numb>
                                                <h3>{(index+1)}</h3>
                                            </Numb>
                                        </Item>
                                    </Link>
                        })
                    }    
                </Items>
            </Content>
        </Section>
    )
}

export default TopTen