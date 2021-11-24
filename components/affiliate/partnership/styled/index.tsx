import styled from "styled-components";
import bg from 'img/background/partnership_bg.jpg'

export const Section = styled.section`
    width: 100vw;  
    position: relative; 

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
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 160px 20px;
    box-sizing: border-box;

    @media (max-width:996px){ 
        flex-direction: column;
        text-align: center;
    }
    @media (max-width:576px){ 
        padding: 80px 20px;
    }
`
export const Image = styled.div`
    width: 35%;
    position: relative;

    img{
        width: 90%;

        @media (max-width:576px){ 
            width: 200px; 
            margin-bottom: 40px;
        }
    }

    @media (max-width:996px){ 
        width: 100%;
    }

    
    @media (max-width:996px){ 
        width: 350px;
        margin-bottom: 60px;
    }
`
export const Description = styled.div`
    width: 65%;
`
export const Title = styled.div`
    h2{
        font-size: 20px;
    }
    span{
        color: #F47B25; 
    }
`
export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (max-width:996px){ 
        flex-direction: column;
    }
    
    @media (max-width:996px){ 
        width: 100%;
    }

    div{
        width: 47%;

        @media (max-width:996px){ 
            width: 100%;
        }
    }

    p{
        font-size: 16px;
        font-weight: 400;
        color: #d2d3d3;
        line-height: 24px;
        margin: 15px 0;
    }
`