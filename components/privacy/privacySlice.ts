import {  createSlice } from "@reduxjs/toolkit"; 
  
const  privacy = "In this privacy policy we, GAMIVO.COM LIMITED, registered under number C 90983, with our registered office 99, Dingli Street, Sliema, Malta (“GAMIVO.COM”), wish to explain how we handle personal data of our Users when they visit our website and use our services. All the terms used in GAMIVO.COM Terms &amp; Conditions have the same meaning as in this Privacy Policy. When you first visit GAMIVO.COM site, you will be asked to consent to our use of cookies in accordance with these terms.We incorporate such privacy controls, that will provide you with controls on deciding how we will process your personal data. Use privacy controls, with which you can specify whether you would like to receive direct marketing communications from GAMIVO.COM. Please let us know if the personal information that we hold about you needs to be corrected or updated.If you wish to exercise any of your rights provided in this Privacy Policy or contact us regarding all privacy-related issues, you may submit or request by email: support@gamivo.com."


const privacySlice = createSlice({
    name: "privacy",
    initialState: privacy,
    reducers:  {}
});
    
export default privacySlice;
     
   