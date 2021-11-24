 /* eslint-disable-next-line @next/next/no-img-element */

import React from 'react' 
import Link from 'next/link'
import { NextPage } from 'next'
import { useRouter } from 'next/router' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearch, faGlobe, faWallet, faShoppingCart, faUserCircle, faClock, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import { product } from 'interfaces'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'

//style 
import {
    Header, Container, TopItems, BottomItem, ToogleMenuIcon, Logo, Search, SearchForm, SearchResult, SearchButton,
    LangAndCurrency, Lang, Currency, LangContent, CurrencyContent, Selected, Icon, Text, List, CartAndLogin, Login,
    Cart, LoginContent, CartContent, CartPrice, CartProducts, CartProductsList, CartIcon, CartCount, Icons, IconsItem,
    Nav, NavSectionItem, NavSectionLinks, NavSections,  GroupItem, GroupItemLinks, 
    GroupItemLinksRight, GroupItemLinksLeft, LinksGroup, NavSectionLinksContent, LinkWithDate, LinkIcon, LinksGroupTitle,
    ToggleMenu, ToggleMenuContent, ToggleMenuClose, ToggleMenuList, ToggleMenuListItem, ToggleMenuListItems, ToggleMenuLinksGroup,
    ToggleMenuLinksGroupItems, ToggleMenuLinksGroupItem ,ToggleMenuLinks, ToggleMenuLinksItems, ToggleMenuLinksItem,
    MobileSearch, MobileSearchForm, MobileSearchResult, MobileSearchResultBtn
} from './styled' 

//img
import logo from 'img/logo.svg' 
import logo2 from 'img/logo2.svg'   

//data
import database from 'db/db.json'    
  
