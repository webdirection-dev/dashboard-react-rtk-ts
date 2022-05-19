import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../../store";

type Filter = string
type FilterState = Filter[]

const initialState: FilterState = []

const filtersSlice = createSlice({
    name: '@@filter',
    initialState,

    reducers: {
        addFilter: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) state.push(action.payload)
        },
        removeFilter: (state, action: PayloadAction<string>) => state.filter(i => i !== action.payload),

        clearFilter: () => [],
    },
})

export const {addFilter, removeFilter, clearFilter} = filtersSlice.actions
export const filterReducer = filtersSlice.reducer

//селекторы
export const selectFilters = (state: RootState) => state.filters