import styled from "styled-components"; 
import bg from 'img/background/about-head.webp'

export const Section = styled.section`
`
export const Header = styled.div`
    position: relative; 
    background-color: unset;
    transition: unset;

    @media (max-width:1400px){ 
        padding: 0;
    } 

    @media (max-width:576px){ 
        height: auto;
    }
`
export const HeaderContent = styled.div`
    width: 100vw;
    max-width: 100vw;

`
export const HeaderTitle = styled.div`
    width: 100vw;
    height: 400px;
    margin: 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: 1920px auto; 
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        opacity: 0.3;
    }

    h2{
        width: 100vw;
        max-width: 1200px; 
        position: relative;
        z-index: 3;
        font-size: 90px;
        font-weight: 300;

        @media (max-width:576px){ 
            font-size: 69px;
        }
    }

    span{
        font-weight: 700;
    }

    @media (max-width:576px){ 
        height: auto;
        padding: 40px  20px;
        box-sizing: border-box;
    }
`
export const HeaderDescription = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #2B2B2B;
`
export const DescriptionInner = styled.div`
    width: 100vw;
    max-width: 1200px; 
    display: flex;

    @media (max-width:996px){ 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

`
export const DescriptionText = styled.div`
    width: calc(100% - 400px);

    @media (max-width:996px){  
        width: 100%;
    }
`
export const DescriptionTitle = styled.div`

    h2{
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 40px;
    }
`
export const DescriptionItems = styled.div`
    
    p{
        font-size: 18px;
        font-weight: 300;
        color: #a1a1a1;
        margin: 15px 0;
    }

    & p:nth-child(3){
        margin-top: 20px;
    }

`
export const DescriptionImage = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;

    @media (max-width:996px){ 
        margin-top: 40px;
        width: 100%;
    }
`
export const Footer = styled.footer`
      background-color: #F47B25 ;
`
export const FooterContent = styled.div`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    padding: 10px 20px;
    box-sizing: border-box;
    justify-content: space-between;

    @media (max-width:576px){ 
        text-align: center;
    }
    @media (max-width:768px){ 
        flex-direction: column; 
    }

    h5{
        font-size: 14px;
        font-weight: 500;
        color: #fff;
    }
`