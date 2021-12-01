import React from 'react'   
import Link from 'next/link'
import { useRouter } from 'next/router' 
import { NextPage } from 'next'

//img
import logo from 'img/blog-logo.svg'

//styled
import { 
    Container, Content, Logo, NavAndSearch, Nav, NavLink,
    Btn, Search, ToggleMenu, ToggleNavAndSearch, ToggleNav,
    ToggleSearch, ToggleBtn, ToggleMenuIcon
} from './styled'

const Header : NextPage = () => {

    //router
    const router = useRouter()  

    //state
    const toggleMenu = React.useRef<HTMLDivElement>(null) 
 
    React.useEffect(() => { 
        window.addEventListener('resize' , resize )
        return () => {
           window.removeEventListener('resize', resize )
        }
    }) 

    const resize = ()=>{ 
        let width = window.innerWidth 
        
        if(toggleMenu && toggleMenu.current){
            if(width > 1200){
                toggleMenu.current.setAttribute("style","")
            } 
        }
    }

    const openCloseToggleMenu = () :void =>{   
        if(toggleMenu && toggleMenu.current){
            if(toggleMenu.current.style.display ===  ''){ 
                toggleMenu.current.style.display = 'block' 
    
            }else{
                toggleMenu.current.style.display = ''  
            }
        }
    }

    return (
        <Container data-testid="blog-header">
            <Content>
                <Logo>
                    <img src={logo.src} alt="blog-logo" onClick={()=> router.push("/blog")} />
                </Logo>
                <NavAndSearch>
                    <ToggleMenuIcon onClick={openCloseToggleMenu} data-testid="toogle-menu-icon">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </ToggleMenuIcon> 
                    <Nav> 
                        <Link href="/blog" passHref>
                            <NavLink  className={router.asPath == "/blog" ? "active" : ""} >Home</NavLink>
                         </Link> 
                        <Link href="/blog/category/news" passHref>
                            <NavLink  className={router.asPath == "/blog/category/news" ? "active" : ""} >News</NavLink>
                        </Link> 
                        <Link href="/blog/category/now-trending" passHref>
                            <NavLink  className={router.asPath == "/blog/category/now-trending" ? "active" : ""} >Now Trending</NavLink>
                        </Link> 
                        <Link href="/blog/category/promosions" passHref> 
                            <NavLink   className={router.asPath == "/blog/category/promosions" ? "active" : ""} >Promosions</NavLink>
                        </Link>    
                    </Nav>
                    <Btn type="button" >BUY GAMES</Btn>
                    <Search>
                        <form action="">
                            <input type="text" placeholder="Search.." data-testid="pc-search-input" />
                            <button type="button"><i className="fas fa-search"  data-testid="pc-search-btn"></i></button>
                        </form>
                    </Search>
                </NavAndSearch>
                <ToggleMenu ref={toggleMenu} data-testid="toogle-menu"> 
                    <ToggleNavAndSearch> 
                        <ToggleNav>
                            <Link href="/blog">
                                <a  className={router.asPath == "/blog" ? "active" : ""}>Home</a> 
                            </Link> 
                            <Link href="/blog/category/news" >
                                <a className={router.asPath == "/blog/category/news" ? "active" : ""}>News</a>
                            </Link> 
                            <Link href="/blog/category/now-trending">
                                <a className={router.asPath == "/blog/category/now-trending" ? "active" : ""}>Now Trending</a>
                            </Link> 
                            <Link href="/blog/category/promosions"> 
                                <a  className={router.asPath == "/blog/category/promosions" ? "active" : ""}>Promosions</a>
                            </Link>  
                        </ToggleNav> 
                        <ToggleBtn type="button" >BUY GAMES</ToggleBtn>
                        <ToggleSearch>
                            <form action="">
                                <input type="text" placeholder="Search.."  data-testid="mobile-search-input"/>
                                <button type="button"><i className="fas fa-search" data-testid="mobile-search-btn" ></i></button>
                            </form>
                        </ToggleSearch>
                    </ToggleNavAndSearch>
                </ToggleMenu>
            </Content>
        </Container>
    )
}

export default Header