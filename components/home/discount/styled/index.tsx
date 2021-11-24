import styled from 'styled-components' 
import icon from 'img/icon/discount.png'

export const Section = styled.section`
    width: 100vw;  
    position: relative; 
    overflow: hidden;  
    margin-top: 40px;

    &::after{
        content: "";
        position: absolute;
        width: 214%;
        height: 106%;
        top: -6%;
        left: -62%;
        right: 0;
        margin: auto;
        background-image: radial-gradient(ellipse,rgba(35,42,93,.65),transparent 70%);
    }
`
export const Content = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 4;

    @media (max-width:768px){ 
        width: 90%;
    }
`
export const Header = styled.div`
    text-align: center; 
    & h4{ 
        font-size: 24px;
        color: #F47B25;
    }
    & span{
        font-weight: 400;
        color: #fff;
        margin: 0 5px;
    } 
`
export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    @media (max-width:996px){ 
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`
export const Item = styled.a`
    width: 452px;
    display: flex; 
    border: 1px solid rgba(35,42,93,.65);
    background-color: #131324;
    position: relative;

    @media  (max-width:1400px){ 
        width: calc(100% / 3 - 14.66px);  
    }

    @media (max-width:996px){  
        width: calc(100% / 2 - 25px);
        margin: 10px;
    }
    @media (max-width:768px){ 
        width: 100%;
        margin: 5px;
    }
`
export const Image = styled.div`
    width: 185px;
    height: 245px;
    overflow: hidden;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        background-image: url(${icon.src});
        top: 0;
        width: 50px; 
        height: 50px;
        background-repeat: no-repeat;
        right: -5px;
    }

    & img{
        width: 100%;
        transition: all .4s ease;
        cursor: pointer;

        @media  (max-width:1400px){ 
            width: 100%;
            height: 100%;  
        }

        @media (max-width:996px){  
            width: 100%;
            height: auto;
        }

        @media (max-width:480px){ 
            width: auto;
            height: 100%;
        }
    }

    &:hover img{
        transform: scale(1.2);
    }

    & h4{
        font-size: 14px;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 5;
        font-style: italic;
        transform: translate(-1px, 4px);
    }

    @media (max-width:480px){ 
        width: 150px;
    }
`
export const Info = styled.div`
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:#fff;

    @media  (max-width:1400px){ 
        width: calc(100% - 185px);  
    }

    @media (max-width:480px){ 
        width: calc(100% - 150px);
    }
`
export const Title = styled.div`
    & h4{
        font-size: 16px;
    }
`
export const Price = styled.div`
    display: flex;
    flex-direction: column;

    & h4{
        font-size: 14px;
    }

    & h4 span{
        font-size: 12px;
        text-decoration:line-through;
        color: #a0a0a0;;
        margin-right: 5px;
    }
`
export const Coupon = styled.div`
    display: flex;

    &  h4{
        font-size: 12px;
        color: #a0a0a0;
        font-weight: 400;
    }

    &   span{
        width: 100px;
        height: 20px;
        background-color:  #F47B25;
        font-size: 14px;
        text-align: center;
        font-weight: 800;
        margin-left: 5px;

        @media (max-width:480px){ 
            margin-top: 10px;
        }
    }
    @media (max-width:1200px){ 
        flex-direction: column;
    } 
    @media (max-width:996px){  
        flex-direction: unset;
    }
    @media (max-width:480px){ 
        flex-direction: column;
    }
`
export const BuyBtn = styled.div`
    & button{
        width: 100px;
        height: 40px;
        background-color: #F47B25;
        border:none;
        color:#fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
    }
`