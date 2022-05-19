import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: '@@filter',
    initialState: [],

    reducers: {
        addFilter: (state, action) => {
            if (!state.includes(action.payload)) state.push(action.payload)
        },
        removeFilter: (state, action) => state.filter(i => i !== action.payload),

        clearFilter: () => [],
    },
})

export const {addFilter, removeFilter, clearFilter} = filtersSlice.actions
export const filterReducer = filtersSlice.reducer

//селекторы
export const selectFilters = state => state.filters