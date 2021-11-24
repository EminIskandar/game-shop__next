import styled, {css} from "styled-components";
 
export const Main = styled.section`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
    transform: translateY(120px); 
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeaderSection = styled.div`
    width: 300px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;

    h3{
        font-size: 28px;

        @media (max-width:576px){
            font-size: 20px;
            margin-right: 20px;
        }
    }

    @media (max-width:768px){
        width: 200px;
    }

    @media (max-width:576px){
        width: unset;
        height: unset;
        background-color:unset;
    }
`
export const HeaderDesc = styled.div`
    width: calc(100% - 350px);

    p{
        font-size: 14px;
        color: #a1a1a1;
        line-height: 20px;

        @media (max-width:576px){
            font-size: 11px;
            line-height: unset;
        }
    }

    @media (max-width:768px){
        width: calc(100% - 220px);
    }

    @media (max-width:576px){
        width: calc(100% - 120px);
        height: 40px;
        overflow: hidden;
    }
`
export const Shorting = styled.div`
    margin: 40px 0;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #222222;
`
export const ShortingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const ShortingContent = styled.div`
    display: flex;
    align-items: center;

` 
export const ShortingText = styled.div`
    h4{
        font-size: 14px;
        margin-right: 10px;
    }
` 
export const ShortingTypes = styled.div`

    select{
        background-color: #222222;
        color: #a1a1a1;
        font-size: 12px;
        padding: 5px 10px;
 
        @media (max-width:380px){
            width: 100px;
        }
    }

    & select:focus{
        outline: none;
        box-shadow: none;
    }

    option{
        padding: 5px;
    }

    
` 
export const ShortingView = styled.div`
    display: flex;
`  
export const Row = styled.div`
    cursor: pointer;
    width: 27px;
    height: 20px;
    position: relative;
    margin: 0 5px;

    ul{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    li{
        width: calc(100% / 3 - 2px);
        height: 8px;
        margin: 1px;
        background-color: #a1a1a14d;
    }

    &.active li{
        background-color: #a1a1a1!important;
    }
`  
export const Column = styled.div`
    cursor: pointer;
    width: 27px;
    height: 20px;
    position: relative;
    margin: 0 5px;

    ul{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    li{
        width: 100%;
        margin: 1px;
        height: 8px;
        background-color: #a1a1a14d;
    }

    &.active li{
        background-color: #a1a1a1!important;
    }
`  
export const FiltersAndProduct = styled.div`
    display: flex;
    position: relative;

    @media (max-width:768px){
        flex-direction: column;
    }
`  
export const Filters = styled.div`
    width: 320px;
    position: relative;
    margin-top: 40px;

    @media (max-width:996px){
        width: 250px;
    }

    @media (max-width:768px){
        width: 100%
    }
`  
export const FilterIcon= styled.div`
    color: #F47B25;
    font-size: 20px;
    margin-right: 5px;
` 
export const FilterGenres = styled.div`
    margin-bottom: 40px;
`  
export const FilterPlatform = styled.div`
    margin-bottom: 40px;
`  
export const FilterRegion = styled.div`
    margin-bottom: 40px;
`  
export const FilterList = styled.div` 
    & ul::-webkit-scrollbar{ 
        display: block!important;
        width: 6px;
    }

    & ul::-webkit-scrollbar-track {
        background:#ffb37c ; 
    }

    & ul::-webkit-scrollbar-thumb {
        background-color: #F47B25 ; 
    }

    ul{
        padding: 10px 0;
        max-height: 100px;
        overflow-y: scroll;
    }

    li{
        margin: 5px 0;
        display: flex; 
    }

    & li h6{
        font-size: 12px;
        color: #a1a1a1;
        font-weight: 300; 
    }
` 
export const FilterPrice = styled.div`

    & ${FilterList}{
        display: block; 
    }

    & ${FilterList} ul{
        overflow: hidden;
    }
`  
export const FilterReset = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;

    & div:nth-child(1){ 
        color: #F47B25;
        font-size: 20px;
        margin-right: 5px;
    } 
    & div:nth-child(2) h3{
        color: #F47B25;
        font-size: 16px;
        font-weight: 300;
    }
`   
export const Products = styled.div`
    padding-left:20px;
    box-sizing: border-box;
    width: calc(100% - 320px);

    @media (max-width:768px){
        padding: 0 ;  
    }
    table,
    thead,
    tbody,
    th{
        width: 100%;
        position: relative;
        display: block;
    }

    thead{
        padding: 10px 0;
    }

    table th{ 
        font-size: 11px;
        color: #a1a1a1;
        font-weight: 300; 
        width: 18%;
        display: inline-block;
    }

    table th:first-child{
        width: 44%;
    }

    td{
        margin: 5px 0;
    }

    @media (max-width:996px){
        width: calc(100% - 250px);
    }

    @media (max-width:768px){
        margin-top: 40px;
        width: 100%
    }

    ${  (props) =>

        (props.theme === 'column' &&
        css`
                td{
                    width: 100%;
                    position: relative;
                    display: block;
                }
                tr{
                    width: 100%;
                    position: relative;
                    display: block;
                }
                thead{
                    @media (max-width:768px){ 
                        display: none;
                    }
                }
               
        `) 

        ||

        (props.theme === 'row' &&
        css`
            tbody{
                display: flex;
            }
            tr{
                width: 100%;
            }
            th{
                display: none!important;
            }
            td{
                display: inline-block; 
                width: calc(100% / 4 - 20px);
                overflow: hidden;
                background: linear-gradient( 0deg,#434343,#272727);
                align-self: inherit;
                margin: 8px;
                box-shadow: 0px 0px 20px 0px #000000;

                @media (max-width:1200px){
                    width: calc(100% / 2 - 20px);
                }
                @media (max-width:480px){ 
                    width: 100%
                }
            }
        `)
        }
`   
export const ProductsBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    button{
        border: 1px solid #F47B25;
        color: #F47B25;
        font-size: 18px;
        font-weight: 500;
        padding: 10px 50px;
        background-color: transparent; 
    }
`   