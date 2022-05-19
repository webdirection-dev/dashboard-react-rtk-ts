import React from "react";
import {Position} from './position-slice'
import { Badge } from '../../UI/Badge'
import { Card } from '../../UI/Card'
import { Stack } from '../../UI/Stack'

// слияние type Position and interface IProps
interface IJobPosition extends Position {
    handleAddFilter: (str: string) => void
}

const JobPosition: React.FC<IJobPosition> = ({
                         id,
                         company,
                         logo,
                         new: isNew,
                         featured,
                         position,
                         role,
                         level,
                         postedAt,
                         contract,
                         location,
                         languages,
                         tools,
                         handleAddFilter,
                     }) => {
    let badges: string[] = []
    badges = badges.concat(role, level, ...languages, ...tools)

    return (
        <Card isFeatured={featured}>
            <div className='job-position'>
                <div className='job-position-info'>
                    <img
                        className='job-position-avatar'
                        src={logo}
                        alt={company}
                    />

                    <div className='job-position-body'>
                        <div className='job-postion-company'>
                            <h3>{company}</h3>

                            {(isNew || featured) && (
                                <Stack pos=''>
                                    {isNew && (
                                        <Badge variant="rounded" colorScheme="primary">
                                            NEW!
                                        </Badge>
                                    )}
                                    {featured && (
                                        <Badge variant="rounded" colorScheme="dark">
                                            FEATURED
                                        </Badge>
                                    )}
                                </Stack>
                            )}
                        </div>

                        <h2 className='job-position-title'>
                            {position}
                        </h2>

                        <Stack pos=''>
                            <div className='job-position-meta'>
                                {postedAt}
                            </div>

                            <div className='job-position-meta'>
                                {contract}
                            </div>

                            <div className='job-position-meta'>
                                {location}
                            </div>
                        </Stack>
                    </div>
                </div>

                <Stack pos=''>
                    {badges.map(item => (
                        <Badge
                            key={item}
                            onClick={() => handleAddFilter(item)}
                        >{item}</Badge>
                    ))}
                </Stack>
            </div>
        </Card>
    )
}

export default JobPosition