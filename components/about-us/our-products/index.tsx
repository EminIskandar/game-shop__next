//img
import * as Images from 'img/companies' 
import { NextPage } from 'next'

//styled
import {
    Section, Content, Title, Logos, LogoItem, Btns
} from './styled'

const OurProducts: NextPage  = ()=> (
    <Section data-testid="our-product"> 
        <Content>
            <Title>
                <h2><span>OUR</span> PRODUCTS</h2>
            </Title>
            <Logos>
                {
                    Object.values(Images).map((img,index)=>{
                        return  <LogoItem key={index}>
                                    <img src={img.src} alt={`logo-product${index}`}/>
                                </LogoItem>
                    })
                } 
            </Logos>
            <Btns>
                <button type="button">Browse Bestsellers</button>
                <button type="button">Browse Pre-Order</button>
            </Btns>
        </Content>
    </Section>
) 

export default OurProducts;