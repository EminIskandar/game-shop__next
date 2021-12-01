import {  createSlice } from "@reduxjs/toolkit"; 
  
const category = {
    news:[
        {
            img: 'blog-big-img1.webp',
            title: 'TOP 10 WEIRDEST TEKKEN CHARACTERS',
            text : 'Lidia Sobieska just joined the roster of Tekken 7. The new fighter is the prime minister of Poland. Putting a...',
            section: 'General News Now Trending',
            date: '02/04/2021',
            path: '/blog/article/top-10-weirdest-tekken-characters'
        },
        {
            img: 'blog-big-img2.webp',
            title: 'Outriders: Everything you need to know about the game',
            text : 'Outriders by acclaimed Polish studio People Can Fly is one of the hottest premiers of 2021. The ultimate mix of a...',
            section: 'General News Now Trending',
            date: '24/03/2021',
            path: '/blog/article/outriders-everything-you-need-to-know-about-the-game'
        },
        {
            img: 'blog-big-img3.webp',
            title: 'Top structures recreated in Valheim',
            text : 'Vikings are known for plundering and conquering. Valheim shows us that the horrifying Norsemen are also pretty handy builders. The...',
            section: 'General News Now Trending',
            date: '22/03/2021',
            path: '/blog/article/top-structures-recreated-in-valheim'
        },
        {
            img: 'blog-img3.jpg',
            title: 'MMO Games Worth Checking Out',
            text : 'People crave human interaction and the pandemic has prevented that in many ways. To satisfy that desire and relieve stress,...',
            section: 'General News Now Trending',
            date: '19/03/2021',
            path: '/blog/article/mmo-games-worth-checking-out'
        },
    ],
    nowTrending:[
        {
            img:  'blog-img5.jpg' ,
            title: 'Celebrate St. Patrick’s Day with GAMIVO!',
            text : 'We could not be more lucky to have you here, let"s celebrate together by saving money on amazing video games!...',
            section: 'General News Now Trending',
            date: '17/03/2021',
            path: '/blog/article/celebrate-st-patrick’s-day-with-gamivo'
        },
        {
            img: 'blog-img6.jpg' ,
            title: 'Things you Need to Know about Overwatch® 2',
            text : 'For those not familiar with Overwatch® 2, the title will provide fans of the series with an opportunity to join...',
            section: 'General News Now Trending',
            date: '10/03/2021',
            path: '/blog/article/things-you-need-to-know-about-overwatch-2'
        },
        {
            img: 'blog-img7.jpg' ,
            title: 'International Women’s Day is here!',
            text : "The day of showing our appreciation for women is finally here! We sincerely thank you for being here thus, we've...",
            section: 'General News Now Trending',
            date: '08/03/2021',
            path: '/blog/article/international-women’s-day-is-here'
        },
        {
            img: 'blog-img8.jpg',
            title: 'Top 10 Games to Finish in One Afternoon',
            text : "With games becoming more expansive, complex, and taking longer to complete, many individuals may think the days of starting and...",
            section: 'General News Now Trending',
            date: '08/03/2021',
            path: '/blog/article/top-10-games-to-finish-in-one-afternoon'
        },
    ],
    promosions:[
        {
            img: 'blog-img9.jpg',
            title: 'Best pixel graphics',
            text : 'Video game designers have an array of graphic art techniques at their disposal when creating the game artwork One of...',
            section: 'General News Now Trending',
            date: '26/01/2021',
            path: '/blog/article/best-pixel-graphics'
        },
        {
            img: 'blog-img10.jpg',
            title: 'Will Nintendo Release Switch Pro?',
            text : 'Whispers, rumors and theories abound, but Nintendo hasn’t released any official confirmation that there will be a Switch Pro model...',
            section: 'General News Now Trending',
            date: '26/01/2021',
            path: '/blog/article/will-nintendo-release-switch-pro'
        },
        {
            img: 'blog-img11.jpg',
            title: 'The Medium – solve the dark mystery',
            text : 'Bloober Team - a polish studio behind games like Observer, Blair Witch and Layers of Fear (1 and 2) worked...',
            section: 'General News Now Trending',
            date: '25/01/2021',
            path: '/blog/article/the-medium–solve-the-dark-mystery'
        },
        {
            img: 'blog-img12.jpg',
            title: 'Top 10 Worst DLCs in Gaming History',
            text : 'Downloadable content (DLC) is regularly issued by publishers for a variety of reasons. For many, it’s simply a way to...',
            section: 'General News Now Trending',
            date: '25/01/2021',
            path: '/blog/article/top-10-worst-dlcs-in-gaming-history'
        }
    ]
}

const categorySlice = createSlice({
    name: "category",
    initialState: category,
    reducers:  {}
});
    
export default categorySlice;
     
   