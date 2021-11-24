import React from 'react'
import { NextPage } from 'next'
import { Store } from 'interfaces/store'
import { useSelector } from 'react-redux'
 
//style 
import { Section, Content, Header, Items, Item }from './styled'
  
const Discover : NextPage = ()=> {
    
    //redux
    const data = useSelector( (state : Store) => state.discover)

    const hoverEffect= (e: React.MouseEvent<HTMLImageElement> & { target: Element } )=>{ 
        const parent = (e.target as HTMLDivElement).closest('.discount-item')
        if(parent !== null){
            parent.classList.add('hover') 
        } 

    }
    const closeHoverEffet = (e: React.MouseEvent<HTMLImageElement> & { target: Element } )=>{  
        const parent = (e.target as HTMLDivElement).closest('.discount-item')
        if(parent !== null){
            parent.classList.remove('hover') 
        } 
    }
    return (
        <Section data-testid="Discover">
            <Content>
                <Header> 
                    <h2 data-testid="header"><span>Discover </span>Gamivo</h2>
                    <a href="/"> Discover all</a>
                </Header>
                <Items>
                    {
                        data.map((title,index) => {
                            const image = require(`img/icon/${title.imageHover}`)
                            const image2 = require(`img/icon/${title.imageNotHover}`)
                            return  <Item key={index} className='discount-item'>
                                        <img src={image2.default.src} alt={`discount${index}`} onMouseOver={hoverEffect} />
                                        <img src={image.default.src} alt={`discount${index}`} onMouseOut={closeHoverEffet}/>
                                        <h4>{title.title}</h4>
                                    </Item> 
                        })
                    }
                </Items>
            </Content>
        </Section>
    )
}

export default Discover