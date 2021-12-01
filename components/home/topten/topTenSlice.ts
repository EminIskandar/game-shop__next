import {  createSlice } from "@reduxjs/toolkit"; 
  
const  topTen = [
    {
        path: '/product/world-of-warcraft-60-day-time-card-eu-battle.net-cd-key',
        img :   'img_topten12.jpg',
        title : 'Buy World of Warcraft 30 day time card EU Battle.net CD Key',
        price :'22.99$'
    },
    {
        path: '/product/pubg-playerunknowns-battlegrounds-steam-cd-key',
        img : 'img_topten11.jpg',
        title : `PUBG PlayerUnknown's Battlegrounds Steam CD Key`,
        price :'0.85$'
    },
    {
        path: '/product/minecraft-java-edition-official-website-cd-key',
        img : 'img_topten3.webp',
        title : `Minecraft - Java Edition Official website CD Key`,
        price :'19.55$'
    },
    {
        path: '/product/battlefield-5-eng-origin-cd-key',
        img : 'img_topten13.jpg',
        title : `Battlefield 5 ENG Origin CD Key`,
        price :'11.99$'
    },
    {
        path: '/product/terraria-steam-gift',
        img : 'img_topten5.webp',
        title : `Terraria Steam Gift`,
        price :'4.16$'
    },
    {
        path: '/product/dead-by-daylight-steam-cd-key',
        img : 'img_topten14.jpg',
        title : `Dead by Daylight Steam CD Key`,
        price :'6.49$'
    },
    {
        path: '/product/crusader-kings-iii-steam-cd-key',
        img : 'img_topten7.webp',
        title : `Crusader Kings III Steam CD Key`,
        price :'15.5$'
    },
    {
        path: '/product/outriders-eu-steam-cd-key',
        img : 'img_topten8.webp',
        title : `Outriders EU PRE-ORDER Steam CD Key`,
        price :'50.78$'
    },
    {
        path: '/product/escape-from-tarkov-official-website-cd-key',
        img : 'img_topten9.webp',
        title : `Escape from Tarkov Official website CD Key`,
        price :'28.94$'
    },
    {
        path: '/product/cartel-tycoon-steam-cd-key',
        img : 'img_topten10.webp',
        title : `Cartel Tycoon Steam CD Key`,
        price :'6.99$'
    }
]

const topTenSlice = createSlice({
    name: "topTen",
    initialState: topTen,
    reducers:  {}
});
    
export default topTenSlice;
     
   