import { configureStore } from "@reduxjs/toolkit";

import { scaleChangeSlice } from "./scaleChange";
import { weatherSlice } from "./weather";


const store = configureStore({
    reducer: {
        scaleChange: scaleChangeSlice.reducer,
        weather: weatherSlice.reducer
    },
});


export default store;