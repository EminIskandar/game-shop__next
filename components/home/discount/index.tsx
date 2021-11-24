import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'

//style 
import {
    Section, Content, Header, Items, Item, Image, 
    Info, Title, Price, Coupon, BuyBtn 
} from './styled'

const Discount : NextPage = ()=>  {
    
    //redux
    const discount = useSelector( (state : Store) => state.discount)
    
    return(
        <Section data-testid="Discount">
            <Content>
                <Header>
                    <h4><span>Daily</span>Smart<span>Discounts</span></h4>
                </Header>
                <Items>
                    {
                        discount.map((item)=>{
                            const image = require(`img/game/${item.image}`)
                            return <Link href="/product/far-cry-5-emea-ubisoft-connect-cd-key" key={item.name}>
                                        <Item>
                                            <Image>
                                                <img src={image.default.src} alt="far-cry"/>
                                                <h4>{item.discountPercent}</h4>
                                            </Image>
                                            <Info>
                                                <Title>
                                                    <h4>{item.name}</h4>
                                                </Title>
                                                <Price>
                                                    <h4> <span>{item.price}$</span>{item.discountPrice} $</h4> 
                                                    <Coupon>
                                                        <h4>price with coupon:</h4>
                                                        <span data-testid="coupon">IAMSMART2</span>
                                                    </Coupon>
                                                </Price>
                                                <BuyBtn>
                                                    <button type="button" data-testid="button">BUY NOW</button>
                                                </BuyBtn>
                                            </Info>
                                        </Item> 
                                    </Link> 
                        })
                    }
                </Items>
            </Content>
        </Section>
    ) 
}

export default Discount