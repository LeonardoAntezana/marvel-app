import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./states/favortesSlice";

export default configureStore({
    reducer: {
        favorites: favoritesSlice,
    }
})