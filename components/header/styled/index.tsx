import styled from 'styled-components';

export const Header = styled.header`
    width: 100vw;
    position: fixed;  
    z-index: 40;
    background-color: #181818;
    transition: height .2s ease; 

    @media (max-width:1400px){
        padding: 0 20px;
        box-sizing: border-box; 
    } 

`
export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
`
export const TopItems = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    padding: 13px 0;

    @media (max-width:576px){
        justify-content: space-between;
    }
`
export const BottomItem = styled(TopItems)`
    padding: 0;
    height: 45px; 
    justify-content: space-between;
    overflow: hidden;
    transition: all .4s ease;

    @media (max-width:576px){
        display: none;
    }
`
export const ToogleMenuIcon = styled.div`
    display: none;
    position: relative; 
    cursor: pointer;
    & li{
        width: 30px;
        height: 3px;
        background: linear-gradient(90deg, rgba(242,121,36,1) 0%, rgba(239,80,35,1) 100%);
        margin: 4px 0;
        border-radius: 10px;
    }

    @media (max-width:576px){
         display: block;
    }
`
export const Logo = styled.div`
    height: 35px;
    position: relative;

    & img{
        height: 100%;
        width: auto;
        cursor: pointer;
    }

    &  img:nth-child(2) {
        display: none;
    }

    @media (max-width:768px){

        & img{
            display: none;
        }

        & img:nth-child(2){
            display: block;
        }
 

    }

    @media (max-width:576px){

        & img {
            display: block;
        }

        & img:nth-child(2) {
            display: none;
        }

        height: 25px;
        position: absolute;
        margin-left: 40px;
    }
`
export const Search = styled.div`
    width: 1030px;
    padding: 0 40px;
    transition: all .4s ease;
    position: relative;

    @media (max-width:1400px){
        width: calc(100vw - 400px);
    } 
    @media (max-width:768px){
        padding: 0 20px;
        width: calc(100vw - 197px);
    }
    @media (max-width:576px){
        display: none;
    }
`
export const SearchForm = styled.form`
    display: flex;
    width: 100%;
    transition: all .4s ease;

    & input {
        width: 100%;  
        height: 45px;
        padding:  0 10px;
        box-sizing: border-box;
        border: none;
        transition: all .4s ease;
    }
    & button{
        width: 45px;
        height: 45px;
        border: none;
        background: linear-gradient(90deg, rgba(242,121,36,1) 0%, rgba(239,80,35,1) 100%);
    }
    & button svg{
        color:#fff;
        width: 18px;
    }
`
export const SearchResult = styled.div`
    position: absolute;
    top: 45px;
    width: calc(100% - 80px); 
    height: 100px;
    max-height: 500px; 
    z-index: 20;
    display: none;
    & .result-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box; 
        position: relative;
        z-index: 22;
    }
    & .result-item:nth-child(odd){
        background-color: #313131;
    }

    & .result-item:nth-child(even){
        background-color: #232323;
    }

    & .result-item:hover{
       background-color: #F47B25;
    }

    & .result-img-and-name{
        display: flex;
        align-items: center;
        width: 80%;
        position: relative;
    }

    & .result-img{
        width: 150px;
        height: 75px;
        overflow: hidden;
        position: relative;
    }

    & .result-img img{
        width: 100%;
    }

    & .result-name{
        width: calc(100% - 150px);
    }

    & .result-name h3{
        font-size: 18px;
        color: #cacaca;
        margin-left: 20px;
    }

    & .result-price { 
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    & .result-price span{
        font-size: 14px;
        color: #a1a1a1;
        font-weight: 300; 
        text-align: end;
    }

    & .result-price p{
        font-size: 25px;
        color: #F47B25;
        font-weight: 600;
    }

    &   .result-item:hover  .result-name h3,
        .result-item:hover  .result-price p,
        .result-item:hover  .result-name h3{
            color: #fff;
    }

 
    @media (max-width:996px){
        width: calc(100vw - 205px); 
    }
    @media (max-width:768px){
        
        width: calc(100vw - 63px);

        &  .result-name h3{
            font-size: 15px;
        }
        & .result-price span{
            font-size: 11px;
        }
        & .result-price p {
            font-size: 20px;
        }
    } 
`
export const SearchButton = styled.div`
    padding: 20px 20px 20px 10px;
    background-color: #313131;

    & button{
        border: 1px solid #F47B25;
        color: #F47B25;
        font-size: 16px;
        font-weight: 600;
        padding: 10px 50px;
        background: transparent!important;
        width: auto;
        height: auto;
        border-radius: 3px;
    }
`
export const LangAndCurrency = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;

    @media (max-width:576px){
        display: none;
    }
