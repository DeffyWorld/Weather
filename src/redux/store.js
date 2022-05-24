import { configureStore } from "@reduxjs/toolkit";

import { scaleChangeSlice } from "./ScaleChange";


const store = configureStore({
    reducer: scaleChangeSlice.reducer
});


export default store;