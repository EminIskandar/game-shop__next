import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

body,h1,h2,h3,h4,h5,h6,ul,li,p{
    margin: 0;
    padding: 0; 
    color: #fff;
    font-family: 'Roboto', sans-serif; 
} 
a{
    text-decoration: none; 
}
li{
    list-style: none;
}
input{
    font-family: 'Roboto', sans-serif; 
}
button:focus, input:focus{
    outline: none;
    box-shadow: none;
}
button{
    padding: 0;
    cursor: pointer;
}
body{ 
    background-color: #181818;
    color: white;
    font-family: 'Roboto', sans-serif; 
    overflow-x: hidden;
    
}
::-webkit-scrollbar {
    display:none;
}  
footer{
    transform: translateY(120px);
    padding: 0;
}

.down-arrow::after{
    content: '';
    position: absolute;
    border-top: 5px solid white;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent; 
}
.up-arrow::after{
    content: '';
    position: absolute;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
    border-left: 5px solid transparent; 
}
*{
    box-sizing: unset;
}

`

export default GlobalStyle;