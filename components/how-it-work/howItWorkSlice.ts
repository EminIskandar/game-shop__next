import {  createSlice } from "@reduxjs/toolkit"; 
  
const  howItWork =[
    {
        image : 'step-1.webp',
        text : 'Find your favourite game'
    },
    {
        image : 'step-2.webp',
        text : 'Check activation details, language version and choose the best offer'
    },
    {
        image : 'step-3.webp',
        text : 'Add game to the cart, complete the order and start playing!'
    }
]

const howItWorkSlice = createSlice({
    name: "howItWork",
    initialState: howItWork,
    reducers:  {}
});
    
export default howItWorkSlice;
     
   