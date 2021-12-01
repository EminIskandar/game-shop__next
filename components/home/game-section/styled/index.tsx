import styled from 'styled-components'; 

export const LineItem = styled.div`
    width: 100%;
    height: 2px;
    margin: 80px 0 20px;
    background-color: #a0a0a038;
`
export const Games = styled.div`
    width: 100%;
    margin: 20px auto 0;
    position: relative; 

    & a{
        color: #fff;
    }
`
export const Content = styled.div`
     width: 100%;  
    position: relative; 
`
export const Title = styled.div`
    & h3{
        font-size: 20px;
    }
`
export const Slider = styled.div`
    width: 100%;
    height: 185px;
    overflow: hidden;  
    position: relative;
    margin-top: 20px; 
    z-index: 5;
`
export const Items = styled.div`
    display: flex;
    width: auto;
    position: absolute;
    height: 185px;
`
export const Img = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & img{
        transition: all.4s ease;
        filter: opacity(1); 
        transform: scale(1);
        width: 100%;

        @media (max-width:1400px){ 
            width: 345px;
        }

    }

    @media (max-width:1400px){ 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const NameAndBtn = styled.div`
    width: 100%;
    position: absolute;
    top: 0; 
    height: 100%; 
    display: flex;
    justify-content:  space-around; 
    flex-direction: column;
    visibility: hidden;
    padding: 20px;
    box-sizing: border-box;
`
export const Name = styled.div`
    padding: 0 20px ;
    border-left: 5px solid #F47B25;

    & h3{
        font-size: 16px;
        @media (max-width:768px){
            font-size: 14px;
        }
    }
`
export const Btn = styled.button`
    width: 100px;
    height: 40px;
    background-color: #F47B25;
    border:none;
    color:#fff;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    position: relative;
    left: 50%;
    transform: translate(-50%,-15px);

    @media (max-width:768px){  
        width: 60px;
        height: 30px;
        font-size: 9px;
    }
`
export const Price = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between; 
    padding: 20px;
    box-sizing: border-box;

    & span{
        color: #F47B25;
    }

    & h3{
        @media (max-width:768px){  
            display: flex;
            flex-direction: column;
        }
    }
`
export const Platform = styled.div`
    & i{
        font-size: 25px;
    }
`
export const Item = styled.a`
    width: 345px;
    height: 185px;
    position: relative;
    cursor: pointer;
    margin:  0 3px;
    overflow:hidden;
    transition: all .4s ease;

    &:first-child{
        margin:  0 3px 0 0 ;
    }

    &:hover ${Img} img{
        filter: opacity(0.4);
        transform: scale(1.2);
    }

    &:hover ${NameAndBtn},
    &:hover ${Price}{
        visibility: visible;
    }

    @media (max-width:1400px){ 
        width: calc(100vw/4 - 5px);
    }
`
export const Nav = styled.div`
    display: flex; 
    transform: translate(0,138px);
    position: absolute;
    top: 0;
    z-index: 5;
`
export const NavLeftBtn = styled.div`
    &::before{
         content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-bottom:3px solid  #F47B25;
        border-right:3px solid  #F47B25;
        cursor: pointer; 
        z-index: 6;

        @media screen and (max-width:1500px){ 
            left: -26px;
            top: -21px;
            border-right:1px solid  #fff;
        }
        
    }

    &::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: rgb(0 0 0 / 83%);
        transform: rotate( 45deg );
        z-index: 5;

        @media screen and (max-width:1500px){ 
            left: -29px;
            top: -23px;
        }
    }

    transform: rotate( 135deg );
`
export const NavRightBtn = styled.div`
    &::before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-bottom:3px solid  #F47B25;
        border-right:3px solid  #F47B25;
        cursor: pointer; 
        z-index: 6;
        
        @media screen and (max-width:1500px){ 
            right: 1px;
            top: -25px;
            border-bottom:1px solid  #fff;
        }
    }

    &::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: rgb(0 0 0 / 83%);
        transform: rotate( 45deg );
        z-index: 5;
        @media screen and (max-width:1500px){ 
            left: -23px;
            top: -29px;
        }
    }

    transform: rotate( -45deg );
    margin-left: 1400px;

    @media (max-width:1400px){ 
        margin-left: 100vw;
    }
`