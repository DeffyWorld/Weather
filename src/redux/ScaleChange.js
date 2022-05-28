import { createSlice } from "@reduxjs/toolkit";

export const scaleChangeSlice = createSlice({
    name: 'scaleChange',
    initialState: {
        activeScale: true
    },
    reducers: {
        scaleChange: state => {
            state.activeScale = !state.activeScale
        }
    }
});

export const { scaleChange } = scaleChangeSlice.actions;