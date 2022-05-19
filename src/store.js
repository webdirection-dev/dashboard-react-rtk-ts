import {configureStore} from "@reduxjs/toolkit"
import {positionReducer} from "./features/positions/position-slice"
import {filterReducer} from "./features/filter/filter-slice";

export const store = configureStore({
    reducer: {
        positions: positionReducer,
        filters: filterReducer,
    },

    devTools: true,
})