import styled from "styled-components";  
import bg from 'img/background/about-slider.webp'

export const Section = styled.section`
    width: 100vw;
    height: 500px;
    position: relative; 

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: 1920px auto;
        width: 100%;
        height: 100%;
    }

    @media (max-width:768px){ 
        height: 520px;
    } 

    @media (max-width:480px){ 
        height: 540px;
    }
`
export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
`
export const Items = styled.div`
    width: auto; 
    height: 85%;
    margin: 0 auto; 
    overflow: hidden;
    display: flex;
    position: absolute;
    left: 0;
`
export const Title = styled.div`

    h2{
        font-size: 34px;
        font-weight: 300;
        text-transform: uppercase;

        @media (max-width:576px){ 
            font-size: 17px;
        }
    }

    span{
        color: #F47B25;
        font-weight: 500;;
    }
`
export const Description = styled.div`
     height: calc(100% - 41px);
`
export const DescriptionTitle = styled.div`
    margin: 40px 0;

    h2{
        font-size: 28px;

        @media (max-width:576px){ 
            font-size: 15px;
        }
    }
`
export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
`
export const TextItem = styled.div`
    img{
        width: 40px;
    }
    h2{
        font-size: 24px;
        color: #a1a1a1;
        font-weight: 300;
        @media (max-width:996px){ 
            font-size: 20px;
        }
        @media (max-width:576px){ 
            font-size: 15px;
        }
    }

    @media (max-width:996px){ 
        order: 2;
    }
`
export const TextImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
         
    }

    @media (max-width:996px){ 
        order: 1;
        margin-bottom: 10px;
    }
    @media (max-width:576px){ 
        
    }
    
`
export const Item = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: 100%; 
    text-align: center;
    padding: 40px 20px;
    box-sizing: border-box;
    transition: all .4s ease;

    &:nth-child(2) ${Description},
    &:nth-child(3) ${Description}.Slider__text{
        display: flex;
        text-align: start;

        @media (max-width:996px){ 
            flex-direction: column;
            margin-top: 20px;
            text-align: center;
        }
    }
    &:nth-child(2) ${TextItem} h2,
    &:nth-child(3) ${TextItem} h2{
        color: #fff; 
        font-weight: 500;
    }
    &:nth-child(3) ${TextItem} h2{
        padding: 0 60px;
        box-sizing: border-box;
    }
    &:nth-child(3) ${TextItem} span{
        color: #F47B25;
        cursor: pointer;
    }
    &:nth-child(3) ${TextItem} span:hover{
        text-decoration: underline;
    }
    &:nth-child(3) ${TextImg} img{ 
        height: 200px;
    }

    &:nth-child(2) ${TextImg} img,
    &:nth-child(3) ${TextImg} img{

        @media (max-width:768px){
            height: 150px;
        }
      
    }

    &:nth-child(2) ${TextItem} h2{
        padding: 0;
    }

    @media (max-width:576px){ 
        align-items: unset;
        justify-content: unset;
    }
`
export const Nav = styled.div`
    width: 100%;
    max-width: 1200px; 
    height: 15%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    position: absolute;
    bottom: 0;
`
export const NavItem = styled.div`
        width: 7px;
        height: 7px;
        margin: 0 5px;
        background-color: #fff;
        border-radius: 100%;
        cursor: pointer;

        &.active{
            background-color: #F47B25;
        }
`