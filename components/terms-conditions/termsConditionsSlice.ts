import {  createSlice } from "@reduxjs/toolkit"; 
  
const  termsConditions  = `In order to use the Platform, the User agrees to and accepts the Terms & Conditions as a whole and without reservations.  The User confirms that under the domestic laws of his country of residence he is able to conclude legally binding agreements. The User agrees that he is not prohibited from using the Platform and services offered on the Platform due to the domestic regulations or other restrictions.  The User acknowledges and agrees that GAMIVO has the right to make changes and modifications to the Terms & Conditions. The change or modification to the Terms & Conditions will not affect the rights acquired by the Users before that change or modification on the basis of the existing Terms & Conditions. Information about the change and modification of the Terms & Conditions will be provided to Users by email in accordance with the contact details provided by the Users in the course of the registration with the Platform, as well as will be published on the Platform. The amended Terms & Conditions will be published on the Platform and become binding for User fourteen days after the information about the changes of Terms & Conditions is delivered to the User. For new Users, the version published on the Platform at the moment of their registration applies immediately. The User who does not agree with the amended Terms & Conditions should resign from using the Platform.  The User may conclude with GAMIVO, through the Internet or otherwise, separate agreements related to certain rights and obligations between the User and GAMIVO. In the case of any conflict or discrepancies between the Terms & Conditions and such additional agreements, the additional agreements prevail over the Terms & Conditions unless explicitly stated otherwise in the additional agreements. In the case of discrepancies between the Terms & Conditions and the General Sale Conditions, the General Sale Conditions prevail.`


const termsConditionsSlice = createSlice({
    name: "termsConditions",
    initialState: termsConditions ,
    reducers:  {}
});
    
export default termsConditionsSlice;
     
   