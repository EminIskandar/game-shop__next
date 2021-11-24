import React from 'react'
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

//img
import img1 from 'img/slider/image_smart_slider_1.jpg'
import img2 from 'img/slider/image_smart_slider_2.jpg'
import img3 from 'img/slider/image_smart_slider_3.jpg'
import img4 from 'img/slider/image_smart_slider_4.jpg'
import img5 from 'img/slider/image_smart_slider_5.jpg'
import img6 from 'img/slider/image_smart_slider_6.jpg'

//styled
import {
    Section, Content, Title, SliderItem, ItemContent, Image,
    Info, Name, PriceAndBuy, PriceAndCoupon, Price, Coupon,
    Btn, Icon, Nav, Navİtem, Arrows, ArrowsItem 
} from './styled'

const Slider: NextPage = ()=> {
    const [count, setCount] = React.useState(0)
    const [lastIndex,setLastIndex ] = React.useState(0)
    const images = [img1,img2,img3,img4,img5,img6]

    const sliderImg = React.useRef<HTMLImageElement>(null); 
    const navItem = React.useRef(null)

    React.useEffect(() => {
        const inteval = setInterval(() => {
            setCount( c => c + 1)
        }, 6000);
        return () => {
             clearInterval(inteval)
        }
    },[])

    React.useEffect(() => {  
        if(count >= 6 ){
            setCount(0) 
        }else{ 
            if(null !== navItem.current && null !== sliderImg.current ){ 
                let  lastImgNumb = 0; 
                const navLinks = document.querySelectorAll('.nav-item')

                for(var i=0;i< navLinks.length ;i++){ 
                    navLinks[i].classList.remove('active') 
                }

                if(lastIndex > count-1){
                    
                    lastImgNumb = count-1

                    if(lastImgNumb < 0){
                        lastImgNumb = 5;
                    } 

                }else{
                    lastImgNumb = lastIndex;
                } 

                sliderImg.current.innerHTML = `<img src="${images[count].src}" alt="smart-slider-image1" class="fade"/>
                                                <img src="${images[lastImgNumb].src}" alt="smart-slider-image2"/>`
                navLinks[count].classList.add('active')

                setLastIndex(count)
            }
                 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    const nav = (index : number )=>{
        setCount(index)  
    }
    const leftArrow = ()=>{

        if(count <= 0){
            setCount(0)
        }else{
            setCount(count - 1)
        }
    }
    const rightArrow = ()=>{
        if(count >= 6){
            setCount(0)
        }else{
            setCount(count + 1)
        } 
    }
    return (
        <Section data-testid="smart-slider">
            <Content>
                <Title>
                    <h2>Exclusive <span>SMART</span> Discounts</h2>
                </Title>  
                <SliderItem>
                    <ItemContent>
                        <Image ref={sliderImg}>
                            <img src={img1.src} alt="smart-slider-image1"/>
                            <img src={img2.src} alt="smart-slider-image2"/>
                        </Image>
                        <Info>
                            <Name>
                                <h2>Outriders EU PRE-ORDER</h2>
                            </Name>
                            <PriceAndBuy>
                                <PriceAndCoupon>
                                    <Price>
                                        <h2 className="last-price">41.03 $</h2>
                                        <h4 className="current-price">36.69 $</h4>
                                    </Price>
                                    <Coupon>
                                        <div>
                                            <h6>price with coupon:</h6>
                                        </div>      
                                        <div>
                                            <h4>IAMSMART</h4>
                                        </div>
                                    </Coupon>
                                </PriceAndCoupon>
                                <Btn>
                                    <Icon>
                                        <FontAwesomeIcon icon={faHistory}></FontAwesomeIcon>
                                    </Icon>
                                    <h2  >PRE-ORDER</h2>
                                </Btn>
                            </PriceAndBuy>
                        </Info>
                    </ItemContent> 
                </SliderItem>
                <Nav ref={navItem}>
                    <Navİtem className="active nav-item" onClick={nav.bind(this,0)}></Navİtem>
                    <Navİtem className="nav-item" onClick={nav.bind(this,1)}></Navİtem>
                    <Navİtem className="nav-item" onClick={nav.bind(this,2)}></Navİtem>
                    <Navİtem className="nav-item" onClick={nav.bind(this,3)}></Navİtem>
                    <Navİtem className="nav-item" onClick={nav.bind(this,4)}></Navİtem>
                    <Navİtem className="nav-item" onClick={nav.bind(this,5)}></Navİtem>
                </Nav >
                <Arrows>
                    <ArrowsItem onClick={leftArrow}></ArrowsItem>
                    <ArrowsItem onClick={rightArrow}></ArrowsItem>
                </Arrows>
            </Content>
        </Section>
    )
}

export default Slider