import styled from "styled-components";

export const Section = styled.section`
    background-color: #E85023;
    padding-top: 80px;

    @media (max-width:996px){ 
        padding: 40px 0;
    }
`
export const Content = styled.div`
    width: 100vw;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width:996px){ 
        flex-direction: column;
    }
`
export const Img = styled.div`
    position: relative; 
    transform: translateY(5px);

    img{
        width: 500px;

        @media (max-width:996px){ 
            width: 70vw;
        }

        @media  (max-width:576px){ 
            width: 300px;
        }
    }
`
export const Text = styled.div`
    color: #000;
    width: calc(100% - 400px);

    h2{
        font-size: 22px;
        font-weight: 400;
        margin: 20px 0 ;
    }

    p{
        font-size: 16px;
        font-weight: 300;
    }

    @media (max-width:996px){ 
        margin-top: 40px;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    @media  (max-width:576px){ 
        text-align: center
    }
`