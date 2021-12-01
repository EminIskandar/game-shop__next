import {  createSlice } from "@reduxjs/toolkit"; 
  
const  filter =   {
    Type:['Games','DLC'],
    Genres:[ 'Action','RPG','FPS','Multiplayer','Adventure', 'Simulation','Strategy','Shooter','Sports'],
    Platform :['Steam','Official website','Origin','Epic','Ubisoft','Battle.net'],
    Region : [ 'EU','RU','GE','FR','TR','IT','JA','IS' ],
    Price : [ '0.00$ - 5.00 $','5.00$ - 10.00$','10.00$ - 25.00$','25.00$ - 50.00$','More than 50.00$'],
}

const filterSlice = createSlice({
    name: "filter",
    initialState: filter,
    reducers:  {}
});
    
export default filterSlice;
     
   