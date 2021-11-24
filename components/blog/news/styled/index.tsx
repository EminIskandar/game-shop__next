import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    background-color: #fff; 
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;

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
`
export const Title = styled.div`
    h2{
        color: #000;
        font-size: 24px;
        font-family: 'Roboto Condensed', sans-serif;
    }
`
export const Sections = styled.div`
    display: flex;
    margin-top: 20px;
`
export const SectionItem = styled.div`
    padding: 10px ;

    a{
        color: #a1a1a1;
        font-weight: 400;
        font-family: 'Roboto Condensed', sans-serif;
    }
    & a .active{
        border: none!important;
        color: #000; 
    }
    .active{
        border-bottom: 2px solid #F47B25;
    }
`
export const Articles = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width:576px){ 
       flex-direction: column;
    }
`
export const Article = styled.a`
    position: relative;
    width: calc(100% / 2 - 5px); 

    @media (max-width:576px){ 
        width: 100%; 
        margin: 5px 0;
    }
`
export const Image = styled.div`
    overflow: hidden; 
    background-color: #1f1f1f;

    img{
        width: 100%;
    }
`
export const Info = styled.div`
    width: 100%; 
    background-color: #1f1f1f;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width:996px){ 
        height: 130px;
    }
`
export const Date = styled.div`

    h3{
        font-size: 14px;
        color: #fff;
        font-weight: 400;
    }

    time{
        font-size: 14px; 
        color: #a1a1a1;
        font-weight: 400;
    }
`
export const Name = styled.div`
    h2{
        font-size: 16px;
        font-family: 'Roboto Condensed', sans-serif;
        color: #F47B25;
        margin-top: 10px;
    } 

    
`