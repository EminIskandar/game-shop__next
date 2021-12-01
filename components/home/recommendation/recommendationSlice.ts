import {  createSlice } from "@reduxjs/toolkit"; 
  
const  recommendation = [
    {
        path : '/product/world-of-warcraft-60-day-time-card-eu-battle.net-cd-key',
        image : 'product-id16-image.jpg',
        name : 'Buy World of Warcraft 30 day time card EU Battle.net CD Key',
        price : 22.99
    },
    {
        path: '/product/fifa-21-eng-pl-cz-tr-origin-cd-key',
        image : 'product-id3-image.jpg',
        name : 'FIFA 21 ENG/PL/CZ/TR Origin CD Key',
        price : 21.19
    },
    {
        path: '/product/sea-of-thieves-xbox-live-cd-key',
        image : 'Recommendation_img3.webp',
        name : 'Sea of Thieves Xbox live CD Key',
        price : 20.93
    },
    {
        path : '/product/outriders-eu-steam-cd-key',
        image : 'Recommendation_img4.webp',
        name : 'Outriders EU Steam CD Key',
        price : 50.78
    },
    {
        path: '/product/it-takes-two-eng-origin-cd-key',
        image : 'Recommendation_img5.webp',
        name : 'It Takes Two ENG Origin CD Key',
        price : 28.26
    }
]

const recommendationSlice = createSlice({
    name: "recommendation",
    initialState: recommendation,
    reducers:  {}
});
    
export default recommendationSlice;
     
   