import styled , {css} from "styled-components"; 

export const Section = styled.section`
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto 40px;
    position: relative; 

    @media (max-width:1400px){ 
        width: 1200px; 
    }

    @media (max-width:1200px){ 
        width: 996px; 
    }

    @media (max-width:996px){ 
        width: 768px;
    }

    @media (max-width:768px){ 
        width: 100vw; 
    }
`
export const Content = styled.div`
`
export const BottomArticle = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width:576px){ 
        flex-direction: column;
    }
`
export const Img = styled.div`
`
export const Info = styled.div`
`
export const Name = styled.div`
`
export const DateAndBtn = styled.div`
` 
export const Date = styled.div`
` 
export const Btn = styled.button`
` 
export const Article = styled.a`

    ${  (props) =>

        (props.theme === 'top' &&
        css`
            width: 100%;
            position: relative;  
            display :block ;

            & ${Img} img{
                width: 100%;
            }

            & ${Content}{
                position: relative;

                
            }

            & ${Info}{
                width: 100%;
                position: absolute; 
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.8);
                padding: 20px;
                box-sizing: border-box;

                @media (max-width:576px){ 
                    position: relative;
                }
            }

            & ${Name} h2{
                font-size: 38px;
                font-family: 'Roboto Condensed', sans-serif;
                color:#fff;

                @media (max-width:996px){ 
                    font-size: 20px;
                     font-family: 'Roboto Condensed', sans-serif;
                }
            }

            & ${DateAndBtn}{
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-family: 'Roboto Condensed', sans-serif;

                @media (max-width:480px){ 
                    flex-direction: column;
                }
            }

            & ${Date} h3{
                font-size: 16px;
                color: #d2d3d3;
                font-weight: 400;
            }

            time{
                font-size: 14px; 
                color: #a1a1a190;
                font-weight: 400;
            }

            & ${Btn}{
                padding: 10px;
                border: none;
                background-color: #F47B25;;
                font-size: 18px;
                color: #fff;
                font-weight: 700;
                font-family: 'Roboto Condensed', sans-serif;

                @media (max-width:480px){ 
                    margin-top: 20px;
                }
            }

            
        `) 

        ||

        (props.theme === 'bottom' &&
        css`
            position: relative;
            width: calc(100% / 3 - 5px); 

            @media (max-width:576px){ 
                width: 100%;
            }

             & ${Img} img{
                width: 100%;
            } 

            & ${Info}{
                width: 100%; 
                background-color: #fff;
                padding: 20px;
                box-sizing: border-box;
                height: 130px;
            }

            & ${Name} h2{
                font-size: 16px;
                font-family: 'Roboto Condensed', sans-serif;
                color: #F47B25;
                margin-top: 10px;

                @media (max-width:996px){ 
                    display: inline-block;
                    white-space: nowrap; 
                    width: 170px; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                @media (max-width:576px){ 
                    display: inline-block;
                    white-space: nowrap; 
                    width: 90vw; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                            
            }

            & ${DateAndBtn}{
                
            }

            & ${Date} h3{
                font-size: 14px;
                color: #000000ad;
                font-weight: 400;
            }

            time{
                font-size: 14px; 
                color: #a1a1a1;
                font-weight: 400;
            } 
 
        `)
    }

    @media (max-width:576px){ 
        margin: 5px 0;
    }
`