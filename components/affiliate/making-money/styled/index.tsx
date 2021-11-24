import styled from "styled-components";
import bg from 'img/background/Affiliate_bg.jpg'

export const Section = styled.section`
    width: 100%; 
`
export const Content = styled.div`
`
export const Start = styled.div`
    display: flex; 
    position: relative;
    padding: 80px 0;

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: 1920px 100%; 
        background-repeat: no-repeat;
        width: 100%; 
        height: 100%;
        z-index: -1;
        top:0;
    }

    @media (max-width:576px){ 
        padding: 40px 0;
    }
`
export const StartContent = styled.div`
    width: 1400px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width:768px){ 
       flex-direction: column;
       height: auto;
       text-align: center;
    }
` 
export const StartDescription = styled.div`
    width: 32%;

    button{
        font-size: 18px;
        font-weight: 900;
        width: 280px;
        height: 60px;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        border: none; 
        cursor: pointer; 
        margin-top: 20px;

        @media (max-width:576px){ 
            height: 40px;
            font-size: 16px;
        }
    }

    @media (max-width:996px){ 
        width: 50%;

    } 

    @media (max-width:768px){ 
        width: 100%;
    }

`
export const StartTitle = styled.div`
    margin-bottom: 20px;
    
    h2{
        font-size: 20px;

        @media (max-width:576px){ 
            font-size: 18px;
        }
    }
    p{
        font-size: 18px;
        color: #a1a1a1;
        margin: 25px 0;

        @media (max-width:576px){ 
            font-size: 16px;
        }
    }
`
export const StartImage = styled.div`
    width: 68%;
    position: relative;

    img{
        width: 100%;
    } 

    @media (max-width:996px){ 
        width: 50%;
    } 

    @media (max-width:768px){ 
        width: 100%;
        margin-top: 20px;
    }
`
export const Comission = styled.div`
    width: 100%;
    background-color: #F47B25;
    height: 250px;
    position: relative;

    @media (max-width:576px){ 
        height: 170px;
    }
`
export const ComissionContent = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto; 
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ComissionText = styled.div` 
    width: calc(100% - 150px); 

    h1{
        font-size: 44px;
        font-weight: 700;

        @media (max-width:576px){ 
            font-size: 26px;
        }
    }

    span{
        font-weight: 300;
    }

    @media (max-width:576px){ 
        width: calc(100% - 100px);
    }

`
export const ComissionPercent = styled.div`
    width: 150px;
    height: 125px;
    background-color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after{
        content: '';
        position: absolute; 
        border-top: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid #fff;
        transform: translate(0px, 15px);
        width: 0px;
        height: 0px;
        left: 0;
        bottom: 0;
    }

    h1{
        font-size: 83px;
        color: #F47B25;
        font-weight: 900;

        @media (max-width:576px){ 
            font-size: 50px;
        }
    }

    @media (max-width:576px){ 
        width: 100px;
        height: 75px;
    }
`