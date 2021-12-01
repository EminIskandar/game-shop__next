import styled from "styled-components";
import bg from 'img/background/about-head.webp'

export const Section = styled.section`
    @media (max-width:576px){ 
        text-align: center;
    }
`
export const Content = styled.div`
    width: 100vw;
    max-width: 100vw;
`
export const Title = styled.div`
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

    & h2{
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

    & span{
        font-weight: 700;
    }

    @media (max-width:576px){ 
        height: 200px;
    }
`
export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #2B2B2B;
`   
export const InfoContent = styled.div`
    width: 100vw;
    max-width: 1200px; 
    display: flex;
`
export const InfoText = styled.div`
    width: calc(100% - 400px);
    @media (max-width:996px){ 
        width: 100%;
    }
`
export const InfoTitle = styled.div` 
    & h2{
        margin-top: 20px;
        font-size: 32px;
        font-weight: 300;
    }
    & span{
        color: #F47B25;
        font-weight: 700;
    }
`
export const InfoDesc = styled.div` 
`
export const InfoDescTitle = styled.div`
    margin: 20px 0;

    & h2{
        font-size: 28px; 
        @media (max-width:576px){ 
            font-size: 18px; 
        }
    }
`
export const InfoDescContent = styled.div`
    display: flex;
    justify-content: space-between;

    & p{
        font-size: 18px;
        font-weight:300;
        line-height: 36px;
        color: #a1a1a1;
        width: 47%;

        @media (max-width:996px){ 
            width: 100%;
            margin: 10px 0;
        }

    }

    & span{
        font-weight: 700;
    }

    @media (max-width:996px){ 
        display: block;
    }
`
export const Img = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;

    @media (max-width:996px){ 
        display: none;
    }
`