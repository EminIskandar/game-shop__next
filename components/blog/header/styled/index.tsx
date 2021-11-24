import styled from "styled-components"; 

export const Container = styled.header`
    position: relative;
    background-color: unset;
    transition: unset;

    @media (max-width:1400px){ 
        padding: 0; 
    }
    
    @media (max-width:576px){ 
        height:auto;
    }
`
export const Content = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
export const Logo = styled.div`
    width: 150px;
    cursor: pointer;
`
export const NavAndSearch = styled.div`
    display: flex;
    align-items: center;
`
export const ToggleMenuIcon = styled.div`
    display: none;
    position: relative;
    cursor: pointer;
    margin-right: 20px;

    li{
        width: 25px;
        height: 3px;
        background: linear-gradient( 90deg, rgba(242,121,36,1) 0%, rgba(239,80,35,1) 100%);
        margin: 4px 0;
        border-radius: 10px;
    }

    @media (max-width:1200px){ 
        display: block;
    }

    @media (max-width:576px){ 
        margin:0;
    }
`
export const Nav = styled.nav`

    @media (max-width:1200px){ 
        display: none;
    }
`
export const NavLink = styled.a`
    font-size: 16px;
    margin: 0 10px; 
    color:#a1a1a1;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;

    &.active{
        color: #fff;
    }
`
export const Btn = styled.button`
    font-size: 16px;
    padding: 10px 25px;
    color: #fff;
    font-weight: 700;
    background-color: #F47B25;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0 20px;
    cursor: pointer;

    @media (max-width:1200px){ 
        display: none;
    }
`
export const Search = styled.div`
    input{
        width: 180px;
        height: 40px;
        background-color: #232323;
        border:none;
        padding-left: 15px;
        box-sizing: border-box;
        color: #fff;
    }

    button{
        width: 60px;
        height: 40px;
        background-color: #232323;
        border:none;
        border-left: 1px solid #a1a1a160;
    }

    i {
        color: #F47B25;
        font-size: 15px;
    }
    @media (max-width:576px){ 
        display: none;
    }

`
export const ToggleMenu = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(133px);
    padding: 20px ;
    box-sizing: border-box;
    display: none;
    background-color: #181818;
    z-index: 20;
`
export const ToggleNavAndSearch = styled.div`
    flex-direction: column;
    align-items: baseline;
`
export const ToggleNav = styled.div`
    display: flex;
    flex-direction: column;

    a{
        margin: 10px 0;
        font-size: 16px; 
        color:#a1a1a1;
        font-family: 'Roboto Condensed', sans-serif;
    }
    
    & a.active{
        color: #fff;
    }
`
export const ToggleSearch = styled.div`
    width: 100%;
    input{
        width: 180px;
        height: 40px;
        background-color: #232323;
        border:none;
        padding-left: 15px;
        box-sizing: border-box;
        color: #fff;

        @media (max-width:576px){ 
            width: calc(100% - 60px);
        }
    }

    button{
        width: 60px;
        height: 40px;
        background-color: #232323;
        border:none;
        border-left: 1px solid #a1a1a160;
    }

    i {
        color: #F47B25;
        font-size: 15px;
    }

    @media (max-width:1200px){ 
        display: none;
    }

    @media (max-width:576px){ 
        display: block;
    }
`
export const ToggleBtn = styled.button`
    margin: 20px 0;
    font-size: 16px;
    padding: 10px 25px;
    color: #fff;
    font-weight: 700;
    background-color: #F47B25;
    border: none;
    font-family: 'Roboto Condensed', sans-serif; 
    cursor: pointer;

    @media (max-width:1200px){ 
        display: block;
    }
`