import {  createSlice } from "@reduxjs/toolkit"; 
  
const  footerLinks  = [
    {
        path : '/about-us',
        name: 'About us'
    },
    {
        path : '/how-it-work',
        name: 'How Gamivo Works'
    },
    {
        path : '/cpp',
        name: 'Customer Protection Program' 
    },
    {
        path : '/smart',
        name: 'SMART' 
    },
    {
        path : '/privacy-policy',
        name: 'Privacy Policy' 
    },
    {
        path : '/affiliate',
        name: 'Affiliate' 
    },
    {
        path : '/support',
        name: 'Support center'
    },
    {
        path : '/blog',
        name: 'Blog' 
    },
    {
        path : '/contact',
        name: 'Contact' 
    },
    {
        path : '/copyright',
        name: 'Copyright & Legal Issues' 
    },
    {
        path : '/terms-conditions',
        name: 'Terms & Conditions'
    }
]

const footerSlice = createSlice({
    name: "footer",
    initialState: footerLinks,
    reducers:  {}
});
    
export default footerSlice;
     
   