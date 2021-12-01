import {  createSlice } from "@reduxjs/toolkit"; 
  
const  header = {  
    Games :{ 
        name:'Games',
        underList:{
            Genres: ['Action', 'RPG' ,'FPS', 'Multiplayer' , 'Adventure','Simulation', 'Strategy', 'Shooter' , 'Spotrs'],
            Platforms: ['Steam','Xbox live', 'Origin', 'Ubisoft Connect','Battle.net','PSN','Rockstart Social Club','Itunes','GOG'],
            DLC:['Dyling Light: Bad Blood','The Sims 4: Seasons','The Sims 4: Cats and Dogs','The Sims 4: Eco Lifestyle','Monster Hunter: World-Iceborne'],
            Prepaid:['Netflix Cart 100USD','Boblox Gift Card 5 USD','Netflix Gift Card 75 USD','Boblox Gift Card 10 USD','Razer Gold Gift Card 50 USD'],
        }
    }, 
    PrePaidCardSubscriptions :{
        name:'Pre-Paid Card & Subscriptions',
        underList:{
            Playstation: ['PlayStation Network Card PSN 50 USD','PlayStation Network Card PSN 25 USD','PlayStation Network Card PSN 10 USD' ,'PlayStation Network Card 365 Days US','PlayStation Network Card PSN 50 EUR'],
            Xbox:['Xbox Game Pass Ultimate - 14 Days','Xbox live 50 EUR','Xbox Game Pass Ultimate - 7 Days','Xbox live 10 EUR','Xbox live Dold 12 months'],
            Steam:['Steam Gift Card 100 USD','Steam Gift Card 50 US','Steam Gift Card 25 USD','Steam Gift Card 10 USD','Steam Gift Card 5 USD'],
            Battle_net:['World of Warcraft 30 day time card EU','Overwatch','World of Warcraft: Shadowlands','World of Warcraft 30 day time card US','World of Warcraft 60 day time card US'],
            Other:['Final Fantasy XIV: A Realm Reborn','Genera Free Fire Gift Card 1080','Genera Free Fire Gift Card 210','Genera Free Fire Gift Card 100','Valorant Gift Card 5025 Riot Points']
        }
    }, 
    PreOrders:{
        name: 'Pre Orders', 
        underList:{
            Bestsellers:['World of Warcraft 30 day time card','Overlord II','Windows 10 Professional','S.T.A.L.K.E.R: Shadow of Chernobyl','Xbox Game Pass Ultimate - 14 Days'],
            Upcoming:['Natira Boy ARG PRE-ORDER','Natira Boy PRE-Order','Evil Genius 2: World Domination EU PRE-PURCHASE','Evil Genius 2: World Domination US PRE-PURCHASE','Evil Genius 2: World Domination CIS PRE-PURCHASE']
        }
    },  
    GamivoSmart:{
        name: 'Gamivo Smart',
        underList: {}
    } 
}

const headerSlice = createSlice({
    name: "header",
    initialState: header,
    reducers:  {}
});
    
export default headerSlice;
     
   