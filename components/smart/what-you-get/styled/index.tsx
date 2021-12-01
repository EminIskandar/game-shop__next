import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    max-width: 1200px;
    margin: 20px auto;

    @media (max-width: 1200px){ 
        padding: 0 20px;
        box-sizing: border-box; 
    }
`
export const Content = styled.div`
`
export const Title = styled.div`

    h2{
        font-size: 32px;
        font-weight: 300;
    }

    span{ 
        font-weight: 700;
    }
`
export const Items = styled.div`
    width: 100%;
    display: flex; 
    flex-wrap: wrap;
    position: relative;
    margin: 60px 0;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 33.33%;
    height: 117px;

    @media (max-width: 768px){ 
        width: 100%; 
    }
`
export const Img = styled.div`
    width: 85px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{ 
        transform: scale(.8);
    }
`
export const Text = styled.div`

    width: calc(100% - 95px);

    h2{
        font-size: 18px;
    }
    
    span{
        color: #F47B25;;
    }
`