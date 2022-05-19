import {useSelector} from "react-redux"
import {selectFilters} from "../filter/filter-slice"
import {selectVisiblePositions} from "./position-slice"

export const usePositions = () => {
    const currentFilters = useSelector(selectFilters)

    return useSelector(state => selectVisiblePositions(state, currentFilters))
}