import React from 'react'
import { NextPage } from 'next'

//img
import img1 from 'img/game/daily-discount/image_daily_1.jpg' 
import img2 from 'img/game/daily-discount/image_daily_2.jpg' 
import img3 from 'img/game/daily-discount/image_daily_3.jpg' 

//styled 
import {
    Section, Content, Title, Items, Item, 
    Img, Info, Name, Price, Coupon, Btn
} from './styled'


const DailyDiscount : NextPage = () => (

        <Section data-testid="daily-discount">
            <Content>
                <Title>
                    <h2>Daily <span>SMART</span> <span>Discounts</span> </h2>
                </Title>
                <Items>
                    <Item>
                        <Img>
                            <img src={img1.src} alt="daily0"/>
                        </Img>
                        <Info>
                            <Name>
                                <h2> No Man&apos;s Sky </h2>
                            </Name>
                            <Price>
                                <p className="last-price">13.69 $</p>
                                <p className="current-price">10.95 $</p>
                            </Price>
                            <Coupon>
                                <div>
                                    <h5> price with coupon: </h5>
                                </div>
                                <div>
                                    <h3>IAMSMART2</h3>
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
                    <Item>
                        <Img>
                            <img src={img2.src} alt="daily1"/>
                        </Img>
                        <Info>
                            <Name>
                                <h2> Mount &amp; Blade II: Bannerlord EMEA/US </h2>
                            </Name>
                            <Price>
                                <p className="last-price">28.13 $</p>
                                <p className="current-price">22.50 $</p>
                            </Price>
                            <Coupon>
                                <div>
                                    <h5> price with coupon: </h5>
                                </div>
                                <div>
                                    <h3>IAMSMART2</h3>
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
                    <Item>
                        <Img>
                            <img src={img3.src} alt="daily1"/>
                        </Img>
                        <Info>
                            <Name>
                                <h2> FIFA 21 </h2>
                            </Name>
                            <Price>
                                <p className="last-price">22.61 $</p>
                                <p className="current-price">18.09 $</p>
                            </Price>
                            <Coupon>
                                <div>
                                    <h5> price with coupon: </h5>
                                </div>
                                <div>
                                    <h3>IAMSMART2</h3>
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
                </Items>
            </Content>
        </Section>
) 

export default DailyDiscount
