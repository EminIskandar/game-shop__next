import styled from "styled-components";
import bg from 'img/background/benfits-bg.webp'

export const Section = styled.section`
    width: 100vw; 
    position: relative;  
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: auto 100%; 
        background-repeat: no-repeat;
        width: 100%; 
        height: 100%;
        z-index: -1;
    }
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 160px 0 ;
    box-sizing: border-box;

    @media (max-width:576px){
        padding: 60px 0;
    }
`
export const Title = styled.div`
    h2{
        text-align: center;
        font-size: 35px;
        font-weight: 300;
    }
`
export const Items = styled.div`
    width: 100%;
    display: flex;
    margin: 100px 0 200px;

    @media (max-width:768px){ 
        flex-direction: column;
    }

    @media (max-width:576px){
        margin: 40px 0 80px; 
        align-items: center;
    }
`
export const Item = styled.div`
    width: 33.33%;
    height: 400px;
    border: 1px solid rgba(255, 255, 225, 0.1);;
    border-right: none;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column; 
    align-items: center; 
    text-align: center; 

    &:nth-child(3){
        border-right: 1px solid rgba(255, 255, 225, 0.1);
    }

    @media (max-width:996px){ 
            height: 430px;  
    }
    
    @media (max-width:768px){ 
        width: 100%;
        height: 400px;
    }

    @media (max-width:576px){
        width: 90%;
        height: 300px;
    }
`
export const Icon = styled.div`
    margin: 70px 0 35px;

    @media (max-width:576px){
        margin: 30px 0;
    }

    img{
        @media (max-width:576px){
            width: 100px;
        }
    }
`
export const Description = styled.div`
     width: 85%; 
`
export const Text = styled.div`

    h2{
        font-size: 30px;
    }

    p{
        margin-top: 10px;
        font-size: 20px;

        @media (max-width:576px){
            font-size: 17px;
        }
    }
`
export const Support = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
`
export const SupportTitle = styled.div`
    h2{
        font-size: 50px;
        font-weight: 300;

        @media (max-width:576px){
            font-size: 30px;
        }
    }
`
export const SupportBtn = styled.div`
    margin-top: 60px;

    button{
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
        width: 280px;
        height: 60px;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        border: none;

        @media (max-width:576px){
        width: 100%;
    }
        
    }

    @media (max-width:576px){
        width: 90%;
    }
`