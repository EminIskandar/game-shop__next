import {  createSlice } from "@reduxjs/toolkit"; 
  
const  copyright  = `Out of concern for safety of our client’s, we have adopted the following copyright dispute policy (“Copyright Policy”) below toward copyright infringement. We reserve the right to block access to or remove offers that we believe in good faith to be copyrighted that has been illegally copied and distributed by any of our affiliates, merchants or users and remove and discontinue service to repeat infringers and offenders. If you believe that any content residing on or accessible through GAMIVO’s platform infringes your copyright or the copyright of a company which you are authorized to act on behalf of, send a notice of copyright infringement, which may allow us to identify you and the infringing content or activity. Once a proper Bona Fide Notification is received, it will be examined by GAMIVO’s Legal Team and will be responded accordingly. If an infringement is found, the content will be removed or restricted accordingly. We reserve the right to notify the content provider of an infringement notification, terminate or freeze cooperation. Content provider will have a right to counter an infringement notification. Such a counter notice may be send to the complaining party in sole discretion of Gamivo. In the course of such a procedure, Gamivo may remove the content, disable it, replace or keep it. Please contact Gamivo’s Legal Team on the Copyright Policy or any other legal issue by email to legal@gamivo.com Please remember that our Legal Team does not act as a replacement to our Support Center (https://www.gamivo.com/faq), which will answer most common issues.`
 

const copyrightSlice = createSlice({
    name: "copyright",
    initialState: copyright,
    reducers:  {}
});
    
export default copyrightSlice;
     
   