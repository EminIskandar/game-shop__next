import styled from "styled-components";

export const Section = styled.section`
    background-color: #fff;
    padding: 40px 0; 
`
export const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
export const Title = styled.div`
    h2{
        font-size: 34px; 
        font-weight: 300;
        color: #000;
        text-align: center;
    }

    span{
        color: #F47B25;
        font-weight: 700;
    }
`
export const Logos = styled.div`
     display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
`
export const LogoItem = styled.div`
    width: 25%;

    img{
        filter: saturate(0); 
        cursor: pointer;
        width: 100%; 
    }

    img:hover{
        filter: saturate(1); 
    }
    @media (max-width:996px){ 
        width: 33.33%;
    }
    @media (max-width:768px){ 
        width: 50%;
    }
`

export const Btns = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;

    button{
        cursor: pointer;
        border: none;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 17px;
        border-radius: 3px;
        margin: 0 10px;

        @media (max-width:480px){ 
            font-size: 12px;  
        } 
    }
` 