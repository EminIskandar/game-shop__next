import styled from "styled-components"; 
import bg from 'img/background/how-it-work-head.webp'

export const Section = styled.section`
    position: relative; 
    background-color: unset;
    transition: unset;
    overflow: hidden;
    height: 450px;

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: 1920px auto; 
        background-repeat: no-repeat;
        width: 100vw;
        height: 450px;   
        z-index: -1;
        left: 0;
    }

    @media(max-width:1400px){ 
        padding: 0;
    }
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const Title = styled.div`
    h2{
        font-size: 50px;

        @media (max-width:576px){  
            font-size: 32px;
        }
    }
`
export const Search = styled.div`
    form{
        display: flex;
        margin: 40px 0 30px;
    }

    input{
        height: 60px;
        width: 740px;
        padding: 0 15px;
        border: none;
        background-color: #fff;

        @media (max-width:996px){ 
            width: calc(100% - 60px);
        }
    }

    button{
        width: 60px;
        height: 60px;
        border: none;
        background-color: #fff;
        cursor: pointer; 
    }

    i{
        font-size: 15px;
        color: #000;
    }

    @media (max-width:996px){ 
        width: 90%;
    }
`
export const Text = styled.div`
    p{
        font-size: 18px;
        font-weight: 300;
        color: #a1a1a1;

        @media (max-width:576px){  
            font-size: 16px;
        }
    }
`