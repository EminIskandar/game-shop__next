import styled from "styled-components";
export const FilterTitle = styled.div`
    h4{
        font-size: 14px;
    }
`  
export const FilterContent = styled.div`
`
export const FilterSelect = styled.div`
    width: 100%;
    border-bottom: 1px solid #F47B25;
    padding: 10px 0;
    position: relative;
    cursor: pointer;

    &::after{
        content: '';
        position: absolute;
        right: 0;
        width: 5px;
        height: 5px;
        border-bottom: 2px solid #F47B25;
        border-right: 2px solid #F47B25;
        transform: rotate( 45deg ) translate(-10px, -1px);;
    }
` 
export const FilterText = styled.div`
    h6{
        font-size: 12px;
        color: #a1a1a1;
        font-weight: 300;
    }

    h3{
        color: #F47B25;
        font-size: 16px;
        font-weight: 300;
    }
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
export const FilterCheckbox= styled.div`
    display: flex; 
    width: 15px;
    height: 15px;
    position: relative;
    margin-right: 5px;

    input[type="checkbox"]{
        width: 9px !important;
        height: 9px !important;
        border: none;
        outline: none;
        position: absolute; 
        cursor: pointer;
        z-index: 10;
    }
    
    input[type="checkbox"]:focus{
        border: 2px solid #F47B25;
    }

    input[type="checkbox"]:not(:checked) ~ .filter-label:after{
        border: 2px solid #F47B25;
    }

    input[type="checkbox"]:not(:checked),
    input[type="checkbox"]:checked{
        opacity: 0.01;
    }

    input[type="checkbox"]:checked ~ .filter-label:before{
        background-color:#F47B25;
    }

    input[type="checkbox"]:checked ~ .filter-label:after{ 
        opacity: 1;
    } 

    .filter-label{
        position: relative;
        font-weight: 500;  
        font-size: 17px;
        color:rgba(0,0,0,0.5);
    }

    .filter-label:before{
        content: '';
        width: 9px;
        height: 9px;
        position: absolute;
        border: 2px solid #F47B25;
        transform: translate(0px,0px);
    }
    .filter-label:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 5px;
        height: 3px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: translate(3px,2px) rotate( -59deg );
        opacity: 0;
    }
` 
export const FilterType = styled.div`
    margin-bottom: 40px;
`  