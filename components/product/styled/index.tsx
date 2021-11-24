import styled from "styled-components";

export const Main = styled.section`
    width: 100vw;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden; 
    padding: 0;
`
export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 900px;
    filter: blur(19px);
    opacity: 0.3;
    z-index: -1;
`
export const Breadcrumbs = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto; 
`
export const BreadcrumbsContent = styled.div`
    display: flex;
    margin: 20px 0;
    flex-wrap: wrap;
`
export const BreadcrumbsItem = styled.div`
     a{
        font-size: 12px;
        color: #fff;
        margin: 0 2px;
    }

    &:last-child a{
        color: #a1a1a1;
    }
`
export const Info = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`
export const InfoContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width:1050px){ 
        flex-direction: column;
    }
`
export const Gallery = styled.div`
    width: 41%;
    position: relative;

    @media (max-width:1050px){ 
        width: 100%;
    }
`
export const Cover = styled.div`
    width: 100%;

    img{
        width: 100%;
    }
`
export const OtherImage = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
`
export const Image = styled.div`
    width: calc(100% / 5 - 5px );
    position: relative;
    margin-top: 5px;
    cursor: pointer;

    img{
        width: 100%;
    }
`
export const Description = styled.div`
    width: 57%;
    background-color: #202123; 

    @media (max-width:1050px){ 
        width: 100%;
    }
`
export const ReviewAndBtn = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    box-sizing: border-box;
`
export const Review = styled.div`
    h6{
        font-size: 12px;
        font-weight: 300;
    }
`
export const Star = styled.div`
    ul{
        display: flex;
        margin: 5px 0;
        justify-content: space-between;
    }

    li{
        font-size: 14px;
        color: #F4B101;
    }
`
export const Btn = styled.div`
    display: flex;
    align-items: center;

    h6{
        font-size: 12px;

        @media (max-width:576px){ 
            display: none;
        }
    }
`
export const BtnShare = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;

    div{
        width: 30px;
        height: 30px; 
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        background-color: #00ACED ;
    }

    @media (max-width:576px){ 
        display: none;
    }
`
export const BtnWishlist = styled.div`
    display: flex;
    align-items: center;

    div{
        width: 30px;
        height: 30px; 
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        background-color: #F4B101; ;
    }
`
export const NameAndOther = styled.div`
     padding: 40px 30px;
    box-sizing: border-box;
    border-top: 1px solid #ffffff2e;
    border-bottom: 1px solid #ffffff2e;
`
export const Name = styled.div`
    h4{
        font-size: 24px;
    }
`
export const OtherInfo = styled.div`
    margin-top: 40px;
`
export const OtherInfoItem = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;

    h5{
        width: 110px;
        font-size: 12px;
        font-weight: 400;
    }

    h3{ 
        font-size: 14px; 
    }
    
`
export const PriceAndBuyBtn = styled.div`
    position: relative;
    padding: 20px 30px;
    box-sizing: border-box;
    justify-content: space-between;

    @media (max-width:650px){ 
        flex-direction: column;
    }

    @media (max-width:480px){ 
        padding: 20px;
    }
    
`
export const Price = styled.div`
     display: flex;
`
export const PriceText = styled.div`
     display: flex;

    h3{
        font-size: 16px;
        font-weight: 400;
        margin-right: 5px;

        @media (max-width:480px){ 
            font-size: 12px;
        }
    }
`
export const PriceIcon = styled.div`
    position: relative;

    svg{
        color: #F47B25;
        cursor: help;
    }

    div{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px; 
        font-size: 12px; 
        transform: translate(10px, -120%); 
        visibility: hidden; 
        opacity: 0;
        transition: all .4s ease;
    }

    div::after{
        content: '';
        position: absolute;
        border-top: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid #fff;
        transform: translate(-20px, -1px);
    }

    &:hover div{ 
        visibility: visible;
        opacity: 1;
    }
` 
export const DicountPrice = styled.div`
    & ${PriceText}{
        padding: 10px 0 10px 0; 
        position: relative;
    }
    & ${PriceText} span{
        margin-right: 10px;
        position: relative;
        z-index: 5;
    }

    & ${PriceText}::after{
        content: '';
        position: absolute;
        left: 0;
        width: 65px;
        height: 30px;
        background-color: #F47B25;
        z-index: 2;
        transform: skewX( 345deg ) translate(-6px, 0px);

        @media (max-width:480px){ 
            width: 49px;
            height: 24px;
        }
    }

    & ${PriceIcon} div{
        width: 150px; 
        color: #000;
    }

    h2{
        font-size: 23px;
        color: #F47B25;
    } 

    margin-left: 30px;
`
export const DicountPriceText = styled.div`
    transform: translateX(-10px);
`
export const CurrentPrice = styled.div`

    h2{
        font-size: 34px;
        color: #F47B25;
    }

    padding: 10px 20px 10px 0;

    & ${PriceIcon} div{
        width: 220px; 
        color: #F4B101;
    }
    
`
export const BuyBtn = styled.div`
    display: flex;

    button{
        width: 150px;
        height: 70px;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        border: none;
        font-size: 20px;
        font-weight: 900;
        color: #fff;

        @media (max-width:576px){ 
            width: calc(100% - 50px);
        }
    }

    @media (max-width:650px){ 
        margin-top: 20px;
    }
`
export const BuyBtnIcon = styled.div`
    width: 50px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
    border-right: 1px solid #00000021;
`
export const Affiliate = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    box-sizing: border-box;
`
export const AffiliateIcon = styled.div`
    width: 20px;
    height: 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: #000;
    font-size: 15px;
    margin-right: 5px;
