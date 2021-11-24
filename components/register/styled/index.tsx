import styled from "styled-components";
import icon from 'img/icon/email.svg'

export const Content = styled.section`
    width: 500px;
    background-color: #222222;
    border: 1px solid rgba(255, 255, 225, 0.1);;
`
export const Icon = styled.div`
    width: 75px;
    height: 75px;
    background-color: #fff;
    border-radius: 100%;
    position: relative;
    left: 50%;
    transform: translate(-50%,-50%);

    &::before{
        content: '';
        position: absolute;
        width: 65px;
        height: 65px;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        border-radius: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-51%,-49%);
    }

    svg{
        width: 28px;
        position: relative;
        z-index: 5;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`
export const Title = styled.div`
    text-align: center;
    h2{
        font-size: 30px; 
        font-weight: 400;
    } 

        
    @media (max-width:576px){  
        padding: 20px;  
    }
`
export const Form = styled.div`
    padding: 40px;
    box-sizing: border-box;
    position: relative;

    
    @media (max-width:576px){  
            padding: 20px;  
    }
`
export const FormContent = styled.form`

    input[type="checkbox"]{
        width: 15px !important;
        height: 15px !important;
        border: none;
        outline: none;
        position: absolute;
        cursor: pointer;
        z-index: 10;
    }

    input[type="checkbox"]:not(:checked) ~ .label:after{
        border: 2px solid #F47B25;
    }
 

    input[type="checkbox"]:not(:checked),
    input[type="checkbox"]:checked{
        opacity: 0.01;
    }
    input[type="checkbox"]:checked ~ .label:before{
        background-color:#F47B25;
    }
 
` 
export const Input = styled.div` 
        position: relative;
 
        &::before {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            top: 0;
            background-size: 25px;
            background-image: url(${icon.src});
            transform: translate(12px, 7px);
        }

        input{
            width: 100%;
            height: 41px;
            margin-bottom: 20px;
            background-color: #222222;
            border: none;
            border-bottom: 1px solid #3e3e3e;
            padding-left: 50px;
            box-sizing: border-box;
            color: #fff;
            font-size: 14px;
        }
`
export const Radio = styled.div`  
    label{
        font-size: 12px;
        color: #7d7f7f;
        margin-left: 30px;
        position: relative;
        font-weight: 500;  
    }
    label:before{
        content: '';
        width: 15px;
        height: 15px;
        position: absolute;
        border: 2px solid #F47B25;
        transform: translate(-31px, -2px);
    }

    span{
        color: #F47B25;
    }
    .radio-item{
        display: flex;
        margin: 10px ;
    }
`
export const Btn = styled.div` 
        margin-top: 20px; 

    button{
        width: 100%;
        height: 45px;
        margin: 10px 0;
        border: none;
    }

    button:nth-child(1) {
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        font-size: 18px;
        font-weight: 700;
    } 

    button:nth-child(2) {
        color: #F47B25;
        border: 2px solid  #F47B25;;
        background-color: transparent;
        font-size: 14px;
    } 
`
