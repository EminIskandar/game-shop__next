import React from 'react'
import Link from 'next/link';
import { ProductComponentProps } from 'interfaces'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 
import { faBattleNet, faSteam, faXbox, } from '@fortawesome/free-brands-svg-icons'; 
 
//styled
import { Product, ImageAndName, Image, Name, Platform,
         Price, CurrentPrice, DiscountPrice, Discount,
        Present, Btn } from './styled' 

const Products : React.FC<ProductComponentProps> = ( {productData , align } ) => {
    
    const data = productData
    const image = require( `img/game/info/${data.coverImg}`)
    const discountPercent = 100  //- ( (parseInt(data.discountPrice)*100) / data.price ) ;  

    return (
       <>
            <td>
                <Link href={`/product/${data.path}`}>
                    <Product  theme={align}>
                        <ImageAndName>
                            <Image>
                                <img src={image.default.src} alt={`image-${data.id}`}/>
                            </Image>
                            <Name>
                                <h3>{data.name}</h3>
                            </Name>
                        </ImageAndName>
                        <Platform>
                            {
                                data.platform === 'steam' ?  <FontAwesomeIcon icon={faSteam}></FontAwesomeIcon>: ''
                            }
                            {
                                data.platform === 'xbox' ?  <FontAwesomeIcon icon={faXbox}></FontAwesomeIcon>: ''
                            }
                            {
                                data.platform === 'battle.net' ?  <FontAwesomeIcon icon={faBattleNet}></FontAwesomeIcon>: ''
                            }
                            {
                                data.platform === 'official website' ?   <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>: ''
                            }  
                            {
                                data.platform === 'origin' ?   <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>: ''
                            }  
                            {
                                data.platform === 'ubisoft' ?   <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>: ''
                            }  
                        </Platform>
                        <Price>
                            {
                                data.discountPrice === " " 
                                ?  
                                    <CurrentPrice>
                                        <span>from</span>
                                        <p>{data.price +"$"}</p>
                                    </CurrentPrice>  
                                :
                                <>
                                    <CurrentPrice>
                                        <span>from</span>
                                        <p>{data.discountPrice +"$"}</p>
                                    </CurrentPrice> 
                                    <DiscountPrice>
                                        <Present>
                                            <p>{discountPercent + "%"}</p>
                                        </Present>
                                        <Discount>
                                            <p>{data.price +"$"}</p>
                                        </Discount>
                                    </DiscountPrice>
                                </>
                            }
                            
                        </Price>
                        <Btn data-testid={`btn-${data.id}`}> 
                            <button type="button">BUY NOW</button>
                        </Btn>
                    </Product>
                </Link>
            </td> 
       </>
    )
}

export default Products;