`
export const Affiliatetext = styled.div`

    h5{
        font-size: 12px;
        color: #c40202;
    }

    span{
        color: #fff;
    }
`
export const Smart = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 20px auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: #202123; 
`
export const SmartContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:1050px){ 
        flex-direction: column;
    }
`
export const SmartDescription = styled.div`
    display: flex;
    align-items: center;
    width: 60%;

    @media (max-width:1050px){ 
        width: 100%;
    }

    @media (max-width:576px){ 
        flex-direction: column;
    }
`
export const SmartImage = styled.div`
    position: relative;
    width: 230px;

    img{ 
        width: 150px; 
        position: relative;
        z-index: 6;
        transform: translateX(18px);

        @media (max-width:576px){ 
            transform: translateY(-5px);
        }
    }
    img::after{
        content: '';
        position: absolute; ;
        width: 74px;
        height: 70px;
        background-color: #fff;
        z-index: 2;
        transform: skewX(  345deg ) translate(-36px, -6px);

        @media (max-width:576px){ 
            display: none;
        }
    }

    img::before{
        content: '';
        position: absolute;
        left: 0;
        width: 130px;
        height: 70px;
        background-color: #fff;
        z-index: 2;
        transform: translate(0px, -6px);

        @media (max-width:576px){ 
            width: 100%;
        }
    }

    @media (max-width:576px){ 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const SmartText = styled.div`
    width: 70%;

    h3{
        font-size: 20px;
    }

    span{
        color: #F47B25;
    }

    @media (max-width:576px){ 
        width: 100%;
    }

    @media (max-width:576px){ 
        margin: 20px 0;
    }
`
export const SmartButton = styled.div`
    display: flex;
    align-items: center;
    background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
    border: none;
    color: #fff;
    height: 45px;

    svg{
        width: 20px;
        width: 45px;
        border-right: 2px solid #ae591c85;
        height: 45px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3{
        padding: 0 10px;

        @media (max-width:480px){ 
            font-size: 15px;
        }
    }

    @media (max-width:1050px){ 
        margin-top: 20px;
    }
`
export const DAR = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 40px auto;
`
export const DARContent = styled.div`
`
export const DARHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    h3{
        font-size: 18px;
    }
    @media (max-width:1400px){ 
        margin-left: 20px;
    }
`
export const DARIcon = styled.div`
    margin-right: 10px;
    font-size: 20px;
`
export const DARDescription = styled.div`
    padding: 40px;
    box-sizing: border-box;
    background-color: #202123; 

    p{
        font-size: 12px;
        font-weight: 400;
        margin: 10px 0;
        line-height: 20px;
    }

    h3{
        font-size: 20px;
        font-weight: 600;
        margin: 10px 0;
    }

    li{
        list-style-type: disc; 
        margin: 5px 0 5px 40px;
        cursor: pointer;
    }

    h6{
        font-size: 12px;
        color: #F47B25;
        font-weight: 400;
    }
`
export const ReviewTwo = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 40px auto;
`
export const ReviewContent = styled.div`
`
export const ReviewHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    h3{
        font-size: 18px;
    }
    @media (max-width:1400px){ 
        margin-left: 20px;
    }
`
export const ReviewIcon = styled.div`
    margin-right: 10px;
    font-size: 20px;
`
export const ReviewDescription = styled.div`
    padding: 40px;
    box-sizing: border-box;
    background-color: #202123; 
    display: flex;
    justify-content: space-between;

    @media (max-width:768px){ 
        flex-direction: column;
    }
`
export const ReviewText = styled.div`
`
export const ReviewTitle = styled.div`
    display: flex;

    h3{
        margin-right: 10px;
        font-size: 18px;

        @media (max-width:480px){ 
            font-size: 12px;
        }
    }

    span{
        font-size: 18px;
        font-weight: 500;

        @media (max-width:480px){ 
            font-size: 12px;
        }

    }
`
export const ReviewAvarage = styled.div`
    h4{
        font-size: 13px;
        font-weight: 400;
    }
    span{ 
        color: #F47B25;
        margin: 0 5px;
    }
`
export const ReviewBtn = styled.div`
    display: flex;
    align-items: center;
    background:  #F47B25;
    border: none;
    color: #fff;
    height: 45px;

    svg{
        width: 20px;
        width: 45px; 
        height: 45px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3{
        padding: 0 10px;

        @media (max-width:480px){ 
            font-size: 15px;
        }
    }

    @media (max-width:768px){ 
        margin-top: 20px;
    }
`