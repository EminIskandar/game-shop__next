import styled from 'styled-components'

export const Section = styled.section`
    width: 100vw;
    max-width: 1400px;
    margin: 40px auto 0; 

    & span{
        color: #F47B25; 
    }

    &   h3{
        font-size: 20px;

        @media screen and (max-width:996px){ 
            font-size: 17px;
        }
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width:768px){ 
        flex-direction: column; 
    }
`
export const Header = styled(Content)`
    width: 50%;
    @media (max-width:996px){
        width: 75%;
    }
    @media (max-width:576px){
        display: none;
    }
`
export const Img = styled.div``

export const Text = styled.div``

export const PriceAndBtn = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width:1200px){ 
        flex-direction: column;
        align-items: flex-end;
    }

    @media (max-width:996px){
        width: 25%;
    }

    @media (max-width:576px){
        width: 100%;
        align-items: center;
    }
`
export const Price = styled.div`
    margin-right: 15%;

    @media (max-width:1200px){ 
        margin-right: 0%;
    }
    @media (max-width:576px){
        display: none;
    }
`
export const Btn = styled.button`
    display: flex;
    align-items: center;
    background-color:#F47B25;
    border: none;
    color: #fff;
    height: 45px;

    & i{
        font-size: 20px;
        width: 45px;
        border-right: 2px solid #ae591c85;
        height: 45px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &   h3{
        padding: 0 10px;
    }

    @media (max-width:996px){
        display: none;
    }
    @media (max-width:576px){
        display: flex;
    }
`