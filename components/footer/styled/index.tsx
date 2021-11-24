import styled from 'styled-components' 

export const Footer = styled.footer`
    background-color: #252525;
    padding: 40px 0;
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 0; 

    @media (max-width:1400px){ 
        padding: 40px 20px;
        box-sizing: border-box;
    }

`
export const Logo = styled.div`
    & img{
        width: 130px;
    }
`
export const Nav = styled.nav`
    display: flex;
    width: 520px;
    justify-content: space-between;
    margin: 40px 0;

    @media (max-width:576px){
        width: 100%;
        flex-direction: column;
    }
`
export const NavGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;

    @media (max-width:576px){
        margin: 10px 0;
        flex-wrap: nowrap;
        height: auto;
    }
`
export const NavLink = styled.a`
    color: #a0a0a069;
    font-size: 14px;
    font-weight: 400;
    margin: 2px 0;
    cursor: pointer;
    margin-right: 20px;
`
export const CopyrightAndSocial = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;

    & h3{
        font-size: 14px;
    }
`
export const Social = styled.div`
      display: flex;

    &  i{
    margin: 0 10px;
    font-size: 25px;
    color: #a0a0a069;
    }
`
export const SocialItem = styled.div`
   
`