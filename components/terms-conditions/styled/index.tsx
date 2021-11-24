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
        font-weight: 700;

        @media (max-width:576px){ 
            font-size: 34px; 
        }
    }
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1400px;
    background-color: #1f1f1f;
    margin: 80px auto;
    padding: 40px;
    box-sizing: border-box;

    h4,
    p{
        font-size: 15px;
        color: #a1a1a1;
        margin: 20px 0;
        line-height: 20px;

        @media (max-width:576px){ 
            font-size: 13px; 
        }

    }

    @media (max-width:576px){ 
        margin: 0 auto;
    }
`