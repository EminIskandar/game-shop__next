import styled from 'styled-components'

export const Section = styled.section`
    width: 100vw;
    max-width: 1400px;
    margin: 40px auto 0; 
    position: relative;
   
`
export const Content = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    position: relative;
    @media (max-width:996px){  
        width: 96%; 
    }
    @media (max-width:576px){ 
        display: none; 
    }
`
export const Header = styled.div`
    text-align: center;

    & h2{
        font-size: 24px;
    }

    &  span{
        font-weight: 400;
    }

    & a{
        font-size: 14px;
        color: #F47B25;
        cursor: pointer;
    }

    & a:hover{
        text-decoration: underline;
    }
`
export const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content:center;
        width: 90%;
    }
`
export const Item = styled.div`
    width: 12.66%;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h4{
        font-size: 14px;
        color: #a0a0a0;
        font-weight: 400;
    }

    & img:nth-child(2){
        display: none;
    }

    &.hover { 
        & img:nth-child(1){
            display: none;
        }

        & img:nth-child(2){
            display: block;
        }
    }

    @media (max-width:768px){
        width: 25%;
    }
`