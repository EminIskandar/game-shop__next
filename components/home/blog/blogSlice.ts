import {  createSlice } from "@reduxjs/toolkit"; 
  
const  blog =[
    {
        path: '/blog/post/top-crazy-easter-eggs-in-games',
        img : 'blog-img1.jpg',
        title: 'Top Crazy Easter Eggs in Games',
        description : 'Easter eggs are always a delight to find. Some are fun, while others aren’t really worth the time to look for them. In some titles, the Easter eggs ar...',
        date: 'March 25, 2021'
    },
    {
        path: '/blog/post/outriders-everything-you-need-to-know-about-the-game',
        img : 'blog-img2.jpg',
        title: 'Outriders: Everything you need to know about the game',
        description : 'Outriders by acclaimed Polish studio People Can Fly is one of the hottest premiers of 2021. The ultimate mix of a shooter and an RPG brings us to the ...',
        date: 'March 24, 2021'
    },
    {
        path: '/blog/post/top-structures-recreated-in-valheim',
        img : 'blog-img3.jpg',
        title: 'Top structures recreated in Valheim',
        description : 'Vikings are known for plundering and conquering. Valheim shows us that the horrifying Norsemen are also pretty handy builders. The biggest Steam hit o...',
        date: 'March 22, 2021'
    },
    {
        path: '/blog/post/mmo-games-worth-checking-out',
        img : 'blog-img4.jpg',
        title: 'MMO Games Worth Checking Out',
        description : 'People crave human interaction and the pandemic has prevented that in many ways. To satisfy that desire and relieve stress, many people are turning to...',
        date: 'March 19, 2021'
    }
]

const blogSlice = createSlice({
    name: "blog",
    initialState: blog,
    reducers:  {}
});
    
export default blogSlice;
     
   