`
export const Lang = styled.div``

export const Currency = styled.div`
     width: 60px;
`
export const LangContent = styled.div`
    &  .down-arrow::after{
        transform: translate(38px,2px);
    }
    & .up-arrow::after{
        transform: translate(38px, -5px);
    }
`
export const CurrencyContent = styled.div`
    &  .down-arrow::after{
        transform: translate(50px,2px);
    }
    &  .up-arrow::after{
        transform: translate(50px, -5px);
    }   
`
export const Selected = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`
export const Icon = styled.div`
     & svg{
        color: #F47B25;
        margin-right: 3px;
        width: 15px;
     }
`
export const Text = styled.div`
    & h3{
        font-size: 15px;
        font-weight: 900; 
    }
`
export const List = styled.div`  
    position: absolute;
    z-index: 40;
    background-color: #181818;
    margin-top: 2px;

    & h3{
        font-size: 15px;
        font-weight: 900;
        padding: 5px 16px;
        border: 1px solid #ffffff4d;
        cursor: pointer;
    }

    &  ul li:first-child h3{
        border-bottom: none;
    }
`
export const CartAndLogin = styled.div`
    display: flex;
    align-items: center;
    width:  ${ props => props.theme === 'top' ? "0" :'200px'};
    justify-content: space-around; 
    visibility: ${ props => props.theme === 'hidden' ? "0" :'visible'};
    transition: all .4s ease;
    overflow: hidden;
    height: 50px;   
    
    @media (max-width:576px){
        ${TopItems} & {
            height: auto;
        }
    }

`
export const Login = styled.div`
 
`

export const Cart = styled.div``

export const LoginContent = styled.div`
    width: 91px;
    & h3{
        font-size: 15px;
        font-weight: 900;
    }

    & span{
        color: #F47B25;
        cursor: pointer;
    }

    & span:hover{
        text-decoration: underline;
    }
`
export const CartContent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`
export const CartPrice = styled.div`
    background:#F47B25 ;
    width: 45px;
    height: 22px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    &:after{
        content: '';
        position: absolute;
        border-top: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #F47B25;
        transform: translate(27px, 0px);
    }

    & h3{
        font-size: 13px;
    }
`
export const CartProducts = styled.div``

export const CartProductsList = styled.div`
     display: none;
`
export const CartIcon = styled.div`
    svg{
        width: 25px;
    }
`
export const CartCount = styled.div`
    position: absolute;
    top: 0;
    width: 15px;
    height: 15px;
    background:#F47B25 ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 100%;
    transform: translate(9px, -3px);
`
export const Icons = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width:576px){
        display: flex;
    }
`
export const IconsItem = styled.div`
    svg{
        margin: 0 5px;
        width: 20px; 
    }

    & ${CartCount}{
        transform: translate(19px, 8px);
    }
`
export const Nav = styled.nav`
    position: relative;
`
export const NavSectionItem = styled.div`
    position: relative; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background-color:  #F47B25;
        transition: width .2s ease-in;
    }

    &:hover::after{
        width: 100%;
    }

    & h3{
    color: #a0a0a0;
    padding: 0 10px;
    font-size: 14px;
    border-right: 1px solid #4c4b4b;
    }

    &:hover h3{
        color:#fff;
    }
`
export const NavSectionLinks = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    max-width: 1400px; 
    transform:translateY(45px); 
    padding: 40px;
    box-sizing: border-box;
    background-color: #181818;

    @media (max-width:1400px){
        left: -20px;
    }
    @media (max-width:996px){
        padding: 20px;
    }
     
`
export const NavSections = styled.nav`
    display: flex;
    height: 45px;

    & ${NavSectionItem}:last-child h3{
        border-right: none;
    }
    @media (max-width:768px){ 
        display: none;
    }
