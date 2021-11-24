import styled from "styled-components"; 

export const Section = styled.section`
    width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 80px 0; 

    @media (max-width:576px){ 
        margin: 60px 0 ;
    }

    @media (max-width:480px){ 
        padding: 0 20px;
        box-sizing: border-box;
    }
`
export const Content = styled.div`
`
export const Title = styled.div`
    h2{
        font-size: 44px;
        margin-bottom: 20px;

        @media (max-width:576px){ 
            font-size: 32px; 
        }
    }
    h4{
        font-size: 24px; 
        color: #d2d3d3;
        margin: 5px 0;

        @media (max-width:576px){ 
            font-size: 21px;  
        }
    } 
`
export const Btn = styled.button`
    font-size: 24px;
    font-weight: 700;   
    background-color: transparent;
    border: 3px solid  #F47B25;
    cursor: pointer;
    color: #F47B25;
    padding: 15px 40px;
    margin-top: 40px;
    transition: all .3s ease;

    &:hover{
        background-color: #F47B25;
        color: #fff;
    } 

    @media (max-width:576px){ 
        font-size: 20px;  
    }

    @media (max-width:480px){ 
        width: 80%;
        font-size: 16px
    }
`