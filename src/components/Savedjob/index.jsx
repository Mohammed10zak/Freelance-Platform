import React from 'react'
import { useJobContext } from '../../context/jobContext';
import JobCard from '../JobCard'

const Savedjob = () => {
  const { state, addToSaved, removeFromSaved } = useJobContext();

  return (
    <JobCard Jobdetails={state.jobs}/>
  )
}

export default Savedjob