`
export const GroupItems = styled.li`` 

export const GroupItem = styled.div`
    & table {
        position: relative;
        width: 100%;
    }

    & table td {
        color: #a0a0a0;
        font-size: 16px;
    }
 

    & .table-dot::after {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background-color: #F47B25;
        transform: translate(3px, 0px);
    }

    @media (max-width:1400px){
         & table td{
            font-size: 12px;
        }
    } 
` 
export const GroupItemLinks = styled.div`
    display: flex; 
    justify-content: space-between;

    & a[class="more"]{
        font-size: 14px;
        margin: 5px 5px 5px 0px;
        font-weight: 500;
        color: #F47B25!important;
    }
`
export const GroupItemLink = styled.div`
    display: flex;  
`
export const GroupItemIcon = styled.div`
    display: flex;  
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    & h3{
        font-size: 13px;
        padding: 0 3px;
    }
`
export const GroupItemLinksRight = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-direction: column; 
    width: 50%;
`
export const GroupItemLinksLeft = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-direction: column; 
    width: 50%;
`
export const LinksGroup = styled.ul`
    display: none;
    justify-content: space-between;
    width: 100%;
    position: relative;
`
export const NavSectionLinksContent = styled.div`

    & ${LinksGroup}:nth-child(1) ${GroupItem}{
        width: 23%;  
    }

    & ${LinksGroup}:nth-child(2) ${GroupItem}{
        width: 18%;  
    }

    & ${LinksGroup}:nth-child(3) ${GroupItem}:nth-child(1){
        width: 23%;  
    }

    & ${LinksGroup}:nth-child(3) ${GroupItem}:nth-child(2){
        width: 23%;  
    }

    & ${LinksGroup}:nth-child(3) ${GroupItem}:nth-child(n+3) {
        width: 15%;  
    }

    & a{
        color:#a0a0a0;
        font-size: 14px;
        margin: 5px 5px 5px 0px; 
        font-weight: 500;
    }

    & a:hover{
        color: #fff;
    }

    & ${LinksGroup}:nth-child(3)  ${GroupItem}:nth-child(1) a{
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
        overflow: hidden;
        margin-left: 5px; 
    }
    & ${LinksGroup}:nth-child(2) ${GroupItemLinks}{
        flex-direction: column;
    }
    & ${LinksGroup}:nth-child(3) ${GroupItemLinks}{
        flex-direction: column;
    }
    & ${LinksGroup}:nth-child(1) ${GroupItems}:nth-child(n+3)  ${GroupItemLinks}{
        flex-direction: column;
    }
`
export const LinkWithDate = styled.div` 
    display: flex; 
`
export const LinkIcon = styled.div`
    border: 1px solid #fff;
    display: flex;
    align-items: center;

    & h3 {
        font-size: 13px;
        padding: 0 3px;
    }
    & div {
        width: 25px;
        height: 25px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            color: #F47B25;
            width: 18px;
        }
    }
`
export const LinksGroupTitle = styled.div`
    height: 40px;
    position: relative;

    &::after{ 
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #a8a8a8;
        transform: translateY(13px)
    }
    & h3{
        font-size: 14px;
    }
