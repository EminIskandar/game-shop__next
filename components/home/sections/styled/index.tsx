import styled  from 'styled-components' 

export const Section = styled.section`
    width: 100vw;
    max-width: 1400px;
    margin: 40px auto 0;
    position: relative; 
`
export const Content = styled.div``

export const Pc = styled.div`

    @media  (max-width:630px){
        display: none;
    }
`

export const Mobile = styled.div`
    display: none;
    width: 100%;
    position: relative;
    padding:  0 20px;
    box-sizing: border-box;

    @media  (max-width:630px){
        display: block;
    }
`
export const MobileContent = styled.div`
    & a{ 
        color:#fff;
    } 
`
export const MobileTitles = styled.div`
    width: 100%;
    display: flex;

    &.active{
        border-bottom: 4px solid #F47B25;
    }
`
export const MobileTitleItem = styled.div`
    height: 30px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &  h3{
        font-size: 14px; 
        cursor: pointer;
    }

    &.active h3{ 
        color: #F47B25!important; 
    }
`
export const Title= styled.h3`

    font-size: 14px; 
    cursor: pointer;    
    & .active{ 
        color: #F47B25!important; 
    }
 
 
`
export const MobileItems = styled.div`
      margin-top: 20px;
`
export const MobileItem = styled.a`
    display: flex;
    height: 94px;
    margin-bottom: 10px;

    &:nth-child(n+5){

        @media(max-width:480px){ 
            display: none;
        }

    }

`
export const MobileItemImg = styled.div`
      width: 150px;
    height: 94px;
    position: relative;
    overflow: hidden;

    & img{
        width: 100%;
    }

    @media (max-width:380px){ 
        width: 130px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const MobileItemInfo = styled.div`
    width: calc(100% - 150px);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width:380px){ 
        width: calc(100% - 130px)
    }
`
export const MobileItemTitle = styled.div`
    & h4{
        font-size: 14px;
        @media(max-width:380px){ 
            font-size: 12px;
        }
    }
`
export const MobileItemPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &h4{
        font-weight: 700;
        font-size: 14px;
        @media(max-width:380px){ 
            font-size: 12px;
        }
    }

    &span{
        color: #F47B25;
        margin-right: 5px;
    }

    & button{
        width: 80px;
        height: 30px;
        background-color: #F47B25;
        border:none;
        color:#fff;
        font-weight: 700;
        font-size: 13px; 
        cursor: pointer;

        @media(max-width:380px){ 
            width: 50px;
            height: 25px;
            font-size: 9px;
        }
    }
    
    & .active h3{
        color: #F47B25;
    }
`