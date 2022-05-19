import React from "react"

import {useAppDispatch} from "../../hook"
import {addFilter} from "../filter/filter-slice"

import JobPosition from './JobPosition'
import {usePositions} from "./use-positions"
import {useFetchPositions} from "./use-fetch-positions"

const JobList: React.FC = () => {
    useFetchPositions()
    const dispatch = useAppDispatch()
    const positions = usePositions()

    const handleAddFilter = (str: string) => {
        dispatch(addFilter(str))
    }

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    )
}

export default JobList;