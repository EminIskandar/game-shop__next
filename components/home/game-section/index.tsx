import React from 'react' 
import { NextPage } from 'next'
import Link from 'next/link'
import { GameSectionProp } from 'interfaces'

import database from 'db/db.json'  

//style 
import {
    LineItem, Games, Content, Title, Slider, Items, NameAndBtn, Name, 
    Btn, Img, Price, Platform, Item, Nav, NavLeftBtn, NavRightBtn
} from './styled'
 
const  GameSection: NextPage<GameSectionProp> = ({sectionName})=>{ 
    
    //redux
    const [Line, setLine] = React.useState<boolean>(false)  
    const [count, setCount] = React.useState<number>(0) 
    const [lenght, setLenght] = React.useState<number>(0) 
    const [data, setData] = React.useState(database.games)  
    
    //ref
    const slider = React.useRef<any>(null)
    const width = React.useRef<any>(null)

    React.useEffect(()=>{
        if(sectionName === 'Under 5$'){
            setLine(true)
        }
        
        if(data !== null){
            if(sectionName === 'Popular'){
                let popular =[...data].sort( (a: any, b: any) :number => {
                    return parseFloat (a.sales) - parseFloat (b.sales);
                });
                popular.reverse() 
                setData(popular) 
            }else if(sectionName === 'Newest'){
                // id 
            }else if(sectionName === 'Under 5$'){
                let under5 = [...data].filter( item => item.price > 0 && item.price < 5 )
                setData(under5) 
            }else if(sectionName === 'Most wanted'){
                //random 
                let mostWanted = [...data].filter( item => item.section === "adventure" )
                setData(mostWanted) 
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sectionName])
    
    React.useEffect(()=>{
         carousel() 
         // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[count])
 
    React.useEffect(() => {
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    })

    const resize = () : void=>{
        setCount(0)
        carousel()  
    }

    const carousel = ()=>{ 
        const Slider = slider.current.children,
              Width = width.current.offsetWidth

        setLenght(Slider.length)

        for(var item of Slider ){
            item.style = `transform: translateX(-${(Width+6)*count}px)` 
        } 
    }

    const left = () : void =>{
        if(count <= 0){
            setCount(0)
        }else{
            setCount(count - 1)
        }
    }
    const right = () : void =>{
        if(count >= (lenght-4)){
            setCount(lenght-4)
        }else{
            setCount(count + 1)
        } 
    }

    return ( 
        <React.Fragment>
            {
                Line === true ? <LineItem/> : ''
            }
            <Games data-testid="GameSection">
                <Content>
                    <Title>
                        <h3>{sectionName}</h3>
                    </Title>
                    <Slider>
                        <Items ref={slider}>
                            {
                                data.map((product, index) => {  
                                    const  image = require( `img/game/info/${product.coverImg}`)  
                                    if(index < 10 ){
                                        return  <Link href={`/product/${product.path}`}  key={index} passHref>
                                                    <Item ref={width}>
                                                        <Img>
                                                            <img src={image.default.src} alt={`${sectionName}${index}`}/>
                                                        </Img>
                                                        <NameAndBtn> 
                                                            <Name>
                                                                <h3>{product.name}</h3>
                                                            </Name>
                                                            <Btn data-testid={`button${index}`}>BUY NOW</Btn>
                                                        </NameAndBtn>
                                                        <Price>
                                                            <h3><span>from</span> {product.price+ " $"}</h3>
                                                            <Platform>
                                                                <i className="fab fa-steam"></i>
                                                            </Platform>
                                                        </Price>
                                                    </Item> 
                                                </Link> 
                                                
                                    }else{
                                        return null
                                    }
                              })
                            }
                              
                        </Items>
                    </Slider>
                    <Nav>
                        <NavLeftBtn onClick={left} />  
                        <NavRightBtn onClick={right} />  
                    </Nav>
                </Content>
            </Games>
        </React.Fragment>
    )
}

export default GameSection;