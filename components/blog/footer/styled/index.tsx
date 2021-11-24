import styled from "styled-components"; 

export const Container = styled.footer`
    width: 100vw; 
`
export const Content = styled.div`
`
export const Top = styled.div`

`
export const TopItems = styled.div`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 60px 20px;
    box-sizing: border-box;

    @media (max-width:996px){ 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`
export const Social = styled.div`
    display: flex;

    i{
        margin: 0 10px;
        font-size: 35px;
        color: #fff; 
        cursor: pointer;
    }
`
export const NavAndBtn = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:996px){ 
        margin-top: 40px; 
    }
    @media (max-width:576px){ 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const Nav = styled.div`
    a {
        font-size: 16px;
        margin: 0 10px;
        color:#a1a1a1;
        font-family: 'Roboto Condensed', sans-serif;

        @media (max-width:576px){ 
            margin: 0 5px;
        }
    }

    .active{
        color: #fff;
    }
`
export const Btn = styled.button`
    font-size: 16px;
    padding: 10px 25px;
    color: #fff;
    font-weight: 700;
    background-color: #2C2C2C;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0 20px;
    cursor: pointer;

    @media (max-width:576px){ 
        margin-top: 20px;
    }
`
export const Bottom = styled.div`
    background-color: #1B1A1D;
`
export const BottomItems = styled.div`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 20px;
    box-sizing: border-box;
`
export const Text = styled.div`
    h4{
        font-size: 14px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 300;
        color: #a1a1a160;
    }
`