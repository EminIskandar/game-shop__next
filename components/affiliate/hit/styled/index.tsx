import styled from "styled-components";

export const Section = styled.section`
    width: 100vw; 
    position: relative;  
    overflow: hidden; 
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px ;
    box-sizing: border-box;
`
export const Title = styled.div`
    h2{
        text-align: center;
        font-size: 50px;
        font-weight: 300;
    }
`
export const Items = styled.div`
    width: 100%;
    display: flex;
    margin: 80px 0 0;
    position: relative;

    @media (max-width:768px){ 
        flex-direction: column;
    }
`
export const Item = styled.div`
    width: 33.33%; 
    border: 1px solid #3b3b3b;
    border-right: none;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column; 
    align-items: center; 
    text-align: center;  
    padding: 80px 40px;

    &:nth-child(3){
        border-right: 1px solid rgba(255, 255, 225, 0.1);
    }

    @media (max-width:768px){ 
        width: 100%;
        border: 1px solid #3b3b3b!important;
        box-sizing: border-box;
    }

    @media (max-width:480px){ 
        padding: 40px 20px; 
    }
`
export const Icon = styled.div`   
`
export const Text = styled.div`
    width: 85%; 
    margin-top: 20px;
    h2{
        font-size: 22px;
    }
    p{
        margin-top: 10px;
        font-size: 16px;
        font-weight: 300;
        color: #a1a1a1; 
    }
`  