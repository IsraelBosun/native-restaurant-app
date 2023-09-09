import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice"
import RestaurantSlice from "./slices/RestaurantSlice"

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        restaurant: RestaurantSlice
    },
})