import {  createSlice } from "@reduxjs/toolkit"; 
  
const  currentDiscount = [
    {
        name : `Outriders EU PRE-ORDER`,
        price :41.03,
        discountPrice : 36.93,
        image :'image_current_1.jpg' 
    },
    {
        name : `Stronghold: Warlords - Special Edition `,
        price :29.18,
        discountPrice : 26.26,
        image : 'image_current_2.jpg' 
    },
    {
        name : `FIFA 21`,
        price :22.61,
        discountPrice : 18.09,
        image : 'image_current_3.jpg' 
    },
    {
        name : `Watch Dogs: Legion EU`,
        price :28.29,
        discountPrice :25.46,
        image : 'image_current_4.jpg' 
    },
    {
        name : `Nioh 2 - The Complete Edition`,
        price :27.34,
        discountPrice :24.61,
        image : 'image_current_5.jpg' 
    },
    {
        name : `Call of Duty: Black Ops - Cold War Green Gift`,
        price :48.10,
        discountPrice :43.29,
        image : 'image_current_6.jpg' 
    },
    {
        name : `Destiny 2: Beyond Light`,
        price :19.49,
        discountPrice :17.54,
        image : 'image_current_7.jpg' 
    },
    {
        name : `Cyberpunk 2077`,
        price :25.29,
        discountPrice :22.79,
        image : 'image_current_8.jpg' 
    },
    {
        name : `World of Warcraft: Shadowlands EU`,
        price :28.93,
        discountPrice :26.04,
        image : 'image_current_9.jpg' 
    },
    {
        name : `Little Nightmares II EU`,
        price :24.93,
        discountPrice :22.45,
        image : 'image_current_10.jpg' 
    },
    {
        name : `Hitman 3 EU `,
        price :33.29,
        discountPrice :29.96,
        image : 'image_current_11.jpg'
    },
    {
        name : `Assassin's Creed: Valhalla EU`,
        price :33.45,
        discountPrice :30.11,
        image : 'image_current_12.jpg'
    },
    {
        name : `FIFA 21 ENG/PL/CZ/TR`,
        price :18.99,
        discountPrice :17.09,
        image : 'image_current_13.jpg'
    },
    {
        name : `Star Wars: Squadrons`,
        price :18.49,
        discountPrice :16.64,
        image : 'image_current_14.jpg'
    },
    {
        name : `The Medium`,
        price :47.24,
        discountPrice :42.52,
        image : 'image_current_15.jpg'
    },
    {
        name : ` Mafia - Definitive Edition EU`,
        price :22.32,
        discountPrice :20.09,
        image :'image_current_16.jpg'
    }
]

const currentDiscountSlice = createSlice({
    name: "currentDiscount",
    initialState: currentDiscount,
    reducers:  {}
});
    
export default currentDiscountSlice;
     
   