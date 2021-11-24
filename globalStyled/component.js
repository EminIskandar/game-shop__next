import styled , {css }from 'styled-components';
import bg from 'img/background/login-bg.svg'

export const Main = styled.main`
    transform: translateY(120px);
    padding: 0;
`
export const BlogMain = styled.main`
    transform: none!important;
    margin: 0;
    width: 100vw;
    max-width:100vw;
`
export const LoginMain = styled(Main)`
        width: 100vw;
        height: 820px;
        background-color: #1E1E1E;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before{
            content: '';
            position: absolute;
            background-image: url(${bg.src}); 
            background-position: 50%;
            background-size: 100vw auto; 
            background-repeat: no-repeat;
            width: 100%;
            height: 820px;
            z-index: -1;

            @media (max-width:576px){ 
                background: none;
            }
        } 

        @media (max-width:576px){ 
            padding: 0 20px;
            box-sizing: border-box;
        }
` 