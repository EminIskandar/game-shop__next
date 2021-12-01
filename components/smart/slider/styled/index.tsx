import styled,{keyframes} from "styled-components"; 

const imgFadeEffect = keyframes`
    0%{opacity:  0}  
    100%{opacity: 1}
`
export const Section = styled.section`
    width: 100vw;
    max-width: 1200px; 
    margin: 80px auto 0;
    padding: 40px 0;
    position: relative; 

    @media (max-width: 576px){ 
        margin: 20px auto 0;
        padding: 0;
    }
`
export const Content = styled.div`
`
export const Title = styled.div`
     h2{
        font-size: 32px;
    }
    span{
        color: #F47B25;
    }

    @media (max-width: 1200px){ 
        padding: 0 20px;
        box-sizing: border-box;
    }
`
export const SliderItem = styled.div`
    margin: 40px 0 0;
    height: 600px;
    width: 100%; 
    position: relative;

    @media (max-width: 1200px){ 
        height: 50vw;
    }
`
export const ItemContent = styled.div`
    width: 100%; 
    position: relative;
    height: 100%;
    overflow: hidden;
`
export const Img = styled.div`
    width: 100%;
    img{
        width: 100%;
        position: absolute;
        top: 0;
    }

    & img:nth-child(1){
        z-index: 2;
    }
    & img:nth-child(2){
        z-index: 1;
    }
    & img.fade{
        animation: ${imgFadeEffect} 1s ease forwards;
    }
`
export const Info = styled.div`
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    padding: 0 20px;
    box-sizing: border-box;
    position: absolute;

    &::before{ 
        content: "";
        position: absolute;
        width: 100%;
        height: 130px;
        bottom: 0;
        z-index: 2;
        background-image: linear-gradient(transparent 0%, rgb(0 0 0 / 200%));
        left: 0;
    }

    @media (max-width: 576px){ 
        flex-direction: column;
        height: auto;
    }
`
export const Name = styled.div`
    position: relative;
    z-index: 5;
    width: 68%;

    h2{
        font-size: 30px;
        font-weight: 700; 

        @media (max-width: 996px){ 
            font-size: 25px;
        }

        @media (max-width: 768px){ 
            font-size: 20px;
        }
    }

    @media (max-width: 1200px){ 
        width: 50%;
    }
    @media (max-width: 1200px){ 
        width: 30%;
    }
    
    @media (max-width: 576px){ 
        width: 100%;
        text-align: center;
    }
`
export const PriceAndBuy = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    width: 32%;

    @media (max-width: 1200px){ 
        width: 50%;
        justify-content: flex-end;
    }

    @media (max-width: 1200px){ 
        width: 70%;
    }

    @media (max-width: 576px){ 
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
    }
`
export const PriceAndCoupon = styled.div`
`
export const Price = styled.div`
    display: flex;
    align-items: flex-end;
    h2{
        font-size: 15px;
        margin-right: 3px; 
        text-decoration:line-through;
        color: #a1a1a1;;

        @media (max-width: 996px){ 
            font-size: 15px;
        }
        @media (max-width: 480px){ 
            font-size: 12px;
        }
    }
    h4{
        font-size: 30px;
        margin-left: 5px;

        @media (max-width: 996px){ 
            font-size: 25px;
        }
        @media (max-width: 480px){ 
            font-size: 18px;
        }
    }
`
export const Coupon = styled.div`
    display: flex;
    position: relative;
    h6{
        font-size: 12px;  
        color: #a1a1a1;
        font-weight: 300;
        margin-right: 10px;
        @media (max-width: 480px){ 
            font-size: 10px;
        }
    }
    h4{
        font-size: 12px;  
        font-weight: 700;
        display: inline-block; 

        @media (max-width: 480px){ 
            font-size: 10px;
        }
    }
    h4::before{
        position: absolute;
        content: "";
        transform: skew(  -18deg ); 
        background-color: #ff3700;
        z-index: -1;
        right: 3px;
        height: 55px;
        width: 70px;

        @media (max-width: 480px){ 
            width: 60px;
        }
    }
`
export const Btn = styled.button`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700; 
    text-transform: uppercase;
    width: 170px;
    height: 40px;
    background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
    color: #fff;
    border: none;
    margin-left: 20px;

    h2{
        font-size: 15px; 
        text-align: center;
        width: calc(100% - 40px);

        @media (max-width: 480px){ 
            width: 80px;
            font-size: 12px;
        }
    }

    @media (max-width: 480px){ 
        width: 110px;
        height: 30px;
    }


`
export const Icon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #d25d09;

    svg {
        width: 20px;
    }

    @media (max-width: 480px){ 
        width: 30px;
        height: 30px;
        font-size: 14px;
    }
`
export const Nav = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
`
export const Navİtem = styled.div`
      width: 30px; 
    height: 2px;
    background-color: #a0a0a0;
    margin-right: 5px;
    cursor: pointer;

    &.active{
        background-color: #F47B25;
    }
`
export const Arrows = styled.div`
    position: absolute;
    margin-top: 118px;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 2;

    @media (max-width: 1200px){ 
        height: 50vw;
    }
`
export const ArrowsItem = styled.div`
    width: 15px;
    height: 15px; 
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    cursor: pointer;

    &:nth-child(1){
        transform: rotate(45deg);
    }

    &:nth-child(2){
        transform: rotate(-135deg);
    }
`