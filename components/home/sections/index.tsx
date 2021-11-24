import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

//component
import GameSection from '../game-section' 

//datebase
import database from 'db/db.json' 

//style 
import {
    Section, Content, Pc, Mobile, MobileContent, MobileTitles, MobileItems, 
    MobileItem, MobileTitleItem, MobileItemImg, MobileItemInfo, MobileItemPrice, 
    MobileItemTitle
} from './styled'


const Sections : NextPage = ()=>{

    //state
    const gameSections : string[] = ['Popular', 'Newest','Under 5$','Most wanted']; 
    const [data, setData] = React.useState<Object>([...database.games])   
    const  newest : Object = [...database.games];   
    const  popular : Object = [...database.games].sort(function(a : any, b : any ) : number {  return parseFloat(a.sales) - parseFloat(b.sales); }).reverse()  
    const  under5 : Object = [...database.games].filter( item => item.price > 0 && item.price < 5 ) 
    const  mostWanted: Object = [...database.games].filter( item => item.section === "adventure" ) 
    
    //ref
    const sectionName = React.useRef<HTMLDivElement>(null)

    const changeSection = (index : number) : void=>{ 
        if(null !== sectionName.current){
            const lenght:number = sectionName.current.children.length;

            for(var item = 0; item< lenght; item ++){
                sectionName.current.children[item].classList.remove('active') 
            }
            
            sectionName.current.children[index].classList.add('active')

            switch (index) {
                case 0:  
                setData(newest)
                    break;
                //--//
                case 1:  
                setData(popular)
                    break;
                //--//
                case 2:  
                setData(under5)
                    break;
                //--//
                case 3:  
                setData(mostWanted)
                    break; 
            
                default:
                    break;
            }
        }
    }

    return (
        <Section data-testid="Sections">
            <Content>
                <Pc>
                    {
                        gameSections.map((name,index) => {
                            return <GameSection sectionName={name} key={index}/> 
                        })
                    }
                </Pc>
                <Mobile>
                    <MobileContent>
                        <MobileTitles  ref={sectionName}> 
                            <MobileTitleItem className="active"  onClick={changeSection.bind(this,0)}>
                                <h3>Popular</h3>
                            </MobileTitleItem>  
                            <MobileTitleItem onClick={changeSection.bind(this,1)}>
                                <h3>Newest</h3>
                            </MobileTitleItem>  
                            <MobileTitleItem onClick={changeSection.bind(this,2)}>
                                <h3>Under 5$</h3>
                            </MobileTitleItem>  
                            <MobileTitleItem onClick={changeSection.bind(this,3)}>
                                <h3>Most wanted</h3>
                            </MobileTitleItem>  
                        </MobileTitles>
                        <MobileItems>
                            { 
                                
                                Object.values(data).map( (product: any, index : number) => {  
                                    const image = require( `img/game/info/${product.coverImg}`) 
                                    if(index < 5 ){
                                        return  <Link href={`/product/${product.path}`} key={index}>
                                                    <MobileItem>
                                                        <MobileItemImg>
                                                            <img src={image.default} alt={product.name}/>
                                                        </MobileItemImg>
                                                        <MobileItemInfo>
                                                            <MobileItemTitle>
                                                                <h4>{product.name}</h4>
                                                            </MobileItemTitle>
                                                            <MobileItemPrice>
                                                                <h4><span>from</span>{product.price + "$"}</h4>
                                                                <button data-testid={`button${product.id}`}>BUY NOW</button>
                                                            </MobileItemPrice> 
                                                        </MobileItemInfo>
                                                    </MobileItem> 
                                                </Link>  
                                    }else{
                                        return null
                                    }
                                })
                            }  
                        </MobileItems>
                    </MobileContent>
                </Mobile>
            </Content>
        </Section>
    )
}

export default  Sections;