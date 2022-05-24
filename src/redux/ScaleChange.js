import { createSlice } from "@reduxjs/toolkit";

export const scaleChangeSlice = createSlice({
    name: 'scaleChange',
    initialState: {
        scaleActive: true
    },
    reducers: {
        scaleChange: state => {
            state.scaleActive = !state.scaleActive
        }
    }
});

export const { scaleChange } = scaleChangeSlice.actions;