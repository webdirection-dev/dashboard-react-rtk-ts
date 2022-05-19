import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../../store"

export type Position = {
    "id"?: number,
    "company": string;
    "logo": string;
    "new": boolean;
    "featured": boolean;
    "position": string;
    "role": string;
    "level": string;
    "postedAt": string;
    "contract": string;
    "location": string;
    "languages": [] | string[];
    "tools": [] | string[];
}

type PositionState = Position[]

const initialState: PositionState = []

const positionSlice = createSlice({
    name: '@@position',
    initialState,

    reducers: {
        addPositions: (_, action: PayloadAction<PositionState>) => action.payload
    }
})

export const {addPositions} = positionSlice.actions
export const positionReducer = positionSlice.reducer

//selectors
export const selectAllPositions = (state: RootState) => state.positions
export const selectVisiblePositions = (state: RootState, filters: string[] = []) => {
    if (filters.length === 0) return state.positions

    return state.positions.filter(i => {
        let posFilters: string[] = []
        posFilters = posFilters.concat(i.role, i.level, ...i.languages, ...i.tools)

        return filters.every(j => posFilters.includes(j))
    })
}