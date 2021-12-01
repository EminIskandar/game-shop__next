import styled from "styled-components";
import bg from 'img/background/how-it-work-head.webp'

export const Section = styled.section`
    position: relative; 
    background-color: unset;
    transition: unset;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        background-image: url(${bg.src}); 
        background-position: 50%;
        background-size: auto 680px; 
        background-repeat: no-repeat;
        width: 100vw;
        height: 680px;  
        z-index: -1;
        left: 0;
    }

    @media (max-width:768px){ 
        height: auto;
    }
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    max-width: 1200px;
    height: 680px;
    margin: 0 auto;

    @media (max-width:1200px){ 
        width: 100%; 
    }

    @media (max-width:768px){ 
        flex-direction: column;
        height: auto;
        padding: 60px 0;
    }
`
export const Img = styled.div`

    width: 40%;

    img{
        height: 420px;

        @media (max-width:768px){ 
            height: 200px;
        } 
        @media (max-width:576px){ 
            height: 100px;
        }
    }

    @media (max-width:768px){ 
        display: block;
        width: auto;
    } 
`
export const Description = styled.div`
     width: 60%;
    @media (max-width:768px){ 
        width: 100%;
        text-align: center;
    } 
`
export const Title = styled.div`

    h2{
        font-size: 42px;

        @media (max-width:576px){ 
            font-size: 30px;
        }
    }


`
export const Text = styled.div`
    @media (max-width:768px){ 
        margin-top: 60px;
    } 
`
export const TextItem = styled.div`

    margin-top: 10px;

    h4{
        font-size: 24px;

        @media (max-width:576px){ 
            font-size: 18px;
        }
    }
    p{
        margin-top: 20px;
        font-size: 26px;
        font-weight: 300;
        color: #a1a1a1;
          
        @media (max-width:576px){ 
            font-size: 16px;
        }
    }
`