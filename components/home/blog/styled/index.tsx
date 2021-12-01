import styled from 'styled-components' 

export const Section = styled.section`
    width: 100vw; 
    max-width: 1400px;
    margin: 40px auto;
    position: relative;  
`
export const Content = styled.div``

export const Header = styled.div`
     text-align: center;
    & span{
        font-weight: 300;
    }
    &  a{
        font-size: 14px;
        color: #F47B25;
        cursor: pointer;
    }
`
export const Img = styled.div`
    width: 47.5%;
    height: 150px; 
    position: relative;

    &  img{
        width: 100%; 
    }

    @media (max-width:768px){ 
        width: 100%;
        height: 45vw;
    }
`
export const Text = styled.div`
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 53.5%;

    & h2{
        font-size: 16px;
        color: #fff;

        @media (max-width:996px){ 
            font-size: 14px;
        }

        @media (max-width:768px){ 
            font-size: 16px;
        }

        @media (max-width:576px){ 
            font-size: 14px;
        }

    }

    & p,
    & h4{
        font-size: 13px;
        font-weight: 400;
        color: #a0a0a0;

        @media (max-width:996px){ 
            font-size: 12px;
        }

        @media (max-width:768px){ 
            font-size: 14px;
        }

        @media (max-width:576px){ 
            font-size: 12px;
        }
    }

    @media (max-width:768px){ 
        width: 80%;
        height: 130px;
        padding: 30px 30px 0;
    }
`
export const Title = styled.div``

export const Description = styled.div``

export const Date = styled.div``

export const Item = styled.a`
    width: 50%;
    height: 150px;
    display: flex;
    position: relative;
    margin: 15px 0;

    @media (max-width:768px){ 
        width: 100%;
        height: calc(45vw + 130px);
        flex-direction: column;
    }
    &:nth-child(n+2){
        @media (max-width:576px){ 
            display: none;
        }
    }
    
`
export const Items = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
`