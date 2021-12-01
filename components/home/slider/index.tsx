import React from 'react' 
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 

//style 
import {
    Section, Content, Item, Items, Image, NavsBtns, NavsBtnsItem
} from './styled'

const Slider: NextPage  = ()=> { 
  
    const [count, setCount] = React.useState<number>(0)  
    const image = useSelector( (state : Store) => state.slider)

    const centerImg =  React.useRef<HTMLDivElement>(null),
          leftImg = React.useRef<HTMLImageElement>(null),
          rihgtImg = React.useRef<HTMLImageElement>(null),
          sliderNav =  React.useRef<HTMLDivElement>(null)

    React.useEffect(() => { 
        let interval = setInterval(() => {  
                setCount( c=> c+1 ) 
            },7000)  
        return () => {
            clearInterval(interval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    React.useEffect(() => { 
        if(count >= 3 ){
            setCount(0) 
        }else{ 

            if(null !== sliderNav.current && null !== centerImg.current && null !== leftImg.current && null !== rihgtImg.current){
                    
                const img : string[] = [   
                    require(`img/slider/${image[0]}`).default.src, 
                    require(`img/slider/${image[2]}`).default.src, 
                    require(`img/slider/${image[2]}`).default.src
                ]

                for(var i=0;i<3;i++){
                    sliderNav.current.children[i].classList.remove('nav--active')
                } 

                centerImg.current.innerHTML = ''

                switch (count) { 
                    case 0:
                        leftImg.current.src = img[2]
                        centerImg.current.innerHTML += `<img class="fade" src="${img[0]}" alt="slider-img2"/>
                                                        <img class="" src="${img[2]} "alt="slider-img3"/>`
                        rihgtImg.current.src = img[1] 
                    break;

                    case 1:
                        leftImg.current.src = img[0] 
                        centerImg.current.innerHTML += `<img class="fade" src="${img[1]}" alt="slider-img2"/>
                                                        <img class="" src="${img[0]}" "alt="slider-img3"/>`
                        rihgtImg.current.src = img[2]
                    break;

                    case 2:
                        leftImg.current.src = img[1]
                        centerImg.current.innerHTML += `<img class="fade" src="${img[2]}" alt="slider-img2"/>
                                                        <img class="" src="${img[1]}" "alt="slider-img3"/>`
                        rihgtImg.current.src = img[0] 
                    break;
                
                    default:
                    break;
                }   
                sliderNav.current.children[count].classList.add('nav--active') 
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    const carousel = ( index : number) : void =>{ 
        setCount(index)
    }

    return ( 
        <Section data-testid="Slider">
            <Content>
                <Items>
                    <Item>
                        <Image src={require(`img/slider/${image[2]}`).default.src} alt="slider-img1" ref={leftImg}/>
                    </Item>
                    <Item ref={centerImg}>
                        <Image src={require(`img/slider/${image[0]}`).default.src} alt="slider-img2"/> 
                    </Item>
                    <Item>
                        <Image src={require(`img/slider/${image[1]}`).default.src} alt="slider-img4" ref={rihgtImg}/>
                    </Item>
                </Items>
                <NavsBtns ref={sliderNav}>
                    <NavsBtnsItem data-testid="slider-btn1" onClick={()=>{carousel(0)}}/> 
                    <NavsBtnsItem data-testid="slider-btn2" onClick={()=>{carousel(1)}}/> 
                    <NavsBtnsItem data-testid="slider-btn3" onClick={()=>{carousel(2)}}/> 
                </NavsBtns>
            </Content>
        </Section>
    )
}
 
export default Slider;