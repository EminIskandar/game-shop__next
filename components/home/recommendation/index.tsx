import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'

//styled
import {
    Section, Content, Items,  ItemText, ItemImage, 
    Image, Info, Title, Price, Item, ItemLink,
}from './styled'

const Recommendation: NextPage  = ()=> { 
        
    //redux
    const data = useSelector((state : Store) => state.recommendation)
        
    return( 
        <Section data-testid="Recommendation">
            <Content>
                <Items>
                    <Item> 
                        <ItemText>
                            <h2>Hi, <span>Gamer</span></h2>
                            <h4>Recommendations for you</h4>
                        </ItemText>
                    </Item>
                    {
                        data.map( ( item , index : number) => { 
                            if(index <= 1 ){
                                const image  = require(`img/game/info/${item.image}`)
                                return <Link  href={item.path} key={item.name}>
                                            <ItemLink theme={'theme1'}>
                                                <ItemImage>
                                                    <Image src={image.default.src} alt=""/>
                                                </ItemImage>
                                                <Info theme={'theme1'}>
                                                    <Title theme={'theme1'}>
                                                        <h4>{item.name}</h4>
                                                    </Title>
                                                    <Price theme={'theme1'}>
                                                        <h4><span>from</span>{item.price} $</h4>
                                                        <button>BUY NOW</button>
                                                    </Price>
                                                </Info>
                                            </ItemLink> 
                                        </Link> 
                            }else{
                                return ''
                            } 
                        })
                    } 
                </Items>
                {
                    data.map( ( item , index : number) => { 
                        if(index >= 2 ){
                            const image  = require(`img/Recommendation/${item.image}`)
                            return  <Link href={item.path} key={item.name}>
                                        <ItemLink theme={'theme2'}>
                                            <ItemImage>
                                                <Image src={image.default.src} alt="recommendantion-1"/>
                                            </ItemImage>
                                            <Info theme={'theme2'}>
                                                <Title theme={'theme2'}>
                                                    <h4>{item.name}</h4>
                                                </Title>
                                                <Price theme={'theme2'}>
                                                    <h4><span>from</span>{item.price}$</h4>
                                                    <button data-testid="rec-button">BUY NOW</button>
                                                </Price>
                                            </Info>
                                        </ItemLink> 
                                    </Link> 
                        }else{
                            return ''
                        } 
                    })
                }  
            </Content>
        </Section>
    ) 
}

export default Recommendation;