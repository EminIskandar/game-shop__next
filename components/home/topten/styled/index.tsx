import styled  from 'styled-components' 
 
export const Section = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 40px auto 0; 

    @media (max-width:576px){ 
        display: none;
    } 
`
export const Content = styled.div`

`
export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;

    & i{
        color: #F47B25;
        margin-right: 5px;
    }

    & h3{
        font-size: 20px;
    }
`
export const Items = styled.div`
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
`
export const Image = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;

    & img{
        width: 700px; 
        filter: opacity(1);
        top: 50%;
        transform: scale(1) translateY(-50%);
        transition: all .5s ease;
        position: absolute;
    }
`
export const Info = styled.div`
    width: 60%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    visibility: hidden; 
    color:#fff;

    &::after{
        content: '';
        position: absolute;
        width: 3px;
        height: 60%; 
        background-color: #F47B25;
        transform: translateX(-10px);
        color: #fff;
    }

    @media (max-width:996px){ 
        width: 70%
    }

    @media (max-width:768px){
        width: 90%
    }
`
export const Title = styled.div`
    & h4 {
        font-size: 18px;

        @media (max-width:996px){ 
            font-size: 15px;
        }
    }
 
`
export const Numb = styled.div`
    & h3{
        position: absolute;
        top: 0;
        transform: translate(17px,9px);
        font-size: 25px;
        z-index: 5;
        color: #fff;

        @media (max-width:768px){
            transform: translate(17px,7px);
            font-size: 20px;
        }
    }
`
export const Price = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-left: 10px;

    & h4{
        font-weight: 700;
        font-size: 18px;

        @media (max-width:768px){
            font-size: 15px;
        }

    }
    &  span{
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

        @media (max-width:768px){
            width: 80px;
            height: 35px; 
            font-size: 13px; 
        }
    }
`
export const Item = styled.a`
    width: calc(100%/2 - 5px);
    height: 160px;
    position: relative;
    overflow: hidden;
    background-color: #1F2123;
    cursor: pointer; 
    margin: 5px 0;

    &::after{
        content: '';
        position: absolute;
        width: 100px;
        height: 50px;
        top: 0;
        background-color: #F47B25;
        transform: skewX( 345deg ) translate(-47px, 0px);
        color:#fff;

        @media (max-width:768px){
            transform: skewX(  345deg ) translate(-57px, -10px);
        }
    }

    &:hover ${Image} img{
        filter: opacity(0.2);
        transform: scale(1.2) translateY(-50%);
    } 
    
    &:hover ${Info}{
        visibility: visible; 
    } 

    &:nth-child(10) ${Numb} h3{
        transform: translate(10px,9px);
    }
`