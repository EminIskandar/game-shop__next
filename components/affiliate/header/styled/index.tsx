import styled from "styled-components"; 
import bg from 'img/background/how-it-work-head.webp'

export const Section = styled.div`
    width: 100vw;
    height: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative; 
    background-color: unset;
    transition: unset;

    @media (max-width:576px){ 
        height: 230px;
    }

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
`
export const Title = styled.div`
    h2{
        font-size: 70px;
        font-weight: 700;

        @media (max-width:576px){ 
            font-size: 45px; 
        }
    }

    span{
        color: #F47B25;
    } 

    h4{
        font-size: 28px;
        font-weight: 300;
        color :#a1a1a1;

        @media (max-width:576px){ 
             display: none;
        }
    }
`