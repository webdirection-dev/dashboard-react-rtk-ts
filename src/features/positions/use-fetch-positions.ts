import {useEffect} from "react"
import {useAppDispatch} from "../../hook";

import {addPositions} from "./position-slice"
import data from '../../mock/data.json'

export const useFetchPositions = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(addPositions(data))
    }, [dispatch])
}