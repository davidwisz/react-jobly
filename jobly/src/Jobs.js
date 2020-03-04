import React, { useEffect, useState } from 'react';
import JoblyAPI from './JoblyAPI';
import JobCard from './JobCard';
import Search from './Search';
import './Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getJobs() {
      let res = await JoblyAPI.getJobs();
      setJobs(res);
    }
    getJobs();
  }, []);

  async function search(formData) {
    let res = await JoblyAPI.searchJobs(formData);
    setJobs(res);
  }

  return (
    <div className='Jobs'>
      <h1>Jobs</h1>
      <Search findItem={search} />
      {jobs.map(job => {
        return <JobCard key={jobs.id} job={job} />
      })}
    </div>
  )
}

export default Jobs; 