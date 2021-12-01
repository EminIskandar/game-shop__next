import React from 'react'
import { NextPage } from 'next'

//img
import shield from 'img/icon/shield.svg'
import flag from 'img/other/eu-flag-gamivo.webp'
import cpp from 'img/other/cpp01.webp'

//styled
import {
    Section, Content, Items, Item, Title, Description, 
    DescriptionTitle, Text, TextItem, TextImg, Nav, NavItem
} from './styled'

const Slider : NextPage  = ()=> { 

    //state
    const [count, setCount] = React.useState<number>(0)
 
    //ref
    const sliderItem = React.useRef(null);
    const navItem = React.useRef(null)

    React.useEffect(() => {
        const inteval = setInterval(() => {
            setCount( c => c + 1)
        }, 6000);
        return () => {
             clearInterval(inteval) 
        }
    }, [])

    React.useEffect(() => { 
        if(count >= 3 ){
            setCount(0) 
        }else{ 
            if(null !== sliderItem.current && null !== navItem.current){
                const sliderItems = document.querySelectorAll('.slider-item')
                const navItems = document.querySelectorAll('.nav-item')

                for(var i=0;i<sliderItems.length;i++){
                    sliderItems[i].setAttribute( 'style', `transform: translateX(-${count*100}%);`);
                    sliderItems[i].classList.remove('active')
                }

                navItems[count].classList.add('active')
            }    
        }
    }, [count])

    const nav= ( index: number) : void =>{
        setCount(index)  
    }

    return (
        <Section data-testid="about-slider">
            <Content>
                <Items ref={sliderItem}>
                    <Item className='slider-item'>
                        <Title>
                            <h2><span>Data</span> Protection</h2>
                        </Title>
                        <Description>
                            <DescriptionTitle>
                                <h2>Buying and selling on GAMIVO is the most important part of the platform, therefore we take great care in ensuring the safte of our cuustomers</h2>
                            </DescriptionTitle>
                            <Text>
                                <TextItem>
                                    <img src={shield.src} alt="shield"/>
                                    <h2>All transactions are monitored, verifed and analysed</h2>
                                </TextItem> 
                                <TextItem>
                                    <img src={shield.src} alt="shield"/>
                                    <h2>We only use verifed 3rd party partnes like Paypal or Hipay</h2>
                                </TextItem>
                            </Text>
                        </Description>
                    </Item>
                    <Item className='slider-item'>
                        <Title>
                            <h2><span>Europion</span> Union</h2>
                        </Title>
                        <Description>  
                            <TextItem> 
                                <h2> Gamivo is the only digital website regostered and operated with European Union and it&apos;s law. We make sure to follow all official directives and instructuions that exist in UE jurisdiction</h2>
                            </TextItem>  
                            <TextImg>
                                <img src={flag.src} alt=""/>
                            </TextImg>
                        </Description>
                    </Item>
                    <Item className='slider-item'>
                        <Title>
                            <h2><span>Customer</span> Protection Program</h2>
                        </Title>
                        <Description>
                            <TextImg>
                                <img src={cpp.src} alt=""/>
                            </TextImg>  
                            <TextItem> 
                                <h2>All purchases on GAMIVO are protected by our outstanding Customer Support Team. Customer Protection Program Guarantess addtional layer of service for you <span>Click here</span> to find out more About CPP!</h2>
                            </TextItem>  
                        </Description>
                    </Item>
                </Items>
                <Nav ref={navItem}>
                    <NavItem className="nav-item" onClick={nav.bind(this,0) }></NavItem>
                    <NavItem className="nav-item" onClick={ nav.bind(this,1) }></NavItem>
                    <NavItem className="nav-item" onClick={ nav.bind(this,2)  }></NavItem>
                </Nav>
            </Content>
        </Section>
    )
}

export default Slider
