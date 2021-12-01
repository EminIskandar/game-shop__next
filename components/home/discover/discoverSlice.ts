import {  createSlice } from "@reduxjs/toolkit"; 
  
const  discover = [
    {
        title: 'Customer Protection Program',
        imageNotHover: 'cpp.webp',
        imageHover: 'cpp-hover.webp'
    },
    {
        title: 'Deals & Promotions',
        imageNotHover: 'deals.webp',
        imageHover: 'deals-hover.png'
    }, 
    {
        title: 'Shop in your native language',
        imageNotHover: 'language.webp',
        imageHover: 'language-hover.webp'
    }, 
    {
        title: 'Gamivo Smart',
        imageNotHover: 'gamivo-smart.png',
        imageHover: 'gamivo-smart-hover.png'
    },
    {
        title: '27/4 Customer Service',
        imageNotHover: 'cs.webp',
        imageHover: 'cs-hover.webp'
    },
    {
        title: 'Affliate Network',
        imageNotHover: 'affiliate.webp',
        imageHover: 'affiliate-hover.webp'
    },
    {
        title:  'Gaming Blog',
        imageNotHover: 'gaming-blog.webp',
        imageHover: 'gaming-blog-hover.webp'
    },
]

const discoverSlice = createSlice({
    name: "discover",
    initialState: discover,
    reducers:  {}
});
    
export default discoverSlice;
     
   