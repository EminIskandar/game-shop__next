import React from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//styled
import {
    Section, Content, Title, Items, Item, Info, 
    Img, Price, Coupon, Btn, LoadMore, LoadMoreBtn 
} from './styled'

const CurrentDiscount : NextPage = ()=> {

    //redux
    const data = useSelector( (state : Store ) => state.currentDiscount)
    
    return (
        <Section data-testid="current-discount"> 
            <Content>
                <Title>
                    <h2>Current <span>SMART</span> <span>Discounts</span> </h2>
                </Title>
                <Items>
                    {
                        data.map((product, index) => {    
                            const image = require(`img/game/current-discount/${product.image}`)
                            return   <Item key={index}>
                                        <Img>
                                            <img src={image.default.src} alt={`discount${index}`}/>
                                        </Img>
                                        <Info>
                                            <Img>
                                                <h2> {product.name} </h2>
                                            </Img>
                                            <Price>
                                                <p className="last-price">{`${product.price}$`}</p>
                                                <p className="current-price">{`${product.discountPrice}$`}</p>
                                            </Price>
                                            <Coupon>
                                                <div>
                                                    <h5> price with coupon: </h5>
                                                </div>
                                                <div>
                                                    <h3>IAMSMART</h3>
                                                </div>
                                            </Coupon>
                                            <Btn>
                                                <div>
                                                    <i className="fas fa-shopping-cart"></i>
                                                </div>
                                                <h2>BUY NOW</h2>
                                            </Btn>
                                        </Info>
                                    </Item>  
                        })
                    } 
                </Items> 
                <LoadMore>
                    <LoadMoreBtn>
                        <div>
                            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        </div>
                        <h2>LOAD MORE</h2>
                    </LoadMoreBtn>
                </LoadMore>
            </Content>
        </Section> 
    ) 
}

export default CurrentDiscount