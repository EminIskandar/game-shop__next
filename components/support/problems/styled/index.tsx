import styled from "styled-components"; 

export const Section = styled.section`
    width: 100vw;
    max-width: 1200px;
    margin: 40px auto;
    position: relative; 
`
export const Content = styled.div`
` 
export const Sections = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
` 
export const SectionsItem = styled.div`
    width: 20%; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a1a1a160;
    cursor: pointer;

    svg{
        margin-right: 10px;
        width: 24px;

        @media (max-width:576px){
            font-size: 15px;
        }
    }

    h2{
        font-size: 24px;

        @media (max-width:576px){
            font-size: 15px;
        }
    } 

    &.active{
        color:#fff!important;
    }

    @media (max-width:768px){ 
        width: 33.33%;
    }
` 
export const Questions = styled.div`
    background-color: #1f1f1f;
    padding: 40px 40px 10px;
    box-sizing: border-box;
    margin-top: 40px;

    @media (max-width:576px){
        padding: 20px 20px 10px;
    }
` 
export const QuestionsItems = styled.div`
`
export const Title = styled.div`
    h2{
        font-size: 16px;
        color: #a1a1a160;
        font-weight: 300;
    }
` 
export const Items = styled.div`
` 
export const Item = styled.div`
` 
export const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid #a1a1a11f;
    cursor: pointer;
` 
export const ItemName = styled.div`
    h2{
        font-size: 16px;
        font-weight: 400;
        word-break: break-all; 

        @media (max-width:768px){
            width: 90%;
        }

        @media (max-width:576px){
            font-size: 14px; 
            width: 80%;
        }
    }
    
` 
export const ItemNumb = styled.div`
    display: flex;
    align-items: center;

    &::after{
        content: '';
        position: absolute; 
        width: 7px;
        height: 7px;
        border-top: 2px solid #F47B25;
        border-right: 2px solid #F47B25;
        transform: rotate(45deg) translate(50px,-50px); 
    }

    svg{
        width: 20px;
        margin-right: 10px;
        color: #F47B25;
    }

    h5{
        font-size: 16px;
        font-weight: 400;
    }
` 
export const ItemContent = styled.div`
    background-color: #252627;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    justify-content: space-between;

    @media (max-width:1200px){ 
        flex-direction: column;
    }

    @media (max-width:576px){
        padding: 20px;
    }
` 
export const ItemLeft = styled.div`
    width: 625px;

    @media (max-width:768px){ 
        width: 100%;
    }
` 
export const ItemText = styled.div`
    div{
        margin-bottom: 20px;
    }

    p,
    h4{
        font-size: 16px;
        font-weight: 400;
        color: #e3e3e3;

        @media (max-width:576px){
            font-size: 14px; 
        }
    }

    p{
        margin: 10px 0;
    }

    li{
        list-style-type: disc;
        margin-left: 40px;
    }
   
` 
export const ItemLink = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;

    h4{
        font-size: 16px;
        color: #a1a1a1;
        margin-right: 10px;
    }

    input{
        height: 50px;
        border:none;
        width: 85%;
        padding: 0 0 0 15px;
        background-color: #323334;
        font-size: 16px;
        color:#a1a1a1;
    }

    button{
        width: 50px;
        height: 50px;
        border: none;
        background-color: #45494A;
        font-size: 22px;
        color: #fff;
        cursor: pointer;
    }
` 
export const ItemRight = styled.div`
    @media (max-width:1200px){ 
        margin-top: 40px;
    }   
` 
export const ItemSurveyTitle = styled.div`
    h2{
        font-size: 18px;  
    }
` 
export const ItemSurveyBtn = styled.div`
    margin-top: 20px;

    button{
        font-size: 18px;
        padding: 5px 50px;
        border: 2px solid #F47B25;;
        color:#F47B25;
        background-color: transparent; 
        margin: 0 5px;

        @media (max-width:576px){
            width: 45%;
            padding: 5px 0;
        }
    }
` 
export const ItemSurvey = styled.div`
    padding: 20px;
    border: 1px solid #3b3b3b;; 
    text-align: center;

    &:nth-child(1){
        margin-bottom: 20px;
    }
    &:nth-child(2)  ${ItemSurveyBtn} button{
        width: 270px;

        @media (max-width:576px){
            width: 90%;
        }
    }

    @media (max-width:1200px){ 
        width: 300px;
    }

    @media (max-width:768px){ 
        width: auto;
    }
` 