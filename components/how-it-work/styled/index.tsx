import styled from "styled-components"; 
import bg from 'img/background/how-it-work-head.webp'

export const Section = styled.section`
`
export const Header = styled.div`
    width: 100vw;
    height: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative; 
    background-color: unset;
    transition: unset;

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: 1920px auto; 
        background-repeat: no-repeat;
        width: 100%;
        height: 470px; 
        z-index: -1;

        @media (max-width:576px){
            height: 230px;
            background-size: auto 400px;
        }
    } 

    @media (max-width:576px){
        height: 230px;
    }
    
`
export const Title = styled.div`
    h2{
        font-size: 70px;

        @media (max-width:576px){
            font-size: 38px;
            font-weight: 300;
        }
    }

    h4{
        font-size: 28px;
        font-weight: 300;
        color :#a1a1a1;

        @media (max-width:576px){
            font-size: 16px; 
        }
    }
`
export const Steps = styled.div`
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
`
export const Content = styled.div`
`
export const Item = styled.div`
    margin: 40px 0 ;
`
export const ItemTitle = styled.div`
    display: flex;
    align-items: center; 
`
export const ItemNumber = styled.div`
    width: 60px;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        border-top: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid #fff;
        transform: translate(60px, 23px);

        @media (max-width:576px){
            transform: translate(50px, 19px);
        }
    }

    h1{
        font-size: 30px;
        color: #F47B25;;
        font-weight: 700;
    }

    @media (max-width:576px){
        width: 50px;
        height: 50px;
    }
`
export const ItemText = styled.div`
    width: calc(100% - 80px);

    h1{
        font-size: 22px;
        margin-left: 20px;

        @media (max-width:576px){
            font-size: 16px;
        }
    }

    
`
export const ItemImg = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 1200px;
    position: relative;

    img{
        width: 100%;
    }
`