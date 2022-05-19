import {configureStore} from "@reduxjs/toolkit"
import {positionReducer} from "./features/positions/position-slice"
import {filterReducer} from "./features/filter/filter-slice";

const store = configureStore({
    reducer: {
        positions: positionReducer,
        filters: filterReducer,
    },

    devTools: true,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
