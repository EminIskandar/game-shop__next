import styled from "styled-components"; 

export const Section = styled.section`
    width: 100vw;
    max-width: 1200px;
    margin: 80px auto 0; 

    @media (max-width: 1200px){ 
        padding: 0 20px;
        box-sizing: border-box; 
    }
`
export const Content = styled.div`
`
export const Title = styled.div`
    h2{
        font-size: 32px;
        font-weight: 300;
    } 
    span{ 
        font-weight: 700;
    }
    & h2 span:nth-child(1){ 
        color: #F47B25;
    }
`
export const Items = styled.div`
    width: 100%;
    height: 470px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 40px;

    @media (max-width: 996px){ 
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
    }
`
export const Item = styled.div`
    width: 31.33%;
    height: 100%;
    position: relative;
    transform: scale(1);
    transition: transform .2s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 996px){ 
        width: calc(100%/ 2 - 30px);  
        margin: 15px;
    }

    @media (max-width: 768px){ 
        width: 100%; 
        height: 500px;
        margin: 30px 0;
    }
    @media (max-width: 480px){ 
        width: 100%; 
        height: 400px; 
    }
`
export const Image = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after{
        content: "";
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient( 90deg, rgba(0,0,0,0) 83%, rgba(15,15,15,1) 110%);
    }

    &::before{ 
        content: ""; 
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient( -90deg, rgba(0,0,0,0) 83%, rgba(15,15,15,1) 110%);
    }

    img{
        @media (max-width: 996px){ 
            width: 100%;
        }
    }

    @media (max-width: 768px){ 
        height: 500px;
        align-items: flex-start;
    }

    @media (max-width: 480px){ 
        height: 400px;
    }
`
export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    text-align: center;

    &::before{ 
        content: "";
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        z-index: 1; 
        background-image: linear-gradient(transparent 0%, rgb(0 0 0 / 100%));
        transform: translateY(-100px);
    }

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: 0;
        z-index: 1; 
        background-color: #000;  
    }
`
export const Name = styled.div`
    position: relative;
    z-index: 5;
    width: 80%;

    h2{
        font-size: 18px;
        font-weight: 500;
    }
 
`
export const Price = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;

    & p:first-child{
        text-decoration: line-through;
        font-size: 13px;
        font-weight: 300;
        color: #a1a1a1; 
    }
    & p:last-child{
        font-size: 18px;
        font-weight: 500; 
        margin: 0 0 -3px 5px;
    }
`
export const Coupon = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    margin-bottom: 10px;

    h5{
        font-size: 12px;
        font-weight: 300;
        color: #a1a1a1;
        margin-right: 10px;
    }

    h3{
        font-size: 12px;
        font-weight: 500; 
    }

    & div:first-child::before{
        position: absolute;
        content: "";
        transform: skew(  -18deg);
        background-color: #ff3700;
        z-index: -1;
        right: -4px;
        height: 15px;
        width: 78px;
    }
`
export const Btn = styled.button`
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase; 
    width: 150px;
    height: 40px;
    background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
    color: #fff;
    border: none;
    margin-left: 20px;
    cursor: pointer;

    h2{
        font-size: 15px; 
        text-align: center;
        width: calc(100% - 40px);
    }
    div{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #d25d09;
    }
`