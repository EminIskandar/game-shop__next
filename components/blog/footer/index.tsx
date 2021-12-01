import React from 'react' 
import Link from 'next/link'
import { useRouter } from 'next/router' 
import { NextPage } from 'next'

//styled
import {
    Container, Content, Top, TopItems, Social, NavAndBtn, 
    Nav, Btn, Bottom, BottomItems, Text
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer : NextPage = () => {
      
    //router
    const router = useRouter()
    
    //ref
    const navRoot = React.useRef(null) 

    return (
        <Container data-testid="blog-footer">
            <Content>
                <Top>
                    <TopItems>
                        <Social>
                            <div>
                                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                            </div> 
                            <div>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </div>
                        </Social>
                        <NavAndBtn>
                            <Nav ref={navRoot}>
                                <Link href="/blog">
                                    <a className={router.asPath == "/blog" ? "active" : ""}>Home</a> 
                                </Link> 
                                <Link href="/blog/category/news" >
                                    <a className={router.asPath == "/blog/category/news" ? "active" : ""}>News</a>
                                </Link> 
                                <Link href="/blog/category/now-trending">
                                    <a className={router.asPath == "/blog/category/now-trending" ? "active" : ""}>Now Trending</a>
                                </Link> 
                                <Link href="/blog/category/promosions"> 
                                    <a className={router.asPath == "/blog/category/promosions" ? "active" : ""}>Promosions</a>
                                </Link>  
                            </Nav>
                            <Btn type="button" className="Footer__Button">BUY GAMES</Btn>
                        </NavAndBtn> 
                    </TopItems>
                </Top>
                <Bottom>
                    <BottomItems>
                        <Text>
                            <h4>Copyright © 2021 Gamivo Blog. All Rights Reserved.</h4>
                            <h4>Gamivo.com Limited, 99 Dingli Street, SLM 1905 Sliema, Malta</h4>
                        </Text>
                    </BottomItems>
                </Bottom>
            </Content>
        </Container>
    )
}

export default Footer
