import { createSlice } from "@reduxjs/toolkit";

let cartSection = createSlice({
    name: 'cartSection',
    initialState:{
      orderProducts:[],
    },
    reducers:{
        addToCard:(puraData, nyaData)=>{
            puraData?.orderProducts?.push(nyaData.payload)
            console.log(".................",puraData);
            // console.log(".................",nyaData);
        },
        // removeFromCard:(puraData, nyaData)=>{},
    },
})

export let {addToCard, removeFromCard} = cartSection.actions;
export default cartSection;