const Headers: NextPage  = () => { 
    
    //router
    const router = useRouter() 

    //redux
    const headerMenu = useSelector((state : Store) => state.headerMenu)

    //ref
    const headerBottom = React.useRef<HTMLDivElement>(null)
    const headerSearch = React.useRef<HTMLDivElement>(null)
    const headerCartAndLogin = React.useRef<HTMLDivElement>(null)
    const langList = React.useRef<HTMLDivElement>(null)
    const selecedLang = React.useRef<HTMLDivElement>(null)
    const currencyList = React.useRef<HTMLDivElement>(null)
    const selectedCurrency = React.useRef<HTMLDivElement>(null)
    const searchWindow = React.useRef<HTMLDivElement>(null)
    const toggleMenu = React.useRef<HTMLDivElement>(null) 
    const menuList = React.useRef<HTMLDivElement>(null) 
    const linksGroup = React.useRef<HTMLDivElement>(null)  
    const links = React.useRef<HTMLDivElement>(null) 
    const sectionContentLinks = React.useRef<HTMLDivElement>(null)
    const searchResultWindow = React.useRef<HTMLDivElement>(null)
    const mobileSearchResultWindow = React.useRef<HTMLDivElement>(null)
    const langSelectedText = React.useRef<HTMLDivElement>(null)
    const currencySelectedText = React.useRef<HTMLDivElement>(null) 

    //state
    const [menuCategory, setMenuCategory] = React.useState<string>('Games')
    const [subMenu, setSubMenu] = React.useState<string>('Genres')
    const [searchResultData, setSearchResultData] = React.useState<product[]>([]) 

    React.useEffect(() => {

        if(headerBottom.current !== null){
            document.addEventListener('scroll' , scroll)
            window.addEventListener('resize' , resize )
        } 

        return()=>{
            document.removeEventListener('scroll' , scroll)
            window.removeEventListener('resize' , resize )  
        } 

    }, [headerBottom,headerCartAndLogin,headerSearch,toggleMenu])
  
    const scroll = ()=>{
        if(null !== headerBottom.current && null !== headerSearch.current && null !== headerCartAndLogin.current){
            let scrollPosition = document.documentElement.scrollTop;      
            let width = window.innerWidth;
                if(scrollPosition > 400){  
                    if(width < 576){
                        //
                    }else if(width > 767){
                        headerBottom.current.setAttribute("style","height : 0px") 
                        headerCartAndLogin.current.setAttribute("style",'visibility:visible;width: 200px') 
                        headerSearch.current.setAttribute("style",'width: calc(100% - 560px );' ) 
                    }else if(width < 767){
                        headerBottom.current.setAttribute("style",'height : 0px') 
                        headerCartAndLogin.current.setAttribute("style",'visibility:visible;width: 200px') 
                        headerSearch.current.setAttribute("style", ' width: calc(100vw - 400px);') 
                    }
                }else{
                    headerBottom.current.setAttribute("style",'height : 45px') 
                    headerCartAndLogin.current.setAttribute("style",'') 
                    headerSearch.current.setAttribute("style",'') 
                }
        }  
         
    }

    const resize = ()=>{  
        let width = window.innerWidth;

        if(null !== headerCartAndLogin.current && null !== toggleMenu.current){
            if(width < 576){
                headerCartAndLogin.current.setAttribute("style",'visibility: hidden' )
            }else{ 
                toggleMenu.current.setAttribute("style",'transform: translateX(-100%);')
            }
        }
    }

    const openSearchWindow = ()=>{
        if(null !== searchWindow.current){
            searchWindow.current.setAttribute("style",'display : block')
        }
    }

    const closeSearchWindow = ()=>{
        if(null !== searchWindow.current){
            searchWindow.current.setAttribute("style", 'display : none')
        }
    }

    const openToggleMenu = ()=>{
        if(null !== toggleMenu.current && null !== menuList.current){
            toggleMenu.current.setAttribute("style",'transform: translateX(0%);')
            menuList.current.setAttribute("style",'display : block')
        }
    }

    const backMenuList = ()=>{ 
        if(null !== menuList.current && null !== linksGroup.current && null !== links.current){
            menuList.current.setAttribute("style",'display : block')
            linksGroup.current.setAttribute("style",'display : none')
            links.current.setAttribute("style",'display : none')
        }
    }

    const backGroupLinks = ()=>{
        if(null !==  linksGroup.current && null !== links.current){
            linksGroup.current.setAttribute("style",'display : block')
            links.current.setAttribute("style",'display : none')
        }
    }

    const closeToggleMenu = ()=>{
        if(null !==  toggleMenu.current && null !== linksGroup.current && null !== links.current){
            toggleMenu.current.setAttribute("style",'transform: translateX(-100%);' )
            linksGroup.current.setAttribute("style",'display : none')
            links.current.setAttribute("style",'display : none')
        }
    }

    const openLinksGroup = ( nameGroup: string)=>{ 
        if(null !==  menuList.current && null !==  linksGroup.current){
            menuList.current.setAttribute("style", 'display : none')
            linksGroup.current.setAttribute("style",'display : block'  )
            setMenuCategory(nameGroup)
        }
        
    }

    const openUnderList = (nameGroup: any )=>{
        if(null !==  links.current && null !==  linksGroup.current){
            linksGroup.current.setAttribute("style", 'display : none' )
            links.current.setAttribute("style",'display : block'  )
            setSubMenu(nameGroup)
        }
    } 

    const openSectionsLinks = ( index : number )=>{

        if(null !==  sectionContentLinks.current && null !==  headerBottom.current){
            const children = sectionContentLinks.current.children;
            
            for(var i=0; i<3 ; i++){
                children[i].setAttribute("style",'display:none')
            }  

            if(index !== 3){
                headerBottom.current.setAttribute("style", ' overflow: unset;')
                children[index].setAttribute("style", 'display:flex')
            } 
        }
        
    }  

    const closeSectionsLinks = (e: React.MouseEvent ) =>{
        if(null !==  headerBottom.current && null !== sectionContentLinks.current){
            headerBottom.current.setAttribute("style", ' overflow: hidden')
            const children = sectionContentLinks.current.children;
            for(var i=0; i<3 ; i++){
                children[i].setAttribute("style", 'display:none')
            }
    }   
    }

    const closeSectionsLinks2 = ( e: any  ) =>{
        if(null !==  headerBottom.current && null !== sectionContentLinks.current){
            var y = e.clientY; 
            var x = e.clientX; 
            var element = e.target.getBoundingClientRect(),
                elementX= element.x,
                elementY=element.y,
                elementRight = element.right;
            const children = sectionContentLinks.current.children;

            if(y < elementY || (x < elementX || x> elementRight)){
                headerBottom.current.setAttribute("style", ' overflow: hidden')
                for(var i=0; i<3 ; i++){
                    children[i].setAttribute("style", 'display:none')
                } 
            }
        }

    }
    
    const openLangList = (e: React.MouseEvent<HTMLDivElement> &  { currentTarget: HTMLDivElement })=>{ 
            if(null !==  langList.current && null !== selecedLang.current && null !== e.currentTarget.parentNode){

                if(null !== e.currentTarget.parentNode.parentNode){

                    const list = (e.currentTarget.parentNode.parentNode.children[1] as HTMLDivElement).style.display;

                    if(list === 'none'){
                        langList.current.setAttribute("style", 'display:block')
                        selecedLang.current.classList.remove('down-arrow')
                        selecedLang.current.classList.add('up-arrow') 
                    }else{
                        langList.current.setAttribute("style",'display:none')
                        selecedLang.current.classList.remove('up-arrow')
                        selecedLang.current.classList.add('down-arrow') 
                    }
            } 
        }  
    }

    const openCurrencyList = (e: React.MouseEvent<HTMLDivElement> &  { currentTarget: HTMLDivElement })=>{ 
        if(null !==  currencyList.current && null !== selectedCurrency.current && null !== e.currentTarget.parentNode){

            if(null !== e.currentTarget.parentNode.parentNode){
                const list = (e.currentTarget.parentNode.parentNode.children[1] as HTMLDivElement).style.display;

                if(list === 'none'){
                    currencyList.current.setAttribute("style", 'display:block')
                    selectedCurrency.current.classList.remove('down-arrow')
                    selectedCurrency.current.classList.add('up-arrow') 
                }else{
                    currencyList.current.setAttribute("style", 'display:none')
                    selectedCurrency.current.classList.remove('up-arrow')
                    selectedCurrency.current.classList.add('down-arrow') 
                }
            }
        }
    }

    const changeLang = (e: React.MouseEvent<HTMLHeadingElement> &  { target: HTMLHeadingElement } )=>{
        if(null !== langSelectedText.current){
            let selected = e.target.innerHTML;
            e.target.innerHTML = langSelectedText.current.innerHTML
            langSelectedText.current.innerHTML = selected
        }
    }

    const changeCurrency = (e: React.MouseEvent<HTMLHeadingElement> &  { target: HTMLHeadingElement } )=>{
        if(null !== currencySelectedText.current){
            let selected = e.target.innerHTML;
            e.target.innerHTML = currencySelectedText.current.innerHTML
            currencySelectedText.current.innerHTML = selected
        }
    }

    const search = (e: React.FormEvent<HTMLInputElement> &  { currentTarget: HTMLInputElement } )=>{ 
        if(null !== searchResultWindow.current && null !== mobileSearchResultWindow.current){
            searchResultWindow.current.style.display = "block"
            mobileSearchResultWindow.current.style.display = "block"

            if(e.currentTarget.value.length === 0 ){
                searchResultWindow.current.style.display = "none"
                mobileSearchResultWindow.current.style.display = "none"
            }else{
                searchResultWindow.current.style.display = "block"
                mobileSearchResultWindow.current.style.display = "block"
            } 

            let data : product[] = database.games 
            data = data.filter( item => item.name.toLowerCase().includes(e.currentTarget.value) )
            setSearchResultData(data) 
        }
         
    }

    const openSearchResult = (e: React.FormEvent<HTMLInputElement> &  { currentTarget: HTMLInputElement })=>{
        if(null !== searchResultWindow.current && null !== mobileSearchResultWindow.current){ 
            if(e.currentTarget.value.length === 0 ){
                searchResultWindow.current.style.display = "none"
                mobileSearchResultWindow.current.style.display = "none"
            }else{
                searchResultWindow.current.style.display = "block"
                mobileSearchResultWindow.current.style.display = "block"
            } 
        }
    }

    const closeSearchResult =(e: React.FormEvent<HTMLInputElement> )=>{ 
        setTimeout(() => {
            if(null !== searchResultWindow.current &&  null !== mobileSearchResultWindow.current){
                searchResultWindow.current.style.display = "none"
                mobileSearchResultWindow.current.style.display = "none"
            }
        }, 500);
    }

    const closeMobileSearchWindow = ()=>{ 
        if(null !== searchWindow.current ){
            searchWindow.current.style.display = "none"
        }
    }
    
    const viewAllResult = ()=>{ 
        const inputValue  = (document.querySelector('[data-testid="pc-search"]') as HTMLInputElement).value
        router.push(`/search/${inputValue}`)
    } 


    return (
        <Header data-testid="header">
            <Container>
                <TopItems>
                    <ToogleMenuIcon>
                        <ul onClick ={openToggleMenu} data-testid="toogle-menu-icon">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </ToogleMenuIcon>
                    <Logo>
                        <img src={logo.src}   alt="logo1" onClick={()=> router.push("/")}/>
                        <img src={logo2.src}  alt="logo2" onClick={()=> router.push("/")}/>
                    </Logo>
                    <Search ref={headerSearch}>
                        <SearchForm>
                            <input type="text" placeholder="Search..." data-testid="pc-search" onChange={search} onFocus={openSearchResult} onBlur={closeSearchResult} />
                            <button type="button" data-testid="pc-search-btn">
                                <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                            </button>
                        </SearchForm>
                        <SearchResult data-testid="pc-search-result"  ref={searchResultWindow}>
                            { 
                                searchResultData.map((product : product , index: number ) => {  
                                    const image = require( `img/game/info/${product.coverImg}`) 
                                    if(index < 6 ){
                                        return  <Link href={`/product/${product.path}`}>
                                                    <a  className="result-item" key={index} data-testid="pc-search-item">
                                                        <div className="result-img-and-name">
                                                            <div className="result-img">
                                                                <img src={image.default.src} alt=""/>
                                                            </div>
                                                            <div className="result-name">
                                                                <h3 aria-hidden >{product.name} </h3>
                                                            </div>
                                                        </div>
                                                        <div className="result-price">
                                                            <span>from</span>
                                                            <p>{product.price+" $"}</p>
                                                        </div>
                                                    </a>
                                                </Link>
                                    }else{
                                        return null
                                    }
                              })
                            }
                            <SearchButton>
                                <button type="button" onClick={viewAllResult}> View All Result</button>
                            </SearchButton>
                        </SearchResult>
                    </Search>
                    <LangAndCurrency>
                        <Lang>
                            <LangContent>
                                <Selected ref={selecedLang} className="down-arrow">
                                    <Icon>
                                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                    </Icon>
                                    <Text data-testid="header-lang" onClick = {openLangList} > 
                                        <h3 ref={langSelectedText}>EU</h3>
                                    </Text> 
                                </Selected>
                                <List ref={langList} data-testid="lang-list" style={{display: 'none'}}>
                                    <ul>
                                        <li><h3  onClick={changeLang}>DE</h3></li>
                                        <li><h3  onClick={changeLang}>RU</h3></li>
                                    </ul>
                                </List>
                            </LangContent>
                        </Lang>
                        <Currency> 
                            <CurrencyContent> 
                                <Selected ref={selectedCurrency} className="down-arrow">
                                    <Icon> 
                                    <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                                    </Icon>
                                    <Text data-testid="header-currency"  onClick ={openCurrencyList} >
                                        <h3 ref={currencySelectedText} >USD</h3>
                                    </Text> 
                                </Selected> 
                                <List ref={currencyList} data-testid="currency-list" style={{display: 'none'}}>
                                    <ul>
                                        <li><h3 onClick={changeCurrency}>EUR</h3></li>
                                        <li><h3 onClick={changeCurrency}>RUB</h3></li>
                                    </ul>
                                </List>
                            </CurrencyContent>
                        </Currency>
                    </LangAndCurrency>
                    <CartAndLogin ref={headerCartAndLogin} theme={'top'}> 
                        <Login>
                             <LoginContent>
                                 <h3>Hello, <span onClick={()=> router.push("/login")} > Sing in </span></h3>
                             </LoginContent>
                        </Login>
                        <Cart>
                            <CartContent>
                                <CartPrice>
                                    <h3> 0.00 $</h3>
                                </CartPrice>
                                <CartProducts>
                                    <CartIcon>
                                        <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                                    </CartIcon>
                                    <CartCount>
                                        <h6>0</h6>
                                    </CartCount>
                                </CartProducts>
                                <CartProductsList>
                                    <h3>No products in the cart</h3>
                                </CartProductsList>
                            </CartContent>
                        </Cart>
                    </CartAndLogin>
                    <Icons>
                        <IconsItem onClick={openSearchWindow}>
                            <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                        </IconsItem>
                        <IconsItem>
                            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                            <CartCount>
                                <h6>0</h6>
                            </CartCount>
                        </IconsItem>
                        <IconsItem> 
                            <FontAwesomeIcon icon={faUserCircle} ></FontAwesomeIcon>
                        </IconsItem>
                    </Icons>
                </TopItems>
                <BottomItem ref={headerBottom}>
                    <Nav> 
                        <NavSections onMouseLeave ={closeSectionsLinks2}> 
                            <NavSectionItem   data-testid="nav-sections1" onMouseOver={openSectionsLinks.bind(this,0)} ><h3>Games</h3></NavSectionItem>
                            <NavSectionItem   data-testid="nav-sections1" onMouseOver={openSectionsLinks.bind(this,1)} ><h3>Pre-Paid Card &amp; Subscriptions</h3></NavSectionItem>
                            <NavSectionItem   data-testid="nav-sections1" onMouseOver={openSectionsLinks.bind(this,2)} ><h3>Pre-orders</h3></NavSectionItem>
                            <NavSectionItem   data-testid="nav-sections1" onMouseOver={openSectionsLinks.bind(this,3)}><h3>Gamivo Smart</h3></NavSectionItem>
                        </NavSections> 
                        <NavSectionLinks>
                            <NavSectionLinksContent  onMouseLeave ={closeSectionsLinks} ref={sectionContentLinks}>
                                <LinksGroup data-testid="nav-content1">
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Genres</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks>
                                            <GroupItemLinksLeft>
                                                <Link href="/genres/action">
                                                     <a>Action</a>
                                                </Link>
                                                <Link href="/genres/rpg" >
                                                    <a>RPG</a>
                                                </Link> 
                                                <Link href="/genres/fps" >
                                                    <a>FPS</a>
                                                </Link>
                                                <Link href="/genres/multiplayer" >
                                                    <a>Multiplayer</a>
                                                </Link>
                                                <Link href="/genres/adventure" >
                                                    <a>Adventure</a>
                                                </Link> 
                                            </GroupItemLinksLeft>
                                            <GroupItemLinksRight>
                                                <Link href="/genres/simulation" >
                                                    <a>Simulation</a>
                                                </Link>
                                                <Link href="/genres/strategy" >
                                                    <a>Strategy</a>
                                                </Link>
                                                <Link href="/genres/shooter" >
                                                    <a>Shooter</a>
                                                </Link>
                                                <Link href="/genres/sports" >
                                                    <a>Spotrs</a>
                                                </Link> 
                                                <a href="/error" className="more">+ more</a>
                                            </GroupItemLinksRight>
                                        </GroupItemLinks>
                                   </GroupItem>

                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Platforms</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks>
                                            <GroupItemLinksLeft> 
                                                <Link href="/platform/steam" >
                                                    <a>Steam</a>
                                                </Link>
                                                <Link href="/platform/xbox" >
                                                    <a>Xbox live</a>
                                                </Link>
                                                <Link href="/platform/origin" >
                                                    <a>Origin</a>
                                                </Link>
                                                <Link href="/platform/ubisoft" >
                                                    <a>Ubisoft Connect</a>
                                                </Link>
                                                <Link href="/platform/battle" >
                                                    <a>Battle.net</a>
                                                </Link> 
                                            </GroupItemLinksLeft>
                                            <GroupItemLinksRight>
                                                <Link href="/error" >
                                                    <a>PSN</a>
                                                </Link>
                                                <Link href="/error" >
                                                    <a>Rockstart Social Club</a>
                                                </Link>
                                                <Link href="/error" >
                                                    <a>Itunes</a>
                                                </Link>
                                                <Link href="/error" >
                                                    <a>GOG</a>
                                                </Link> 
                                                <Link href="/error">
                                                    <a className="more" >+ more</a>
                                                </Link>
                                            </GroupItemLinksRight>
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Games</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks>
                                            <Link href="/product/escape-from-tarkov-official-website-cd-key" >
                                                <a>Escape from Tarkov Official website CD Key</a>
                                            </Link>
                                            <Link href="/product/terraria-steam-gift" >
                                                <a>Terraria Steam Gift</a>
                                            </Link>
                                            <Link href="/product/dead-by-daylight-steam-cd-key" >
                                                <a>Dead by Daylight Steam CD Key</a>
                                            </Link>
                                            <Link href="/product/speedrunners-steam-cd-key" >
                                                <a>SpeedRunners Steam CD Key</a>
                                            </Link>
                                            <Link href="/product/far-cry-3-ubisoft-connect-cd-key" >
                                                <a>Far Cry 3 Ubisoft Connect CD Key</a>
                                            </Link> 
                                            <Link href="/error" >
                                                <a className="more">+ more</a>
                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Prepaid</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks>
                                            <Link href="/error" >
                                                <a>Netflix Cart 100USD</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Boblox Gift Card 5 USD</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Netflix Gift Card 75 USD</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Boblox Gift Card 10 USD</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Razer Gold Gift Card 50 USD</a>
                                            </Link> 
                                            <Link href="/error">
                                                <a className="more">+ more</a>
                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                </LinksGroup> 
                                <LinksGroup data-testid="nav-content2">
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Playstation</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks> 
                                            <Link href="/error" > 
                                                <a>PlayStation Network Card PSN 50 USD</a> 
                                            </Link>
                                            <Link href="/error" > 
                                                <a>PlayStation Network Card PSN 25 USD</a> 
                                            </Link>
                                            <Link href="/error" > 
                                                <a>PlayStation Network Card PSN 10 USD</a> 
                                            </Link>
                                            <Link href="/error" > 
                                                <a>PlayStation Network Card PSN 365Days</a> 
                                            </Link>
                                            <Link href="/error" > 
                                                <a>PlayStation Network Card PSN 50 EUR</a> 
                                            </Link>   
                                            <Link href="/error" > 
                                                <a className="more">+ more</a> 

                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Xbox</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks> 
                                            <Link href="/error" >
                                                <a>Xbox Game Pass Ultimate - 14 Days</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Xbox live 50 EUR</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Xbox Game Pass Ultimate - 7 Days</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Xbox live 10 EUR </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Xbox live Dold 12 months</a>
                                            </Link>    
                                            <Link href="/error" >
                                                <a className="more">+ more</a>
                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Steam</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks>
                                            <Link href="/error" >
                                                <a>Steam Gift Card 100 USD </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Steam Gift Card 50 USD </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Steam Gift Card 25 USD </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Steam Gift Card 10 USD </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Steam Gift Card 5 USD </a>
                                            </Link> 
                                            <Link href="/error" >
                                                <a className="more">+ more</a>
                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Battle.net</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks> 
                                            <Link href="/error" >
                                                <a>World of Warcraft 30 day time card EU</a> 
                                            </Link>
                                            <Link href="/error" >
                                                <a>Overwatch</a> 
                                            </Link>
                                            <Link href="/error" >
                                                <a>World of Warcraft: Shadowlands</a> 
                                            </Link>
                                            <Link href="/error" >
                                                <a>World of Warcraft 30 day time card US</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>World of Warcraft 60 day time card US</a>
                                            </Link> 
                                            <Link href="/error" >
                                                <a className="more">+ more</a>
                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem> 
                                        <LinksGroupTitle>
                                            <h3>Other</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks>
                                            <Link href="/error" >
                                                <a>Final Fantasy XIV: A Realm Reborn</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Genera Free Fire Gift Card 1080 </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Genera Free Fire Gift Card 210  </a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Genera Free Fire Gift Card 100</a>
                                            </Link>
                                            <Link href="/error" >
                                                <a>Valorant Gift Card 5025 Riot Points</a>
                                            </Link>  
                                            <Link href="/error" >
                                                <a className="more">+ more</a>
                                            </Link>
                                        </GroupItemLinks>
                                   </GroupItem>
                                </LinksGroup> 
                                <LinksGroup data-testid="nav-content3">
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Upcoming</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks> 
                                            <LinkWithDate>
                                                <LinkIcon>
                                                    <h3>30MAR</h3>
                                                    <div >
                                                        <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                                    </div>
                                                </LinkIcon>
                                                <Link href="/error" >
                                                    <a>Natira Boy ARG PRE-ORDER</a>
                                                </Link >
                                            </LinkWithDate>
                                            <LinkWithDate>
                                                <LinkIcon>
                                                    <h3>30MAR</h3>
                                                    <div >
                                                        <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                                    </div>
                                                </LinkIcon>
                                                <Link href="/error" >
                                                    <a>Natira Boy PRE-Order</a>
                                                </Link >
                                            </LinkWithDate>
                                            <LinkWithDate>
                                                <LinkIcon>
                                                    <h3>30MAR</h3>
                                                    <div>
                                                        <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                                    </div>
                                                </LinkIcon>
                                                <Link href="/error" >
                                                    <a>Evil Genius 2: World Domination EU PRE-PURCHASE</a>
                                                </Link >
                                            </LinkWithDate>
                                            <LinkWithDate>
                                                <LinkIcon>
                                                    <h3>30MAR</h3>
                                                    <div>
                                                        <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                                    </div>
                                                </LinkIcon>
                                                <Link href="/error" >
                                                    <a>Evil Genius 2: World Domination US PRE-PURCHASE</a>
                                                </Link >
                                            </LinkWithDate>
                                            <LinkWithDate>
                                                <LinkIcon>
                                                    <h3>30MAR</h3>
                                                    <div>
                                                        <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>
                                                    </div>
                                                </LinkIcon>
                                                <Link href="/error" >
                                                    <a>Evil Genius 2: World Domination CIS PRE-PURCHASE</a>
                                                </Link >
                                            </LinkWithDate>  
                                            <Link href="/error">
                                                <a  className="more">+ more</a>
                                            </Link> 
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>Bestsellers</h3>
                                        </LinksGroupTitle>
                                        <GroupItemLinks> 
                                            <Link href="/product/for-the-king-steam-cd-key">
                                                <a>For The King Steam CD Key</a>
                                            </Link>
                                            <Link href="/product/sea-of-thieves-xbox-live-cd-key">
                                                <a>Sea of Thieves Xbox live CD Key </a>
                                            </Link>
                                            <Link href="/product/far-cry-5-emea-ubisoft-connect-cd-key">
                                                <a>Far Cry 5 EMEA Ubisoft Connect CD Key</a>
                                            </Link>
                                            <Link href="/product/green-hell-steam-cd-key">
                                                <a>Green Hell Steam CD Key</a>
                                            </Link>
                                            <Link href="/product/efootball-pes-2021-season-update-steam-cd-key">
                                                <a>eFootball PES 2021: Season Update Steam CD Key</a>
                                            </Link>   
                                            <Link href="/error">
                                                <a className="more">+ more</a>
                                            </Link> 
                                        </GroupItemLinks>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>MARCH</h3>
                                        </LinksGroupTitle> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                    <td>14</td>
                                                </tr>
                                                <tr>  
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                    <td>21</td>
                                                </tr>
                                                <tr>  
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>APRIL</h3>
                                        </LinksGroupTitle> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="table-dot">1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                    <td>14</td>
                                                </tr>
                                                <tr>  
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                    <td>21</td>
                                                </tr>
                                                <tr>  
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                   </GroupItem>
                                    <GroupItem>
                                        <LinksGroupTitle>
                                            <h3>MAY</h3>
                                        </LinksGroupTitle> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                    <td>14</td>
                                                </tr>
                                                <tr>  
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                    <td>21</td>
                                                </tr>
                                                <tr>  
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                   </GroupItem>
                                </LinksGroup > 
                            </NavSectionLinksContent>
                        </NavSectionLinks>
                    </Nav> 
                    <CartAndLogin  theme={'bottom'}> 
                        <Login>
                             <LoginContent>
                                 <h3>Hello, <span onClick={()=> router.push("/login") }> Sing in </span></h3>
                             </LoginContent>
                        </Login>
                        <Cart>
                            <CartContent>
                                <CartPrice>
                                    <h3> 0.00 $</h3>
                                </CartPrice>
                                <CartProducts>
                                    <CartIcon>
                                        <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                                    </CartIcon>
                                    <CartCount>
                                        <h6>0</h6>
                                    </CartCount>
                                </CartProducts>
                                <CartProductsList>
                                    <h3>No products in the cart</h3>
                                </CartProductsList>
                            </CartContent>
                        </Cart>
                    </CartAndLogin>
                </BottomItem>
                <ToggleMenu  ref={toggleMenu}>
                    <ToggleMenuContent>
                        <ToggleMenuClose>  
                            <h3 onClick ={closeToggleMenu}>X</h3>
                        </ToggleMenuClose>
                        <ToggleMenuList ref={menuList} data-testid="toogle-menu">
                            <ToggleMenuListItems>
                                <ToggleMenuListItem ><h3 onClick={openLinksGroup.bind(this,'Games')} >Games</h3></ToggleMenuListItem> 
                                <ToggleMenuListItem ><h3 onClick={openLinksGroup.bind(this,'PrePaidCardSubscriptions')} >Pre-Paid Card &amp; Subscriptions</h3></ToggleMenuListItem> 
                                <ToggleMenuListItem ><h3 onClick={openLinksGroup.bind(this,'PreOrders')} >Pre-orders</h3></ToggleMenuListItem> 
                                <ToggleMenuListItem ><h3> Gamivo Smart </h3></ToggleMenuListItem> 
                            </ToggleMenuListItems> 
                        </ToggleMenuList> 
                        <ToggleMenuLinksGroup ref={linksGroup}> 
                            <h2 onClick={backMenuList}>{  headerMenu[menuCategory].name }</h2> 
                            <ToggleMenuLinksGroupItems >  
                                {  
                                      
                                        Object.keys( headerMenu[menuCategory].underList ).map((name,index) =>{ 
                                            return name !== undefined ? <ToggleMenuLinksGroupItem key={index}> 
                                                        <h3 onClick={openUnderList.bind(this,name)}>{ name }</h3>
                                                    </ToggleMenuLinksGroupItem> : null;
                                        })  
                                }
                            </ToggleMenuLinksGroupItems>
                        </ToggleMenuLinksGroup>
                        <ToggleMenuLinks ref={links}> 
                            <h2 onClick={backGroupLinks}>{ subMenu }</h2>
                            <ToggleMenuLinksItems>
                               
                                { 
                                    headerMenu[menuCategory].underList[subMenu] ?
                                    Object.values( headerMenu[menuCategory].underList[subMenu]).map((name, index) =>{
                                        return <ToggleMenuLinksItem key={index}> 
                                                    <h3>{ name }</h3>
                                                </ToggleMenuLinksItem>
                                    }) : null
                                }
                            </ToggleMenuLinksItems>
                        </ToggleMenuLinks> 
                    </ToggleMenuContent>
                </ToggleMenu>    
                <MobileSearch ref={searchWindow}>
                    <MobileSearchForm>
                        <input type="text" placeholder="Search..."  data-testid="mobile-search" onChange={search} onFocus={openSearchResult} onBlur={closeSearchResult}/>
                        <button type="button" data-testid="mobile-search-btn">
                            <FontAwesomeIcon icon={faTimes}  onClick={closeSearchWindow}></FontAwesomeIcon> 
                        </button> 
                    </MobileSearchForm> 
                    <MobileSearchResult ref={mobileSearchResultWindow} >
                            { 
                                searchResultData.map((product : product , index : number ) => {  
                                    const image = require( `img/game/info/${product.coverImg}`) 
                                    if(index < 6 ){
                                        return  <Link href={`/product/${product.path}`} key={index}> 
                                                    <a className="mobile-result-item" onClick={closeMobileSearchWindow}>
                                                        <div className="mobile-result-img">
                                                            <img src={image.default} alt=""/>
                                                        </div>
                                                    <div className="mobile-result-name-and-price"> 
                                                        <div className="mobile-result-name">
                                                            <h3 aria-hidden >{product.name} </h3>
                                                        </div> 
                                                        <div className="mobile-result-price">
                                                            <span>from</span>
                                                            <p>{product.price+" $"}</p>
                                                        </div> 
                                                    </div>
                                                    </a>
                                                </Link>
                                    }else{
                                        return null
                                    }
                              })
                             }
                            <MobileSearchResultBtn>
                                <button type="button"> View All Result</button>
                            </MobileSearchResultBtn>
                    </MobileSearchResult>
                </MobileSearch>
            </Container>
        </Header> 
    )  
}

export default React.memo(Headers)
