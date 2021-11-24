import styled, { keyframes } from 'styled-components'

const imgFadeEffect = keyframes`
    0%{opacity:  0}  
    100%{opacity: 1}
` 
export const Section = styled.section`
    width: 100vw;  
    position: relative; 
`
export const Content = styled.div`
    width: 100%;
    height: 500px;
    display: flex; 
    align-items: center;
    overflow: hidden;
    position: relative;
    flex-direction: column;

    @media  (max-width:1400px){
        height: 32.5vw;
    }
`
export const Item = styled.div`
    width: 1400px;
    height: 100%;
    overflow: hidden;
    position: relative;

    & img{
        width: auto;
        height: 100%;
        position: absolute;
        top: 0;

        @media  (max-width:1400px){
            width: 100%;
            height: auto; 
        }

    }
    & img:first-child{  z-index: 5; }
    & img:last-child{ z-index: 3; }
    & img.fade{
        animation: ${imgFadeEffect} 1s ease forwards;
    }

    @media  (max-width:1400px){
        width: 100vw;
    }
 
`
export const Items = styled.div`
    display: flex;
    width: auto;  
    position: absolute;
    height: 470px;
    overflow: hidden;

    & ${Item}:nth-child(1) img{ filter: opacity(0.3); }
    & ${Item}:nth-child(3) img{ filter: opacity(0.3); }

    @media  (max-width:1400px){
        height: 29.33vw;
    }

`
export const Image = styled.img``

export const NavsBtns = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0; 

    @media  (max-width:576px){
        display: none
    }

`
export const NavsBtnsItem = styled.div`
    width: 60px;
    height: 2px;
    background-color: #a0a0a0;;
    margin-right: 5px;
    cursor: pointer;

    &.nav--active{
        background-color: #F47B25;
        height: 4px;
    }
`