`
export const ToggleMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, 0.8);
    transform: translateX(-100%);
    transition: all .2s ease;
`
export const ToggleMenuContent = styled.div`
    & h2{
        font-size: 15px;
        margin-left: 15px;
        position: absolute;
        top: 30px;
        left: 20px;
        cursor: pointer;
    }
    & h2:before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    border-right: 1px solid #ffffffb5;
    border-bottom: 1px solid #ffffffb5;
    transform: translate(-12px, 4px) rotate( 134deg );
}
`
export const ToggleMenuClose = styled.div`
    height: 70px;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer; 
    display: flex; 
    align-items: center;

    & h3{
        font-family: cursive;
        color: #F47B25;
        font-weight: 900;
        font-size: 20px;
        position: absolute;
        right: 25px;
    }
`
export const ToggleMenuList = styled.div`
    background-color: #252525;
    min-height: 320px;
    height: auto;
    padding-bottom:80px;
`
export const ToggleMenuListItem = styled.div`
    border-bottom: 1px solid #a0a0a026;
    position: relative;

    & h3{
        font-size: 16px;
        font-weight: 400;
        color: #a0a0a0;
        padding: 15px 20px;
        box-sizing: border-box;
        cursor: pointer;
    }
    &:after{
        content: '';
        position: absolute;
        right: 0;
        width: 7px;
        height: 7px;
        border-bottom: 2px solid #a0a0a0;
        border-right: 2px solid #a0a0a0;;
        transform: rotate( -45deg) translate(-1px, -39px);
    }
`
export const ToggleMenuListItems = styled.div`

    & ${ToggleMenuListItem}:nth-child(4):after{
        display: none; 
    }
`
export const ToggleMenuLinksGroup = styled.div`
    background-color: #252525;
    min-height: 320px;
    height: auto;
    padding-bottom:80px;
    display: none;
`
export const ToggleMenuName = styled.h2`
    font-size: 15px;
    margin-left: 15px;
    position: absolute;
    top: 30px;
    left: 20px;
    cursor:pointer;

    &:before{
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border-right: 1px solid #ffffffb5;
        border-bottom: 1px solid #ffffffb5;
        transform: translate(-12px, 4px) rotate( 134deg);
    }
`
export const ToggleMenuLinksGroupItems = styled.div``

export const ToggleMenuLinksGroupItem = styled.div`
    border-bottom: 1px solid #a0a0a026;
    position: relative;

    & h3{
        font-size: 16px;
        font-weight: 400;
        color: #a0a0a0;
        padding: 15px 20px;
        box-sizing: border-box;
        cursor: pointer;
    }

    &:after{
        content: '';
        position: absolute;
        right: 0;
        width: 7px;
        height: 7px;
        border-bottom: 2px solid #a0a0a0;
        border-right: 2px solid #a0a0a0;;
        transform: rotate( -45deg) translate(-1px, -39px);
    }
`
export const ToggleMenuLinks = styled.div`
    background-color: #252525;
    min-height: 320px;
    height: auto;
    padding-bottom:80px;
    display: none;
`
export const ToggleMenuLinksItems = styled.div``

export const ToggleMenuLinksItem = styled.div`
    border-bottom: 1px solid #a0a0a026;
    position: relative;

    & h3{
        font-size: 16px;
        font-weight: 400;
        color: #a0a0a0;
        padding: 15px 20px;
        box-sizing: border-box;
        cursor: pointer;
    }
`
export const MobileSearch = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, 0.8);  
    display: none;
    z-index: 10;

    svg{
        width: 20px;
        color: #a0a0a0;;
    }
`
export const MobileSearchForm = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    position: relative; 

    & input{
        width: 80%;
        height: 40px;
        border: none;
        padding: 0 10px;
    }

    & button{
        height: 40px;
        width: 40px;
        border: none;
        background-color: #fff;
        transform: translateX(-1px);
        cursor: pointer;
    }
`
export const MobileSearchResult = styled.div`
    width: 90vw;
    margin: 0 auto;  
    z-index: 20; 

    & .mobile-result-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box; 
        position: relative;
        z-index: 22;
        border-bottom: 1px solid #ffffff5c;
    }

    & .mobile-result-item:last-child{
        border:none;
    }

    & .mobile-result-name-and-price{
        width: calc(100% - 100px); 
    }

    & .mobile-result-name h3{
        font-size: 13px;
        color: #cacaca;
        margin-left: 10px;
    }

    & .mobile-result-price { 
        display: flex; 
        align-items: center;
        margin-top: 10px;
        margin-left: 10px;
    }
    & .mobile-result-price span{
        font-size: 10px;
        color: #a1a1a1;
        font-weight: 300; 
        text-align: end;
        margin-right: 5px;
    }
    &  .mobile-result-price  p{
        font-size: 18px;
        color: #F47B25;
        font-weight: 600;
    }
    & .mobile-result-img{
        width: 100px;
        height: 70px;
        overflow: hidden;
        position: relative;
    }
    & .mobile-result-img img{
        width: 100%;
    }
`
export const MobileSearchResultBtn = styled.div`
     padding: 20px 20px 20px 10px; 
    text-align: center;

    & button{
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        padding: 10px 50px;
        background: transparent!important;
        width: auto;
        height: auto;
        border-radius: 3px;
    }
`