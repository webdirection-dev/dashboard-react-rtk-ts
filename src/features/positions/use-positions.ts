import {useAppSelector} from "../../hook";
import {selectFilters} from "../filter/filter-slice"
import {selectVisiblePositions} from "./position-slice"

export const usePositions = () => {
    const currentFilters = useAppSelector(selectFilters)

    return useAppSelector(state => selectVisiblePositions(state, currentFilters))
}