import {useDispatch} from 'react-redux'
import {addFilter} from "../filter/filter-slice"
import JobPosition from './JobPosition'

import {usePositions} from "./use-positions";
import {useFetchPositions} from "./use-fetch-positions";

const JobList = () => {
    useFetchPositions()
    const dispatch = useDispatch()
    const positions = usePositions()

    const handleAddFilter = (str) => {
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