import {  createSlice } from "@reduxjs/toolkit"; 
  
const  discount = [
    {
        image : 'image_game_smal1.jpg',
        discountPercent : '-20%',
        name : 'Far Cry 5 EMEA Ubisoft Connect CD Key',
        price : 16.99,
        discountPrice : 14.44, 
    },
    {
        image : 'image_game_smal2.jpg',
        discountPercent : '-20%',
        name : 'Escape from Tarkov',
        price : 28.94,
        discountPrice : 25.47, 
    },
    {
        image : 'image_game_smal3.jpg',
        discountPercent : '-20%',
        name : 'Cyberpunk 2077',
        price : 24.99,
        discountPrice : 21.24, 
    }
]

const discountSlice = createSlice({
    name: "discount",
    initialState: discount,
    reducers:  {}
});
    
export default discountSlice;
     
   