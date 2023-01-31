import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utilities/getAxios";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage('favorites') ? JSON.parse(getLocalStorage('favorites')): [],
    reducers:{
        addFavorite: (state, action) => {
            setLocalStorage('favorites', [...state, action.payload]);
            return [...state, action.payload]
        },
        deleteFavorite: (state, action) => {
            const listFilter = state.filter(elem => elem.id !== action.payload)
            setLocalStorage('favorites', listFilter);
            return listFilter
        },
    }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer