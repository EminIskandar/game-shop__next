import styled from "styled-components"; 
import bg from 'img/background/smart-bg.webp'

export const Section = styled.div`
    position: relative; 
    background-color: unset;
    transition: unset;
    overflow: hidden; 

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
    @media (max-width: 768px){ 
        padding: 0 20px ;
        box-sizing: border-box;
    }
    @media (max-width: 576px){ 
        height: auto; 
    }
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px){ 
        width: 100%; 
    }

    @media (max-width: 768px){ 
        flex-direction: column;
        height: auto;
        padding: 20px 0;
    }

    @media (max-width: 576px){ 
        text-align: center;
    }
`
export const Image = styled.div`
    width: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 370px;

        @media (max-width: 576px){ 
            width: 300px;
        }
    }
    @media (max-width: 768px){ 
        width: 100%;
    }
`
export const Description = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    span{
        color: #F47B25;;
    }

    @media (max-width: 768px){ 
        width: 100%;
    }
`
export const Title = styled.div`
    h2{
        font-size: 45px;

        @media (max-width: 576px){ 
            font-size: 40px;
        }
    }
`
export const Text = styled.div`
    margin: 10px 0;
    p{
        font-size: 19px;
        font-weight: 500;
        margin: 10px 0;
    }
`
export const TermCondition = styled.div`
    h5{
        font-size: 12px;
        font-weight: 300;
    }
`
export const Btn = styled.div`

    button{
        margin: 20px 0;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        width: 250px;
        height: 50px;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        border: none;

        @media (max-width: 576px){ 
            width: 100%;
        }
    }
    
`