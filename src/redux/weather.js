import axios from 'axios';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function(_, {rejectWithValue}) {
        try {
            const data = await axios.get(
                'http://api.weatherapi.com/v1/forecast.json?key=a3aa285bc09643788a0131738222505&q=London&days=7&aqi=no&alerts=no'
            )
            if (data.statusText !== 'OK') {
                throw new Error(`Server error! Status: ${data.status}`);
            }

            return data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherData: {},
        status: null,
        error: null
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.weatherData = action.payload;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});