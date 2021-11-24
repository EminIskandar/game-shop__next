
import { NextPage } from 'next'

//img
import img1 from 'img/icon/gamivo-smart-hover.png'

//style 
import {
    Section, Content, Header, Image, Text, PriceAndBtn,
    Price,  Btn,
} from './styled' 

const Subscription : NextPage = ()=> (
    <Section data-testid="Subscription">
        <Content>
            <Header>
                <Image>
                    <img src={img1.src} alt="sub-logo"/>
                </Image>
                <Text>
                    <h3> <span>VIP Subscription</span> that guarentees lowest price! Why this is worth consdering? Check out all perks!</h3>
                </Text>
            </Header>
            <PriceAndBtn>
                <Price>
                    <h3>All for <span>1.99$</span>/month</h3>
                </Price>
                <Btn>
                    <i className="fas fa-power-off"></i>
                        <h3>ACTIVE GAMIVO SMART</h3>
                </Btn>
            </PriceAndBtn>
        </Content>
    </Section>
) 

export default Subscription