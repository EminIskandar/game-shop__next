import styled from "styled-components";  
export const Main = styled.main`
`
export const Content = styled.section`
    width: 100vw; 
`
export const Title = styled.div`
    background-color: #2A2A2A;

    h2{
        width: 100vw;
        max-width: 1400px;
        margin: 0 auto;
        font-size: 36px;
        font-family: 'Roboto Condensed', sans-serif;
        padding: 20px; 
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
    }
`
export const Breadcumbs = styled.div`
     background-color: #F2F2F2; 
`
export const BreadcumbsItems = styled.div`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    padding:  10px 20px; 
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
export const BreadcumbsItem = styled.div`
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;

    &:nth-child(1) h4{
        color: #bcbdbd;
        font-weight: 300;
        margin-right: 5px;
    }
    &:nth-child(2) h4{
        color: #626262;
        font-weight: 700;
    }
`
export const Articles = styled.div`
    background-color: #fff;
`
export const ArticleContent = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative; 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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

    @media (max-width:576px){ 
        flex-direction: column;
    }
`
export const Article = styled.a`
    width: calc(100% / 2 - 15px);
    position: relative;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto Condensed', sans-serif;
    overflow: hidden;
    margin: 10px 0;

    @media (max-width:576px){ 
        width: 100%;
    }

    @media (max-width:480px){ 
        flex-direction: column;
    }
`
export const Img = styled.div`
    width: 48.5%;
    overflow: hidden;

    img{
        width: 100%; 
    }
    @media (max-width:480px){ 
        width: 100%;
    }
`
export const Text = styled.div`
     width: 48.5%;

    @media (max-width:480px){ 
        width: 100%;
        padding: 10px 0;
    }
`
export const TextTitle = styled.div`
    h4 {
        font-size: 16px;
        color: #515050;
    }
`
export const TextDesc = styled.div`
    p {
        font-size: 14px;
        color: #8d8d8d;
        margin-top: 5px;
    }
`
export const TextDate = styled.div`
    display: flex;
    margin-top: 15px;

    h5{
        font-size: 12px;
        color: #b7b7b7;
    }

    & h5:nth-child(1){
        font-weight: 500;
        margin-right: 5px;
    }
    & h5:nth-child(2){
        font-weight: 300;
    }
`