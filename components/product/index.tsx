import React from 'react' 
import { ProductPageProps } from 'interfaces'
import {NextPage} from 'next' 

//img
import logo from 'img/smart-logo.svg'

//styled
import {
    Main, BackgroundImage, Breadcrumbs, BreadcrumbsContent, BreadcrumbsItem,
    Info, InfoContent, Gallery, Cover, OtherImage, Image, Description, ReviewAndBtn,
    Review, Star, Btn, BtnShare, BtnWishlist, NameAndOther, Name, OtherInfo,
    OtherInfoItem, PriceAndBuyBtn, Price, PriceText, PriceIcon, DicountPrice, 
    DicountPriceText, CurrentPrice, BuyBtn, BuyBtnIcon, Affiliate, AffiliateIcon,
    Affiliatetext, Smart, SmartContent, SmartDescription, SmartImage, SmartText,
    SmartButton, DAR, DARContent, DARHeader, DARIcon, DARDescription, ReviewTwo,
    ReviewContent, ReviewHeader, ReviewIcon, ReviewDescription, ReviewText, ReviewTitle,
    ReviewAvarage, ReviewBtn 
} from './styled'

 

  
const Index : NextPage<ProductPageProps> = ({data}) => {   
    
    //state
    const [discount, setDiscount] = React.useState(false)  

    //ref
    const coverImage = React.useRef<HTMLImageElement>(null)

    const changeImage = (numb : number )=>{  
        if(null !== coverImage.current){
            if(numb !== 5){
                coverImage.current.src = require( `img/game/info/${data[0].image[numb]}`).default.src
            }else{
                coverImage.current.src = require( `img/game/info/${data[0].coverImg}`).default.src
            }
        }
    }
  
    return (
        <Main className="Product" data-testid="product">
            <BackgroundImage style={{backgroundImage: `url(${ require( `img/game/info/${data[0].coverImg}`).default.src })`}} ></BackgroundImage>
            <Breadcrumbs>
                <BreadcrumbsContent>
                    <BreadcrumbsItem>
                        <a href="/" data-testid="breadcumbs1">Home </a>
                    </BreadcrumbsItem>
                    <BreadcrumbsItem>
                        <a href="/product" data-testid="breadcumbs2">/ Product</a>
                    </BreadcrumbsItem>
                    <BreadcrumbsItem>
                        <a href="/section" aria-hidden data-testid="breadcumbs3"> / { data[0].name} </a>
                    </BreadcrumbsItem>
                </BreadcrumbsContent> 
            </Breadcrumbs>
            <Info>
                <InfoContent>
                    <Gallery>
                        <Cover>
                            <img  ref={coverImage} src={require( `img/game/info/${data[0].coverImg}`).default.src} alt=""/>
                        </Cover>
                        <OtherImage >
                            <Image onClick={changeImage.bind(this,5)}>
                                <img src={require( `img/game/info/${data[0].coverImg}`).default.src} alt=""/>
                            </Image>
                            <Image onClick={changeImage.bind(this,0)}>
                                <img src={require( `img/game/info/${data[0].image[0]}`).default.src} alt=""/>
                            </Image>
                            <Image onClick={changeImage.bind(this,1)}>
                                <img src={require( `img/game/info/${data[0].image[1]}`).default.src} alt=""/>
                            </Image>
                            <Image onClick={changeImage.bind(this,2)}>
                                <img src={require( `img/game/info/${data[0].image[2]}`).default.src} alt=""/>
                            </Image> 
                            <Image onClick={changeImage.bind(this,3)}>
                                <img src={require( `img/game/info/${data[0].image[3]}`).default.src} alt=""/>
                            </Image>
                        </OtherImage>
                    </Gallery>
                    <Description>
                        <ReviewAndBtn>
                            <Review >
                                <h6 data-testid="review">User reviews (66)</h6>
                                <Star>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li> 
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </Star>
                            </Review >
                            <Btn>
                                <BtnShare>
                                    <h6>Share</h6>
                                    <div>
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </BtnShare>
                                <BtnWishlist>
                                    <h6>Add to Wishlish</h6> 
                                    <div>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                </BtnWishlist>
                            </Btn>
                        </ReviewAndBtn>
                        <NameAndOther>
                           <Name>
                               <h4 aria-hidden data-testid="name">{data[0].name}</h4>
                           </Name>
                           <OtherInfo>
                               <OtherInfoItem>
                                   <h5>Region :</h5>
                                   <h3 data-testid="region" aria-hidden  >{data[0].region}</h3>
                               </OtherInfoItem>
                               <OtherInfoItem>
                                    <h5>Platform :</h5>
                                    <h3 data-testid="platform"  aria-hidden >{data[0].platform}</h3>
                               </OtherInfoItem>
                               <OtherInfoItem>
                                    <h5>Language :</h5>
                                    <h3 data-testid="language" aria-hidden >{data[0].languages[0]}</h3>
                               </OtherInfoItem>
                               <OtherInfoItem>
                                    <h5>Stock :</h5>
                                    <h3 data-testid="stock" aria-hidden>{data[0].stock}</h3> 
                               </OtherInfoItem> 
                           </OtherInfo>
                        </NameAndOther>
                        <PriceAndBuyBtn>
                            <Price>
                                <CurrentPrice >
                                    <PriceText>
                                        <h3>Promoted offer:</h3>
                                        <PriceIcon>
                                            <i className="fas fa-info-circle"></i>
                                            <div className="Price__info-block">
                                                <p>This offer is promoted. Check the listing for more standard offers</p>
                                            </div>
                                        </PriceIcon>
                                    </PriceText>
                                    <div>
                                        <h2 aria-hidden  data-testid="price" >{data[0].price}$</h2>
                                    </div>
                                </CurrentPrice>
                                {
                                    discount === true ?
                                    <DicountPrice>
                                        <PriceText>
                                            <h3> <span>SMART</span>price:</h3>
                                            <PriceIcon>
                                                <i className="fas fa-info-circle"></i>
                                                <div>
                                                    <p>Special discounted price for first order with smart</p>
                                                </div>
                                            </PriceIcon>
                                        </PriceText>
                                        <DicountPriceText>
                                            <h2 aria-hidden data-testid="discount-price" >{data[0].discountPrice}$</h2>
                                        </DicountPriceText>
                                    </DicountPrice> : ''
                                }
                            </Price>
                            <BuyBtn>
                                <BuyBtnIcon >
                                    <i className="fas fa-shopping-cart"></i>
                                </BuyBtnIcon >
                                <button type="button" data-testid="buy-btn">BUY NOW</button>
                            </BuyBtn>
                        </PriceAndBuyBtn>
                        <Affiliate>
                            <AffiliateIcon>
                                <i className="fas fa-dollar-sign"></i>
                            </AffiliateIcon>
                            <Affiliatetext>
                                <h5>Earn up to <span>1.80 $</span> with our affiliate program!</h5>
                            </Affiliatetext>
                        </Affiliate>
                    </Description>
                </InfoContent>
            </Info>
            <Smart>
                <SmartContent>
                    <SmartDescription>
                        <SmartImage>
                            <img src={logo.src} alt="smart"/>
                        </SmartImage> 
                        <SmartText>
                            <h3> Subscribe to our <span> VIP program</span> to get access to best deals! Unique <span>discounts</span>, giveaways and<span> top priority service included!</span></h3>
                        </SmartText>
                    </SmartDescription>
                    <SmartButton data-testid="smart-btn"> 
                        <i className="fas fa-power-off"></i>
                        <h3>ACTIVE GAMIVO SMART</h3> 
                    </SmartButton>
                </SmartContent>
            </Smart>
            <DAR>
                <DARContent>
                    <DARHeader>
                        <DARIcon>
                            <i className="fas fa-file-alt"></i>
                        </DARIcon>
                        <h3>DESCRIPTION AND REQUIREMENTS</h3>
                    </DARHeader>
                    <DARDescription>
                        <p>Discover the best Game Key offers, compare prices to download and play FIFA 21 ENG/PL/CZ/TR at the best cost. Compare the CD Key price from suppliers all around the world. Activate CD Keys on your Origin client to download the games and play in multiplayer or singleplayer.</p>
                        <p>GAMIVO is a platform to find, compare and buy digital game keys. Only verified and trusted suppliers can sell digital goods on GAMIVO.</p>        
                        <p>Add the CD Key to your Origin account, the game you bought will be added to your library. Now you can download Origin PC video games for free at any time you want whenever you install and launch the Origin client.</p>
                        <h3>How to activate the game CD key:</h3>       
                        <p>Launch Origin platform on your PC and log in to your account. Click the Origin logo in the upper left corner of the main window, then click the Redeem Product Code button. Enter the game cd key you have received after purchase and enjoy your game.</p>
                        <h3>Check the bestsellers from different platforms as well:</h3>    
                        <ul>
                            <li> <h6>Origin games</h6></li>
                            <li> <h6>Uplay games</h6></li>
                            <li> <h6>Battle.net games</h6></li>
                            <li> <h6>Bethesda games</h6></li>
                            <li> <h6>Steam games</h6></li>
                            <li> <h6>Bethesda games</h6></li>
                        </ul> 
                    </DARDescription>
                </DARContent>
            </DAR>
            <ReviewTwo>
                <ReviewContent>
                    <ReviewHeader>
                        <ReviewIcon>
                            <i className="fas fa-comment-alt"></i>
                        </ReviewIcon>
                        <h3>REVIEWS</h3>
                    </ReviewHeader>
                    <ReviewDescription>
                        <ReviewText>
                            <ReviewTitle >
                                <h3 aria-hidden >{data[0].name}</h3> <span>reviews (38)</span>
                            </ReviewTitle >
                            <ReviewAvarage>
                                <h4>Average rating: <span>4.5</span>  (38 votes)</h4>
                            </ReviewAvarage>
                        </ReviewText>
                        <ReviewBtn>
                            <i className="fas fa-star"></i>
                            <h3>Add Review and Earn Up to €1</h3> 
                        </ReviewBtn>
                    </ReviewDescription>
                </ReviewContent>
            </ReviewTwo>
        </Main>  
    )
}


export default Index