import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    max-width: 1200px;
    margin: 80px auto;

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

    & span:nth-child(1){ 
        color: #F47B25;
    }
`
export const Items = styled.div`
    width: 100%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    margin-top: 40px;

    @media (max-width: 996px){ 
        justify-content: center;
    }
`
export const Item = styled.div`
    width: calc(100%/4 - 15px);
    height: 369px; 
    position: relative;  
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 30px;

    @media (max-width: 996px){ 
        width: calc(100%/3 - 15px);
        margin: 20px 7px;
    }

    @media screen and (max-width: 768px){ 
        width: 100%;
        margin-bottom: 30px;
    }
`
export const Img = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
    }

    img::after{
        content: "";
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient( 90deg, rgba(0,0,0,0) 83%, rgba(15,15,15,1) 110%); 
    }

    img::before{ 
        content: ""; 
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background: linear-gradient( -90deg, rgba(0,0,0,0) 83%, rgba(15,15,15,1) 110%);
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
        transform: translateY(-110px);
    }

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 110px;
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

    &::before{
        position: absolute;
        content: "";
        transform: skew(  -18deg);
        background-color: #ff3700;
        z-index: -1;
        right: -4px;
        height: 15px;
        width: 70px;
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
`
export const Btn = styled.button`
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase; 
    height: 40px;
    background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
    color: #fff;
    border: none;
    margin-left: 20px; 
    cursor: pointer;

    div{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #d25d09;
    }
    
    h2{
        font-size: 15px; 
        text-align: center;
        width: 110px;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
export const LoadMoreBtn = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase; 
    height: 40px;
    background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
    color: #fff;
    border: none;
    margin-left: 20px; 
    cursor: pointer;

    div{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #d25d09;
    }

    h2{
        font-size: 15px; 
        text-align: center;
        width: 110px;
    }

    svg{
        width: 20px;
    }
`