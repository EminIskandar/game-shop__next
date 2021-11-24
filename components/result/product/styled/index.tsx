import styled from "styled-components"; 
import  { css } from "styled-components"; 

export const ImageAndName = styled.div``
export const Image = styled.div``
export const Name = styled.div``
export const Platform = styled.div``
export const Price = styled.div``
export const CurrentPrice = styled.div``
export const DiscountPrice = styled.div``
export const Present = styled.div``
export const Discount = styled.div``
export const Btn = styled.div``
export const Product = styled.a`

    svg{
        width: 20px;
    }
    ${  (props) =>

    (props.theme === 'row' &&  css` 
            width: 100%;
            height: 250px;
            display: block;
            position: relative;

            @media (max-width:480px){
                height: 240px;
            }

            @media (max-width:1200px){
                height: 300px;
            }

            & ${Image}{
                width: 100%;
                position: relative;
                height: 120px; 
                overflow: hidden;

                @media (max-width:1200px){
                    height: 140px;
                    display: flex;
                    align-items: center;
                }

                @media (max-width:576px){
                    font-size: 10px;
                }

            }
            & ${Image} img {
                width: 100%;
            }

            & ${Name} h3{ 
                color: #fff;
                text-align: center;
                font-size: 14px;
                margin-top: 10px; 

                @media (max-width:1200px){
                    padding: 0 20px;
                    box-sizing: border-box;
                }

                @media (max-width:576px){
                    padding: 0 10px; 
                }

                @media (max-width:480px){
                    font-size: 12px;
                }
            } 

            & ${Platform}{
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 18px;
                color: #fff;
            }

            & ${Price}{
                position: absolute;
                left: 10px;
                bottom: 10px;

                @media (max-width:1200px){
                    padding: 0 20px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    align-items: center;
                    bottom: 60px;
                    left: 0;
                }

                @media (max-width:576px){
                    padding: 0 10px; 
                }

                @media (max-width:576px){
                    bottom: 50px;  
                }
            }
 
            & ${Price} p{
                font-size: 20px;
                color: #F47B25;
                font-weight: 600;
                transform: translateY(-3px);
            }
            & ${CurrentPrice} span {
                font-size: 11px;
                color: #a1a1a1;
                font-weight: 300; 
            }

            & ${CurrentPrice} p{
                font-size: 20px;
                color: #F47B25;
                font-weight: 600;
                transform: translateY(-3px);

                @media (max-width:576px){
                    font-size: 14px;
                }
            }

            & ${DiscountPrice} {
                display: flex;
            }

            & ${DiscountPrice} p {
                padding: 5px;
                font-size: 13px;

                @media (max-width:576px){
                    font-size: 10px;
                }

            }

            & ${Discount} {
                background-color: #fff; 
            }
            & ${Discount} p{ 
                font-weight: 400;
                color: #a1a1a1;
                text-decoration: line-through;
                transform: unset;
            }
            & ${Present} {
                background-color: #F05021;
            }
            & ${Present} p{
                font-weight: 400;
                color: #fff;
                transform: unset;
            }
            & ${Btn} {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 10px;
                bottom: 10px;

                @media (max-width:1200px){
                    padding: 0 20px;
                    box-sizing: border-box;
                    width: 100% ;
                    left: 0;
                    right: unset;
                    bottom: 20px;
                }

                @media (max-width:576px){
                    padding: 0 10px; 
                    bottom: 10px;
                }
            }
            & ${Btn} button {
                border: none;
                color: #fff;
                font-size: 11px;
                font-weight: 900;
                padding: 8px 10px;
                background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
            
                @media (max-width:1200px){
                    width: 100%; 
                }
                
            }
        `) 

    ||

    (props.theme === 'column' && css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient( 180deg ,#434343,#272727);
            padding: 10px 20px;
            box-sizing: border-box;
            cursor: pointer;
            color: #fff;
            
            @media (max-width:768px){
                flex-direction: column;
            }

            @media (max-width:768px){
                padding: 0;
                height: 100px;
            }

            & ${ImageAndName}{

                display: flex;
                align-items: center;
                width: 45%;

                @media (max-width:768px){
                    align-self: flex-start;
                    align-items: unset;
                    width: 100%;
                }

            }

            & ${Image}{
                width: 170px;
                height: 85px;
                position: relative;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center; 

                @media (max-width:1200px){
                    width: 100px;
                }

                @media (max-width:996px){
                    display: none;
                }

                @media (max-width:768px){
                    display: flex;
                    height: 75px;
                }

                @media (max-width:768px){ 
                    width: 120px;
                    height: 100%;
                }

                @media (max-width:480px){
                    width: 100px;
                }

                @media (max-width:380px){
                    width: 80px;
                    height: 80px;
                }
            }

            & ${Image} img {
                width: 100%;

                @media (max-width:768px){
                    height: 100px;
                }
                @media (max-width:380px){ 
                    height: 80px;
                }
            }

            & ${Name}{

                width: calc(100% - 170px);
                padding-left: 20px;
                box-sizing: border-box;

                @media (max-width:1200px){
                    width: calc(100% - 100px);
                }

                @media (max-width:996px){
                    width: 100%;
                    padding-left: 0px;
                }

                @media (max-width:768px){
                    width: calc(100% - 100px);
                    padding: 15px;
                }

                @media (max-width:380px){ 
                    width: calc(100% - 80px);
                    padding: 10px;
                }
            }

            & ${Name} h3{   

                @media (max-width:1200px){
                    font-size: 16px;
                }

                @media (max-width:480px){
                    font-size: 12px;
                    height: 40px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: pre;
                }
            } 

            & ${Platform}{
                width: 18%;
                text-align: center;
                font-size: 27px;
                color: #a1a1a1;

                @media (max-width:768px){
                    display: none;
                }
            }

            & ${Price}{
                width: 18%;

                @media (max-width:768px){
                   position: absolute;
                    bottom: 15px;
                    left: 136px;
                }

                @media (max-width:480px){
                    left: 118px;
                }

                @media (max-width:380px){ 
                    left: 92px;
                }
            } 

            & ${CurrentPrice} {
                position: relative;
                left: 35%;

                @media (max-width:1200px){
                    position: relative;
                    left: 0%; 
                }

                @media (max-width:768px){
                    display: flex;
                }

            }

            & ${CurrentPrice} p{
                font-size: 20px;
                color: #F47B25;
                font-weight: 600;
                transform: translateY(-3px);
 
                @media (max-width:996px){
                    font-size: 16px;
                }

                @media (max-width:480px){
                    font-size: 14px;
                }
            }

            & ${CurrentPrice} span{
                font-size: 11px;
                color: #a1a1a1;
                font-weight: 300; 

                @media (max-width:768px){ 
                   margin-right: 3px;
                }
            }

            & ${DiscountPrice} {
                position: relative;
                left: 35%;
                display: flex;
                
                @media (max-width:1200px){
                    left: 0;
                }
            }

            & ${DiscountPrice} p {
                padding: 5px;
                font-size: 13px;

                @media (max-width:996px){
                    font-size: 11px;
                    padding: 3px;
                }

                @media (max-width:480px){
                    font-size: 10px;
                }
            }

            & ${Present} {
                background-color: #F05021;
            }

            & ${Discount} {
                background-color: #fff;
                color: #a1a1a1;
                text-decoration: line-through;
            }
            & ${Btn} {
                width: 18%;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width:768px){
                    align-self: flex-end;
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                }
                
            }
            & ${Btn} button {
                border: none;
                color: #fff;
                font-size: 12px;
                font-weight: 900;
                padding: 10px 20px ;
                background: linear-gradient(rgb(243, 123, 37), rgb(239, 79, 35));
               
                @media (max-width:996px){
                    font-size: 11px;
                    padding: 10px;
                }

                @media (max-width:768px){ 
                    padding: 0;
                    width: 80px;
                    height: 30px;
                    font-size: 10px;
                }

                @media (max-width:380px){
                    font-size: 9px;
                    width: 45px;
                }
            }
        `)
    }
`
