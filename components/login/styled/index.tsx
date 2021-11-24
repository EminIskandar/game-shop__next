import styled from "styled-components"; 
import key from 'img/icon/key.svg'
import email from 'img/icon/email.svg'
 
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
export const SocialMedia = styled.div`
    text-align: center;
`
export const SocialMediaTitle = styled.div`
    h2{
        font-size: 26px;
        margin-bottom: 5px;
    }
    h4{
        font-size: 14px;
        font-weight: 300;
        color: #7d7f7f;
    }
`
export const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    div{
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2px;
        cursor: pointer;
    }
    svg{
        color: #000;
        width: 13px; 
    }
`
export const Or = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    position: relative;

    h4{
        font-size: 14px;
        font-weight: 300;
        color: #7d7f7f;
    }

    &::before,
    &::after{
        content:  '';
        position: absolute;
        width: 25%;
        height: 1px;
        background-color: #3e3e3e;
    }
    &::before{
        left: 0;
        transform: translateX(70%)
    }
    &::after{
        right: 0;
        transform: translateX(-70%)
    }
    
`
export const Form = styled.div`

    @media (max-width:576px){ 
        padding: 20px;
    }

`
export const FormContent = styled.form`
    div{
        padding: 0 40px;
        box-sizing: border-box;

        @media (max-width:576px){ 
            padding: 0 10px; 
        }
    }
    & div:nth-child(1){ 
        position: relative;
    } 

    & div:nth-child(1)::after{
        content: '';
        position: absolute;
        width: 22px;
        height: 22px;
        bottom: 0;
        left: 0;
        background-size: 22px;
        background-image: url(${key.src});
        transform: translate(54px, -30px) rotate( 45deg );
    }
    & div:nth-child(1)::before{
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        top: 0; 
        background-size: 25px;
        background-image: url(${email.src});
        transform: translate(12px, 10px);
    }


    & div:nth-child(2){
        display: flex;
        flex-direction: column;
        text-align: end;
        color: #F47B25;
    }

    & div:nth-child(2) p{
        font-size: 11px;
        font-weight: 300;
        text-decoration: underline;
        margin: 5px 0;
        cursor: pointer;
    }

    & div:nth-child(3){
        margin-top: 20px;
        padding-bottom: 40px;
    }
    
    & div button {
        width: 100%;
        height: 45px;
        margin: 10px 0;
        border: none;
    }

    & div button:nth-child(1){
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        font-size: 18px;
        font-weight: 700;
    }
    
    & div button:nth-child(2){
        color: #F47B25;
        border: 2px solid  #F47B25;;
        background-color: transparent;
        font-size: 14px;
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

    &.modal--recovery::before{
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        top: 0;
        background-size: 25px;
        background-image: url(${email.src});
        transform: translate(12px, 27px);
    }
`
export const LoginModal = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 50;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalItem = styled.div`
    width: 500px;
    background-color: #222222;
    border: 1px solid rgba(255, 255, 225, 0.1);; 
    
    @media (max-width:576px){ 
        width: 90vw;
    }
`
export const ModalTitle = styled.div`
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom:  1px solid rgba(255, 255, 225, 0.1);

    h2{
        font-size: 18px;
    }

    svg {
        width: 14px;
        cursor: pointer;
    }
`
export const ModalForm = styled.div`

    position: relative;
    padding: 20px;
    box-sizing: border-box;

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

    &.modal--recovery::before{
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        top: 0;
        background-size: 25px;
        background-image: url(${email.src}); 
        transform: translate(12px, 27px);
    }

    button{
        width: 100%;
        height: 45px;
        margin: 10px 0;
        border: none;
        background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
        color: #fff;
        font-size: 18px;
        font-weight: 700;
    }

`