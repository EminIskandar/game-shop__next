import {  createSlice } from "@reduxjs/toolkit"; 
  
const  benefit = [
    {
        icon : 'b-icon-1.webp',
        text : "All tickets from CPP users go first! Don't wait for your turn.",
        title : 'Priority Support'
    },
    {
        icon : 'b-icon-2.webp',
        text : 'Fast mediation',
        title : 'In case of any issue with the supplier, we will maintain the communication with you.'
    },
    {
        icon : 'b-icon-3.webp',
        text : 'Get first in line! All pre-orders will be sent to CPP users first.',
        title : 'Priority pre-orders'
    }
]

const benefitSlice = createSlice({
    name: "benefit",
    initialState: benefit,
    reducers:  {}
});
    
export default benefitSlice;
     
   