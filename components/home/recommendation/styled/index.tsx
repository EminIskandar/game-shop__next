import styled from 'styled-components' 
import { css } from 'styled-components' 
import icon from 'img/other/deal-of-the-day.webp'

export const Section = styled.section`
    width: 100vw;
    max-width: 1400px;
    margin: 40px auto 0; 

    @media (max-width:480px){
        margin: 20px auto 0;
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between; 
    position: relative;

    & a{
        color: #fff;
    }

    @media (max-width:768px){
        flex-direction: column;
        align-items: center;
    }
`
export const ItemText = styled.div`
    & h2{
        font-size: 28px;
    }

    & h2 span{
        color: #F47B25;
    }

    & h4{
        font-size: 14px;
        font-weight: 400;
        color: #a0a0a0;;
    }
`
export const ItemImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`
export const Image = styled.img`
`
export const Info = styled.div`

${  (props) =>

    (props.theme === 'theme1' &&
    css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        visibility: hidden;    
    `) 

    ||

    (props.theme === 'theme2' &&
    css`
        width: 100%;
        height: 150px;
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
    `)
}

    &:after{
        content:  ${ props => props.theme === 'theme1' ? "''" :'unset'};
        position: absolute;
        width: 3px;
        height: 60%; 
        background-color: #F47B25; 
    }

`
export const Title = styled.div`
    padding-left: ${ props => props.theme === 'theme1' ? '10px' :'0'};
    @media (max-width:768px){
        font-size: 18px;
    }
 
`
export const Price = styled.div`
    width: ${ props => props.theme === 'theme1' ? 'auto' :'100%'};
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-left: ${ props => props.theme === 'theme1' ? '10px' :'0'};

    & h4{
        font-weight: 700;
        font-size: 18px;
        @media  (max-width:996px){
            font-size: 13px;
        }
        @media (max-width:768px){
            font-size: 18px;
        }
     }  
    & span{
        color: #F47B25;
        margin-right: 5px;
    }

    & button{
        width: 100px;
        height: 40px;
        background-color: #F47B25;
        border:none;
        color:#fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;

        @media  (max-width:996px){
            font-size: 13px;
            width: 75px;
            height: 35px;
        }
        @media (max-width:850px){
            width: 50px;
            height: 30px;
            font-size: 11px;
        }
        @media (max-width:768px){
            width: 100px;
            height: 40px; 
            font-size: 15px; 
        }
    }
`
export const Item = styled.div`
    width: 345px;
    height: 160px;
    position: relative;
    overflow: hidden;
    background-color: #1F2123;
    cursor: pointer; 
`
export const ItemLink = styled.a`
    width: 345px;
    height: ${ props => props.theme === 'theme1' ? '160px' :'450px'};
    position: relative;
    overflow: hidden; 
    background-color: #1F2123; 
    cursor: pointer;

    &:hover ${ItemImage} ${Image}{
        filter: opacity(0.3);
    }

    & ${ItemImage} ${Image}{
        width:  ${ props => props.theme === 'theme1' ? '100%' :'auto'};
        filter: opacity(1);
        transition: filter .5s ease;
        @media (max-width:768px){
            width: 100%;
            height: auto;
        }
        @media (max-width:480px){
            width: 100%;
            height: 100%;
        }
    }

    &:hover ${Info}{
        visibility: visible; 
    }

    &.deal-of-the-day::after{
        content: '';
        position: absolute;
        background-image: url(${icon.src});
        top: 0;
        width: 270px;
        height: 177px;
        background-repeat: no-repeat;
        right: -5px;

        @media (max-width:1400px){
            background-size: 15vw auto;
            background-position-x: right;
            right: 0;
        }
        @media (max-width:768px){
            background-size: unset;
            background-position-x: unset;
            right: 0;
        }
    }

    ${  (props) =>

        (props.theme === 'theme1' &&
        css`
            @media (max-width:1400px){
                width: 100%;
            }

            & img{
                @media (max-width:1400px){
                    width: auto;
                    height: 100%;
                }
            
            }
        `) 

        ||

        (props.theme === 'theme2' &&
        css`
            @media (max-width:1400px){
                width: calc(100% / 4 - 7px);
            }
            @media (max-width:768px){
                width: 90%;
                margin: 5px 0;
            }
        `)
    }

`
export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
    overflow: hidden;

    & ${Item}:nth-child(1){
        height: 120px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    } 

    @media (max-width:1400px){
        width: calc(100% / 4 - 7px);
    }
    @media (max-width:768px){
        width: 90%;
    }
` 