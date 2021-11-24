import React  from 'react' 
import Link from 'next/link'
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Store} from 'interfaces/store'
import { useSelector } from 'react-redux'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

//img
import logo from 'img/logo.svg'
 
//style 
import { 
    Footer, Content, Logo, Nav,NavGroup ,NavLink, 
    CopyrightAndSocial, Social,SocialItem
} from './styled'


const footer: NextPage = ()=> {

    //redux
    const links  = useSelector((state : Store) => state.footerLinks) 

     return (
        <Footer data-testid="footer">
            <Content>
                <Logo>
                    <img src={logo.src} alt="footer-logo"/>
                </Logo>
                <Nav>
                    <NavGroup>
                       {
                           links.map((link)=>{
                                return  <Link href={link.path} key={link.name} >
                                            <NavLink>{link.name}</NavLink>
                                        </Link> 
                           })
                       } 
                    </NavGroup> 
                </Nav>
                <CopyrightAndSocial>
                    <h3>© 2021 All Rights Reserved</h3> 
                    <Social>
                        <SocialItem>
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                        </SocialItem>
                        <SocialItem>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </SocialItem>
                    </Social>
                </CopyrightAndSocial>
            </Content>
        </Footer>
    )  
}

export default footer;