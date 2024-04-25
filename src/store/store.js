import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSection from "./cart";

let allSection = combineReducers({

    cartSection:cartSection.reducer,
})  

export let meraStore = configureStore({reducer:allSection});

 