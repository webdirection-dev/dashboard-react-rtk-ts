import React from "react";

import {useAppSelector, useAppDispatch} from "../../hook";
import { Card } from '../../UI/Card'
import { Stack } from '../../UI/Stack'
import { Badge } from '../../UI/Badge'
import {removeFilter, clearFilter, selectFilters} from './filter-slice'

const FilterPanel: React.FC = () => {
    const dispatch = useAppDispatch()
    const currentFilters = useAppSelector(selectFilters)

    if (currentFilters.length === 0) return null

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack pos=''>
                    {
                        currentFilters.map(i => {
                            return(
                                <Badge
                                    key={i}
                                    variant='clearable'
                                    onClear={() => dispatch(removeFilter(i))}
                                    {...i}
                                >
                                    {i}
                                </Badge>
                            )
                        })
                    }
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(clearFilter())}
                >Clear</button>
            </div>
        </Card>
    )
}

export default FilterPanel;