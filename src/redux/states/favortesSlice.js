import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers:{
        addFavorite: (state, action) => [...state, action.payload],
        deleteFavorite: (state, action) => state.filter(elem => elem.id !== action.payload),
    }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer