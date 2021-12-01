import {  createSlice } from "@reduxjs/toolkit"; 
  
const  whatYouGet = [
    {
        icon: 'cpp-icon.webp',
        text : '<span>Customer Protection Program</span> for whole <span>SMART</span>  subscription <span>period</span>'
    },
    {
        icon: 'livechat-icon.webp',
        text : 'Customer Service <span>Livechat</span> access'
    },
    {
        icon: 'preorder-icon.webp',
        text : 'Preorder Delivery <span>Priority</span>'
    },
    {
        icon: 'discount-icon.webp',
        text : 'Exclusive <span>Discounts</span>'
    },
    {
        icon: 'alerts-icon.webp',
        text : 'Best deals <span>Alerts</span>'
    },
    {
        icon: 'giveaways-icon.png',
        text : 'Outstanding <span>Giveaways</span>'
    },
]

const whatYouGetSlice = createSlice({
    name: "category",
    initialState: whatYouGet,
    reducers:  {}
});
    
export default whatYouGetSlice;
     
   