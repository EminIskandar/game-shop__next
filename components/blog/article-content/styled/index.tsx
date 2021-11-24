import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    transform: translateY(120px);
    padding: 0;
`
export const Section = styled.section`
`
export const Image = styled.div`

    position: relative;

    div{
        width: 100%;
        max-width: 1400px;
        margin:  0 auto;  
        position: relative;

        @media (max-width:1400px){ 
            width: 1200px;
        }

        @media (max-width:1200px){ 
            width: 996px; 
        }

        @media (max-width:996px){
            width: 768px;
        } 

        @media (max-width:768px){ 
            width: 100vw;
        }
    }

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        background-color: #fff;
        bottom: 0;
        z-index: -1;
    }

    img{
        width: 100%;
    }
`
export const Description = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    padding: 80px 0 ;
    box-sizing: border-box;
    background-color: #fff;

    h2{
        font-size: 20px;
        color: #000;
        margin-top: 20px;
    }

    h1{
        font-size: 32px;
        color: #0056b3;
        margin: 40px 0 20px ;
    }

    p{
        font-size: 16px;
        font-weight: 300;
        color: #303030;
        margin: 10px 0;
    }

    li{
        font-size: 16px;
        font-weight: 400;
        color: #303030;
        list-style-type: disc;
        padding: unset;
        margin: 10px 0 10px 40px;
    }

    img{
        position: relative; 
        left: 50%;
        transform: translateX(-50%);

        @media (max-width:1400px){ 
            width: 100%;
        }

    }

    @media (max-width:768px){ 
        padding: 20px ;
    }
`
export const Content = styled.div`
    width: 100%;
    max-width: 1400px;
    margin:  0 auto;  
    position: relative;

    @media (max-width:1400px){ 
        width: 1200px;
    }

    @media (max-width:1200px){ 
         width: 996px; 
    }

    @media (max-width:996px){
        width: 768px;
    } 

    @media (max-width:768px){ 
        width: 100%;
    }
`
export const Header = styled.div`
`
export const Breadcrumbs = styled.div`
    display: flex;
    padding:  10px 0; 

    & h4 span:nth-child(1),
    & h4 span:nth-child(2){
        color: #bcbdbd;
        font-weight: 300;
        margin-right: 5px;
    }

    & h4 span:nth-child(3){
        color: #626262;
        font-weight: 700;
    }
`
export const Title = styled.div`
    h4{
        font-size: 46px;
        font-family: 'Roboto Condensed', sans-serif;
        color: #000;

        @media (max-width:996px){
            font-size: 32px;
        } 
    }
`
export const DateAndCategory = styled.div`
`
export const Date = styled.div`
    h4{
        font-size: 14px;
        font-family: 'Roboto Condensed', sans-serif;
        color: #626262;
        font-weight: 300;
    }
`
export const Category = styled.div`
    h4{
        font-size: 16px;
        font-family: 'Roboto Condensed', sans-serif;
        color: #bcbdbd;
        font-weight: 500;
        margin: 5px 0;
    }
`