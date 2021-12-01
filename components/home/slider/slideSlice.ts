import {  createSlice } from "@reduxjs/toolkit"; 
  
const  slider =  [
    'slider_img1.jpg' , 
    'slider_img2.jpg' , 
    'slider_img3.jpg'
]

const sliderSlice = createSlice({
    name: "slider",
    initialState: slider,
    reducers:  {}
});
    
export default sliderSlice;
     
   